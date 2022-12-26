import fs from 'fs'
import matter from 'gray-matter';
import BlogLayout from '../../components/BlogLayout';
import Header from '../../components/Header';
import { BlogFrontmatter } from '../../types/blog';
import md from 'markdown-it' 
import { format } from 'date-fns';
import Head from 'next/head';
import { Roboto } from '@next/font/google';
import Image from 'next/image';

type BlogPostProps = {
  frontmatter: BlogFrontmatter,
  content: string
}
const roboto = Roboto({ weight: ['400', '700'] });
export default function BlogPost({ frontmatter, content }: BlogPostProps) {
  const formattedContent = md({
    breaks: true,
    typographer: true
  }).render(content)
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
    <div>
      <Header />
        <article className="prose prose-invert mx-auto"  >

    {frontmatter.imgSrc && frontmatter.imgAlt && (<Image width={800} height={800} src={frontmatter.imgSrc} alt={frontmatter.imgAlt} />)}
      <h1 className="mb-2" >{frontmatter.title || 'Unknown title'}</h1>
    { frontmatter.date && <h5 className="italic mb-8">
        {format(new Date(frontmatter.date), 'MMMM Mo, y')}
      </h5> }
          <div dangerouslySetInnerHTML={{ __html: formattedContent }}  /></article>
    </div>
  </main>
</>

  )
}

type StaticPropParam = {
  params: {
    slug: string
  }
}
export async function getStaticPaths() {
  const files = fs.readdirSync('blog')
  const paths: StaticPropParam[] = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug }}: StaticPropParam) {
  const file = fs.readFileSync(`blog/${slug}.md`, 'utf-8')
  const {data: frontmatter, content } = matter(file)
  return {
    props: {
      frontmatter,
      content
    }
  }
}
