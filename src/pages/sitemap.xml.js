import { frontendUrl, wordpressUrl } from "@/utils/variables";

// Define the external data URLs
const EXTERNAL_POST_DATA_URL = `${wordpressUrl}/wp-json/wp/v2/blogs?per_page=100`;
const EXTERNAL_PAGE_DATA_URL = `${wordpressUrl}/wp-json/wp/v2/pages?per_page=100`;

// Function to generate the XML sitemap
function generateSiteMap(posts, pages) {
  // Function to create a URL entry for the sitemap
  const urlEntry = (url) => `
    <url>
      <loc>${url}</loc>
    </url>
  `;

  // Generate URLs for posts
  const postsUrls = posts.map(({ link }) => {
    // Ensure the URL is correctly formatted
    const formattedLink = link.includes("blogs") ? link.substring(link.indexOf("blogs")).slice(0, -1) : link;
    return `${frontendUrl}${formattedLink}/`;
  });

  // Generate URLs for pages
  const pagesUrls = pages.map(({ link }) => {
    // Ensure the URL is correctly formatted
    const formattedLink = link.includes("pages") ? link.substring(link.indexOf("pages")).slice(0, -1) : link;
    return `${frontendUrl}${formattedLink}/`;
  });

  // Generate the XML sitemap
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlEntry(frontendUrl)} <!-- Add the homepage URL -->
    ${postsUrls.map(urlEntry).join('')}
    ${pagesUrls.map(urlEntry).join('')}
  </urlset>`;
}

// Define the SiteMap component
function SiteMap() {
  // getServerSideProps will handle the data fetching and sitemap generation
}

// Fetch data and generate the sitemap on the server side
export async function getServerSideProps({ res }) {
  try {
    // Fetch posts and pages data from the WordPress API
    const [postsResponse, pagesResponse] = await Promise.all([
      fetch(EXTERNAL_POST_DATA_URL),
      fetch(EXTERNAL_PAGE_DATA_URL),
    ]);

    // Check if the responses are OK
    if (!postsResponse.ok || !pagesResponse.ok) {
      throw new Error('Failed to fetch data from WordPress API');
    }

    // Parse the JSON data from the responses
    const posts = await postsResponse.json();
    const pages = await pagesResponse.json();

    // Log the fetched data for debugging
    console.log('Posts:', posts);
    console.log('Pages:', pages);

    // Generate the XML sitemap
    const sitemap = generateSiteMap(posts, pages);

    // Set the response headers and write the sitemap XML
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    // Log any errors and respond with an error status
    console.error('Error generating sitemap:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
    return {
      props: {},
    };
  }
}

export default SiteMap;
