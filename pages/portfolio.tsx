import Head from 'next/head';
import Image from 'next/image';
import { Roboto } from '@next/font/google';
import Link from 'next/link';
import Header from '../components/Header';
import PortfolioCard from '../components/PortfolioCard';

const roboto = Roboto({ weight: ['400', '700'] });
export default function Portfolio() {
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
        <div>
          <h1 className="text-4xl mb-8">Portfolio</h1>
        </div>
      </main>
    </>
  );
}
