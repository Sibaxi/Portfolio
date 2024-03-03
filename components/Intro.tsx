import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

type Props = {
  onVisible: Function;
};

export default function Intro({ onVisible }: Props) {
  return (
    <section
      id="Intro"
      data-scroll-section
      className="flex flex-col w-full h-full min-h-screen pt-48 lg:justify-center lg:px-40 lg:pt-0 "
    >
      <InView
        threshold={0.6}
        onChange={(inView) => {
          onVisible(inView);
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            opacity: { duration: 1 },
          }}
          className="text-4xl font-bold text-white  lg:text-8xl font-heading font-extralight "
        >
          Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.3,
            opacity: { duration: 1 },
          }}
          className="max-w-lg mt-4 text-sm text-white lg:mt-8 lg:text-base"
        >
          Hey there, I&apos;m Manuel and this is my portfolio. Scroll down to
          find out more about me or if you are lazy
          <a href={`#About`} data-scroll-to className="ml-1 underline ">
            click here.
          </a>
        </motion.p>
      </InView>
    </section>
  );
}
