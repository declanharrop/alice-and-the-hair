/* eslint-disable react/destructuring-assignment */
import NextHead from 'next/head';

const defaultDescription =
  "Alice and the Hair - Hair Salon in Derby. Gorgeous locks & a non judgemental culture. Oh, and did we mention we're sustainable. Welcome to the HARE tribe";
const defaultOGURL = 'https://aliceandthehair.co.uk';
const defaultOGImage = '';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    {props.title ? (
      <title>
        {`${props.title} | Alice and the Hair Derby` ||
          'Alice and the Hair Derby'}
      </title>
    ) : (
      <title>Alice and the Hair Derby</title>
    )}
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta httpEquiv="cache-control" content="no-cache" />
    <meta httpEquiv="expires" content="0" />
    <meta httpEquiv="pragma" content="no-cache" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/favicon.ico" />
    <link rel="mask-icon" href="/static/favicon.ico" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

export default Head;
