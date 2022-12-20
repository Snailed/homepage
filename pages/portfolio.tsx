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
          <PortfolioCard
            imgSrc="/studentlife-2.png"
            alt="CBS Students Logo"
            inverted={false}
            title="Cross Platform Serverless App Development for Social Media"
          >
            <p className="mb-4">
              Developed significant features across the entire stack, led sprint
              plannings, review meeting and daily standups and performed several
              maintenance updates. Read more{' '}
              <Link
                className="underline"
                href="https://www.kvalifik.dk/cases/cbs-students"
              >
                here
              </Link>
              .
            </p>
            <h5 className="text-lg font-bold">Technologies</h5>
            <ul className="list-disc pl-4">
              <li>React Native (Expo) for mobile app</li>
              <li>React for web platform</li>
              <li>TypeScript</li>
              <li>Firebase/Firestore</li>
            </ul>
          </PortfolioCard>
          <PortfolioCard
            imgSrc="/mikkeller-logo.jpg"
            alt="Mikkeller Logo"
            inverted={false}
            title="Business Critical Backend Solutions"
          >
            <p className="mb-4">
              Developed important backend features connecting ecommerce
              platforms to warehouses, reporting tax information, structuring
              data warehouse solutions and more. Was also responsible for cloud
              infrastructure and DevOps setup.
            </p>
            <h5 className="text-lg font-bold">Technologies</h5>
            <ul className="list-disc pl-4">
              <li>Node.js (NestJS)</li>
              <li>PostgreSQL</li>
              <li>TypeScript</li>
              <li>Google Cloud Platform</li>
              <li>Terraform</li>
              <li>Github Actions</li>
            </ul>
          </PortfolioCard>
        </div>
      </main>
    </>
  );
}
