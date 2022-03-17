import Head from "next/head";
import Image from "next/image";

import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dive deep into the World of Development</title>
        <meta name="description" content="Web development tricks, tips, tutorials, projects and much more" />
        <link rel="icon" href="/favicon.ico" />
      {/* <Script src="/demo.js" strategy="lazyOnload"></Script> */}
      </Head>

      <main className="w-3/4 mx-auto text-center px-8 mt-20" >
        <h1 className="font-semibold text-4xl">Development Made Easy</h1>
        <p className="text-3xl py-8">
          Learn and Explore the Web Development like Never Before.
        </p>

        <div className="max-w-[520px]  mx-auto text-left">
          <h2 className="font-bold text-xl py-2">Popular Blogs</h2>
          <div className="flex flex-col gap-4">
            <a href="https://nextjs.org/docs" >
              <h3 className="font-medium text-lg">How to learn javascript in 2022 &rarr;</h3>
              <p className="text-[16px]">javascript is a language used to design language for the web</p>
            </a>
            <a href="https://nextjs.org/docs" >
              <h3 className="font-medium text-lg">How to learn javascript in 2022 &rarr;</h3>
              <p className="text-[16px]">javascript is a language used to design language for the web</p>
            </a>
            <a href="https://nextjs.org/docs" >
              <h3 className="font-medium text-lg">How to learn javascript in 2022 &rarr;</h3>
              <p className="text-[16px]">javascript is a language used to design language for the web</p>
            </a>
            <a href="https://nextjs.org/docs" >
              <h3 className="font-medium text-lg">How to learn javascript in 2022 &rarr;</h3>
              <p className="text-[16px]">javascript is a language used to design language for the web</p>
            </a>
          </div>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}
