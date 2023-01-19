import Head from "next/head";
import Image from "next/image";
import { Roboto } from "@next/font/google";
import Link from "next/link";
import Header from "../components/Header";
import TextLink from "../components/TextLink";

const roboto = Roboto({ weight: ["400", "700"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Rasmus Hag Løvstad</title>
        <meta name="description" content="Developer & Student" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`max-w-screen-2xl mx-auto text-white visited:divide-purple-300 ${roboto.className}`}
      >
        <div>
          <div className="flex flex-row h-screen items-center gap-8">
            <div className="min-w-fit">
              <h5 className="text-[8rem] leading-[9rem]">Hello,</h5>
              <h5 className="text-[8rem] leading-[9rem]">I am Rasmus.</h5>
            </div>
            <div>
              <h2 className="text-lg">
                Software developer for{" "}
                <TextLink href="https://kvalifik.dk">Kvalifik</TextLink>.
              </h2>
              <h2 className="text-lg">
                Pursuing a bachelor&apos;s degree in Computer Science at{" "}
                <TextLink href="https://di.ku.dk/">DIKU</TextLink>, and will
                soon start on the corresponding master&apos;s programme.
              </h2>
              <h2 className="text-lg">
                Occasionally share my thoughts and review music on my{" "}
                <TextLink href="/blog">blog</TextLink>.
              </h2>
              <h2 className="text-lg">
                Contact information is available on my{" "}
                <TextLink href="/cv">CV</TextLink>.
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
