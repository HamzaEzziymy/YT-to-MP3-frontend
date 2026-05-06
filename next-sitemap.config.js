/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yourdomain.com',
  generateRobotsTxt: false, // We use app/robots.ts instead
  exclude: ['/api/*'],
  additionalPaths: async (config) => {
    const formats = ['mp3', 'mp4', 'wav', 'ogg', 'flac']
    return formats.map((format) => ({
      loc: `/convert/${format}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }))
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },
}
