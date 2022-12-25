import Head from 'next/head';
import Image from 'next/image';
import { Roboto } from '@next/font/google';
import Link from 'next/link';
import Header from '../components/Header';
import mikkellerLogo from '../public/mikkeller-logo.jpg';
import kvalifikLogo from '../public/kvalifik.png';
import studentlifeLogo from '../public/studentlife-2.png';

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
          <div
            className={`grid grid-cols-4
               flex-row
               gap-12 mb-20`}
          >
            <div className="relative h-[200px] w-[200px] col-span-1">
              <Image
                src={studentlifeLogo}
                className="object-cover object-center"
                alt="CBS Students Logo"
              />
            </div>
            <div className="col-span-3">
              <h2 className="text-2xl">
                Cross Platform Serverless App Development for Social Media
              </h2>
              <p className="mb-4">
                Developed significant features across the entire stack, led
                sprint plannings, review meeting and daily standups and
                performed several maintenance updates. Read more{' '}
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
            </div>
          </div>
          <div
            className={`grid grid-cols-4
               flex-row
               gap-12 mb-20`}
          >
            <div className="relative w-[200px] col-span-1">
              <Image
                src={mikkellerLogo}
                className="object-cover object-center"
                alt="Mikkeller Logo"
              />
            </div>
            <div className="col-span-3">
              <h2 className="text-2xl">Business Critical Backend Solutions</h2>
              <p className="mb-4">
                Developed important backend features connecting ecommerce
                platforms to warehouses, reporting tax information, structuring
                data warehouse solutions and more. Was also responsible for
                cloud infrastructure and DevOps setup.
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
            </div>
          </div>
          <div
            className={`grid grid-cols-4
               flex-row
               gap-12 mb-20`}
          >
            <div className="relative w-[200px] col-span-1">
              <Image
                src={kvalifikLogo}
                className="object-cover object-center bg-white p-4"
                alt="Mikkeller Logo"
              />
            </div>
            <div className="col-span-3">
              <h2 className="text-2xl">
                Company-wide Continuous Integration/Delivery Framework
              </h2>
              <p className="mb-4">
                Researched, implemented and documented a new framework for
                continuous integration and delivery, allowing developers to push
                code to production often, reliably and with a certancy that all
                code on production has been greenlit by automated testing. A
                special feature of this framework is that it is replicable onto
                new projects using Terraform to manage cloud resources.
              </p>
              <h5 className="text-lg font-bold">Technologies</h5>
              <ul className="list-disc pl-4">
                <li>Docker</li>
                <li>Github Actions</li>
                <li>Jest</li>
                <li>Google Cloud Platform</li>
                <li>Terraform</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
