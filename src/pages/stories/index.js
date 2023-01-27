import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import PostTile from '../../Components/Tiles/PostTile';
import PostsFeedStyles from '../../styles/PostsFeed.styles';

export const POSTS = gql`
  query posts {
    posts(orderBy: date_DESC) {
      id
      title
      slug
      date
      hero {
        url(
          transformation: {
            image: { resize: { height: 400, width: 400 } }
            document: { output: { format: webp } }
          }
        )
      }
      content {
        html
      }
      likes
    }
  }
`;

export default function PostsFeed() {
  const { data, error, loading } = useQuery(POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) {
    return (
      <PostsFeedStyles>
        {data.posts.map((post) => (
          <PostTile data={post} key={post.id} />
        ))}
      </PostsFeedStyles>
    );
  }
}
