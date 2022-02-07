import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Lines from "../components/lines";
import { motion } from "framer-motion";
import Intro from "../components/Intro";
import About from "../components/About";
import Work from "../components/Work";
import { useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Blob from "../components/Interactive";

function Randomize(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const Home: NextPage = () => {
  const [active, setActive] = useState(0);
  const menu = ["Intro", "About", "Work"];
  const containerRef = useRef(null);
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="A personal portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          getDirection: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={
          [
            // screenW,
            // screenH,
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef} className="bg-black ">
          <nav className="fixed lg:absolute bottom-0 lg:bottom-auto lg:left-0 lg:h-full w-full lg:w-auto z-30 flex lg:flex-col justify-between lg:justify-center px-8 lg:px-20 py-4 lg:py-0 lg:space-y-24">
            {menu.map((item, index) => (
              <a href={`#${item}`} data-scroll-to key={index}>
                <motion.button
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.12,
                  }}
                  className="text-base lg:text-xl font-bold text-white font-heading"
                >
                  {item}
                </motion.button>
              </a>
            ))}
          </nav>
          <div className="  relative z-10 flex-grow mx-5 lg:ml-48">
            <Intro />

            <About />

            <Work />
          </div>

          <div className="fixed lg:absolute bottom-0 z-10  h-40 w-full lg:hidden bg-gradient-to-b from-transparent  to-black "></div>

          <Blob />
          <div className="fixed lg:absolute inset-0 flex flex-col items-end justify-between overflow-hidden">
            <motion.div
              initial={{ scale: 2 }}
              animate={{
                scale: 2,
                x: [
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                ],
                y: [
                  Randomize(-10, 250),
                  Randomize(-10, 250),
                  Randomize(-10, 250),
                  Randomize(-10, 250),
                  Randomize(-10, 250),
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className=" h-80 w-80  rounded-full blur-3xl bg-indigo-900 mix-blend-exclusion mr-20"
            ></motion.div>
            <motion.div
              initial={{ scale: 2 }}
              animate={{
                scale: 2,
                x: [
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                ],
                y: [
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                  Randomize(-10, -250),
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className=" h-80 w-80  rounded-full blur-3xl  opacity-30 bg-teal-600  mr-80"
            ></motion.div>
          </div>
        </main>
        {/* <footer className=""></footer> */}
      </LocomotiveScrollProvider>
    </>
  );
};

export default Home;
