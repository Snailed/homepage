import { Roboto } from '@next/font/google';
import { format } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import { BlogFrontmatter } from '../../types/blog';
export const getStaticProps = () => {
  const files = fs.readdirSync('blog');
  const posts: BlogPost[] = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`blog/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile) as unknown as {
      data: BlogFrontmatter;
    };
    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
};

type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
};
type BlogProps = {
  posts: BlogPost[];
};

const roboto = Roboto({ weight: ['400', '700'] });
const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Portfolio | Rasmus Hag Løvstad</title>
        <meta
          name="description"
          content="Portfolio for Rasmus Hag Løvstad, developer at Kvalifik ApS and student at UCPH Department of Computer Science"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`max-w-screen-lg mx-auto text-white visited:divide-purple-300 pb-12 p-4 ${roboto.className}`}
      >
        <Header />
        <h1 className="text-3xl">Latest posts</h1>
        <div>
          {posts
            .sort((a, b) =>
              new Date(a.frontmatter.date || 0) >
              new Date(b.frontmatter.date || 0)
                ? 1
                : -1
            )
            .map((x, i) => (
              <Link key={i} href={`/blog/${x.slug}`}>
                <h3 className="text-xl">
                  {x.frontmatter.title || 'Unknown title'}
                </h3>
                {x.frontmatter.date && (
                  <p className="italic">
                    {format(new Date(x.frontmatter.date), 'MMMM Mo, y')}
                  </p>
                )}
              </Link>
            ))}
        </div>
      </main>
    </>
  );
};
export default Blog;
