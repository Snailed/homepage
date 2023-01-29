import fs from "fs";
import matter from "gray-matter";
import { GetServerSideProps } from "next";
import { BlogFrontmatter } from "../types/blog";

function generateSiteMap(posts: ({ fileName: string } & BlogFrontmatter)[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
       .map(({ fileName, date }) => {
         return `
       <url>
           <loc>${`https://www.rasmuslovstad.dk/blog/${fileName.replace(
             ".md",
             ""
           )}`}</loc>
          <lastmod>${date}</lastmod>
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
  let posts: ({ fileName: string } & BlogFrontmatter)[] = [];
  if (fs.existsSync("blog")) {
    const fileNames = fs.readdirSync("blog");
    posts = fileNames.map((fileName) => {
      const readFile = fs.readFileSync(`blog/${fileName}`, "utf8");
      return {
        fileName,
        ...matter(readFile).data,
      };
    });
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
