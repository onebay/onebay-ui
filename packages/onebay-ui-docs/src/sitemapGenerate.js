const path = require('path')
const SitemapGenerator = require('sitemap-generator');
 
// create generator
const generator = SitemapGenerator('http://onebay.io', {
  stripQuerystring: false,
  filepath: path.resolve(__dirname, '../.vitepress/dist/sitemap.xml')
});
 
// register event listeners
generator.on('done', () => {
  // sitemaps created
});
 
// start the crawler
generator.start();