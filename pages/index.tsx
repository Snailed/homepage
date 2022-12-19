import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rasmus Hag Løvstad</title>
        <meta name="description" content="Developer & Student" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen-lg mx-auto text-white pb-12">
        <div className="py-12 flex align-bottom justify-between">
          <h1 className="text-2xl">Rasmus Løvstad</h1>
          <div className="mt-auto h-full">
            <Link className="mr-4" href="/">
              CV
            </Link>
            <Link className="" href="/blog">
              Blog
            </Link>
          </div>
        </div>
        <div>
          <div className="grid gap-2 grid-cols-3">
            <div>
              <h1 className="text-4xl mb-8">Curriculum Vitae</h1>
              <h2 className="text-2xl mb-2">Contact Information</h2>

              <table className="table-fixed">
                <tr>
                  <td className="pr-12 font-bold">Phone</td>{' '}
                  <td>
                    <a href="tel:+4529867238">+45 29 86 72 38</a>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Email</td>{' '}
                  <td>
                    <a href="mailto:rasmus.hag.lovstad@gmail.com">
                      rasmus.hag.lovstad@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-bold">Socials</td>
                  <td className="">
                    <a href="https://www.linkedin.com/in/rasmus-hag-l%C3%B8vstad/">
                      LinkedIn,{'   '}
                    </a>
                    <a href="https://github.com/Snailed/">Github</a>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-span-2 flex justify-end">
              <Image
                src="/rasmus-2-new.jpg"
                alt="Portrait"
                className="rounded-full"
                width={300}
                height={300}
              />
            </div>
          </div>
          <h2 className="text-2xl mb-6 mt-12">Work Experience</h2>
          <div className="grid gap-6 grid-cols-3">
            <div className="">
              <h3 className="font-bold text-lg">Kvalifik ApS</h3>
              <p>Full stack developer</p>
              <p className="">2018-present</p>
            </div>
            <div className="col-span-2">
              <p>
                Kvalifik is a digital agency that produces high-quality software
                solutions to innovative changemakers. Throughout my time as a
                software developer, I have implemented numerous digital systems
                with responsibility for areas including but not limited to
              </p>
              <ul className="mt-4 pl-4 list-disc">
                <li>
                  Backend development using Node.js, TypeScript, NestJS and
                  PostgreSQL
                </li>
                <li>
                  Frontend development using Next.js, TypeScript, TailwindCSS
                  and Vercel
                </li>
                <li>
                  Infrastructure management using Google Cloud Platform, Linux
                  and Terraform
                </li>
                <li>
                  DevOps using Github Actions, Docker and Node.js scripting
                </li>
                <li>
                  Internal team processes by leading daily standups, sprint
                  plannings and review meetings with customers
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl mb-6 mt-12">Education</h2>
          <div className="grid gap-2 gap-y-6 grid-cols-3">
            <div className="">
              <h3 className="font-bold text-lg">
                Bachelor of Computer Science
              </h3>
              <p>University of Copenhagen</p>
              <p className="">2019-present (graduation in July 2023)</p>
              <p>GPA 11.3 (Danish scale out of 12)</p>
            </div>
            <div className="col-span-2">
              <p>
                I am currently half a semester from finishing my bachelor's
                degree in Computer Science at the University of Copenhagen. I
                have chosen the Data Science specialization, which has developed
                my interest within data science, machine learning and algorithms
                and data structures. My bachelor's thesis was on the algorithmic
                problem of Similarity Searching within randomized algorithms,
                where I had Mikkel Thorup as my supervisor, who is highly
                regarded internationally within the field.
              </p>
              <p>
                My studies have been prolonged by COVID-19 cancelling a study
                exchange to Singapore last minute (twice), leaving me with large
                gaps in my student plan without courses, where I went to Uldum
                Højskole instead.
              </p>
              <ul className="mt-4 pl-4 list-disc">
                <li>
                  <a href="https://github.com/Snailed/bachelor-project/blob/main/main.pdf">
                    Link to bachelor's thesis
                  </a>
                </li>
                <li>
                  <a href="https://studier.ku.dk/bachelor/datalogi/">
                    Link to study description
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="font-bold text-lg">Danish Folk Highschool</h3>
              <p>Uldum Højskole</p>
              <p className="">Fall 2022</p>
            </div>
            <div className="col-span-2"></div>
            <div className="">
              <h3 className="font-bold text-lg">Studentereksamen</h3>
              <p>Allerød Gymnasium</p>
              <p className="">2015-2018</p>
              <p>GPA 11.7 (Danish scale out of 12)</p>
            </div>
          </div>
          <h2 className="text-2xl mb-6 mt-12">Related Qualifications</h2>
          <div className="grid gap-6 grid-cols-3">
            <div className="">
              <h3 className="font-bold text-lg">
                Founding Board Member & Teacher
              </h3>
              <p>Coding Pirates Allerød</p>
              <p className="">2017-2019</p>
            </div>
            <div className="col-span-2">
              <p>
                By helping found the Allerød franchise of the Coding Pirates
                organization, I learned the fundamentals of board work,
                association structure, bylaws and volunteer management. My
                volunteer work as a teacher also taught much about presentation
                techniques towards a non-technical audience that I have found
                immensely useful ever since.
              </p>
            </div>

            <div className="">
              <h3 className="font-bold text-lg">Founding Board Member</h3>
              <p>Mønten Kollegium Board</p>
              <p className="">2019-2022</p>
            </div>
            <div className="col-span-2">
              <p>
                As a founding board member, I helped bootstrap a resident
                community at the recently started Mønten Kollegium on Amager by
                organizing numerous events for residents, implementing project
                management practices to our different committees and being
                chairman of the party committee for several years.
              </p>
            </div>
            <div className="">
              <h3 className="font-bold text-lg">Band Leader</h3>
              <p>Uldum Højskole Party Band</p>
              <p className="">2022</p>
            </div>
            <div className="col-span-2">
              <p>
                Responsible for managing band members, planning, arranging
                pieces and performing at multiple events.
              </p>
            </div>
          </div>
          <h2 className="text-2xl mb-6 mt-12">Awards</h2>
          <div className="grid gap-6 grid-cols-3">
            <div className="">
              <h3 className="font-bold text-lg">
                Lundbeckfondens Formidlingspris
              </h3>
              <p>Unge Forskere</p>
              <p className="">2022</p>
            </div>

            <div className="col-span-2">
              <p>
                This award was given for giving the best presentation of a
                scientific project to recipients of all ages and backgrounds at
                the Danish national science fair. Included in the prize was the
                opportunity to attend the London International Youth Science
                Forum, which I did the same year, having lectures from many of
                the most respected scientists in the UK.
              </p>
            </div>
            <div className="">
              <h3 className="font-bold text-lg">Finalist</h3>
              <p>Astro Pi</p>
              <p className="">2018</p>
            </div>
            <div className="col-span-2">
              <p>
                Reaching the finals at the Astro Pi competition allowed my group
                and I to run our research code on a Raspberry Pi aboard the
                International Space Station (ISS).
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
