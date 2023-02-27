import { gql } from '@apollo/client';
import { getServerSideSitemap } from 'next-sitemap';
import client from '../../../apollo-client';

const GET_POST_URLS = gql`
  query posts {
    posts {
      slug
      updatedAt
    }
  }
`;

export const getServerSideProps = async (ctx) => {
  // const [getStoryUrls, { data }] = useLazyQuery(GET_STORY_URLS);

  const pageUrls = await client.query({ query: GET_POST_URLS });

  const pageSitemaps = pageUrls.data.posts.map((item) => ({
    loc: `https://aliceandthehair.co.uk/stories/${item.slug}`,
    lastmod: item.updatedAt,
  }));

  const fields = [...pageSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
