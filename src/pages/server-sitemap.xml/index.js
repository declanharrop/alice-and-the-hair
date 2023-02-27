import { gql } from '@apollo/client';
import { getServerSideSitemap } from 'next-sitemap';
import client from '../../../apollo-client';

const GET_POST_URLS = gql`
  query posts {
    stories {
      slug
      updatedAt
    }
  }
`;

export const getServerSideProps = async (ctx) => {
  // const [getStoryUrls, { data }] = useLazyQuery(GET_STORY_URLS);

  const pageUrls = await client.query({ query: GET_POST_URLS });

  const pageSitemaps = pageUrls.data.pages.map((item) => ({
    loc: `https://america-uk.com/stories/${item.slug}`,
    lastmod: item.updatedAt,
  }));

  const fields = [...pageSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
