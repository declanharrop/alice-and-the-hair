import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HeroImage from '../../Components/Hero/HeroImage';
import formatDate from '../../lib/formatDate';
import StoryStyles from '../../styles/Story.styles';

const POST = gql`
  query post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      date
      hero {
        url
      }
      content {
        html
      }
      videoLink
      likes
    }
  }
`;
export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [getPost, { data, error, loading }] = useLazyQuery(POST, {
    variables: { slug },
  });

  useEffect(() => {
    if (slug) {
      getPost();
    }
  }, [slug]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  if (data) {
    return (
      <StoryStyles>
        <img src={data.post.hero.url} alt="" />
        <div className="story-content">
          <div className="divider" />
          <h1>{data.post.title}</h1>
          <div className="date">
            <h3>{formatDate(data.post.date)}</h3>
          </div>
          <div className="divider" />
          <div dangerouslySetInnerHTML={{ __html: data.post.content.html }} />;
          {data.post.videoLink && (
            <div dangerouslySetInnerHTML={{ __html: data.post.videoLink }} />
          )}
        </div>
      </StoryStyles>
    );
  }
  return null;
}
