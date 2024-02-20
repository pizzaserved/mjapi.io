// Initially needed to be ran post-build, post-copying the posts to root, to allow search engines to discover the shorter URL to the posts (url.com/post rather than url.com/blog/post)

const fs = require('fs');
const path = require('path');
const distPath = './dist'; // Path to your dist folder

// Function to format date to YYYY-MM-DDTHH:MM:SS+00:00
const formatDate = (date) => {
  const pad = (num) => (num < 10 ? '0' + num : num);
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}T${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}+00:00`;
};

const generateSitemap = () => {
  const domain = fs.readFileSync(path.join(distPath, 'CNAME'), 'utf8').trim();
  const urls = fs.readdirSync(distPath)
    .filter(item => {
      const itemPath = path.join(distPath, item);
    //   return fs.statSync(itemPath).isDirectory() || path.extname(item) === '.html';
      return fs.statSync(itemPath).isDirectory();
    })
    .map(page => {
      const itemPath = path.join(distPath, page);
      const stats = fs.statSync(itemPath);
      const lastMod = formatDate(stats.mtime);
      return `  <url>\n    <loc>http://${domain}/${page}</loc>\n    <lastmod>${lastMod}</lastmod>\n  </url>`;
    });

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;

  fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemapContent);
  console.log('Sitemap generated successfully with domain from CNAME and last modified dates!');
};

generateSitemap();