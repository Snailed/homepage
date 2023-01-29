import fs from "fs";
import matter from "gray-matter";
import { GetServerSideProps } from "next";

function generateSiteMap(posts: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.rasmuslovstad.dk/</loc>
     </url>
     <url>
       <loc>https://www.rasmuslovstad.dk/cv</loc>
     </url>
     <url>
       <loc>https://www.rasmuslovstad.dk/portfolio</loc>
     </url>
     <url>
       <loc>https://www.rasmuslovstad.dk/blog</loc>
     </url>
     ${posts
       .map((fileName) => {
         const readFile = fs.readFileSync(`blog/${fileName}`, "utf8");
         const { data } = matter(readFile);
         return `
       <url>
           <loc>${`https://www.rasmuslovstad.dk/blog/${fileName.replace(
             ".md",
             ""
           )}`}</loc>
          <lastmod>${data.date}</lastmod>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // We make an API call to gather the URLs for our site
  let posts: string[] = [];
  if (fs.existsSync("blog")) {
    posts = fs.readdirSync("blog");
  }
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
