// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aliceandthehair.co.uk',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://aliceandthehair.co.uk/server-sitemap.xml', // <==== Add here
    ],
  },
};
