import { InView } from "react-intersection-observer";

type Props = {
  onVisible: Function;
};

export default function About({ onVisible }: Props) {
  return (
    <section
      id="About"
      data-scroll-section
      className="flex flex-col justify-center py-10 lg:min-h-screen lg:h-full lg:px-40 lg:py-40"
    >
      <InView
        threshold={0.6}
        onChange={(inView) => {
          onVisible(inView);
        }}
      >
        <h2 className="text-3xl font-bold text-white lg:text-5xl font-heading">
          About
        </h2>
        <p className="max-w-xl mt-8 text-sm text-white lg:text-base">
          I&apos;m a Front-End developer located in Slovenia. I studied graphic
          design but out of a desire to build my own designs, I learned
          programming. I enjoy building interactive and dynamic experiences with
          nonintrusive animations and UI effects. Find out more about my work
          experience on
          <a
            href={`https://www.linkedin.com/in/manuel-felda-563a66184/`}
            target="_blank"
            rel="noreferrer"
            className="ml-1 underline "
          >
            LinkedIn
          </a>{" "}
          or check out some of my
          <a href={`#Work`} data-scroll-to className="ml-1 underline ">
            work
          </a>
          .
        </p>

        <h3 className="max-w-xl pb-1 mt-6 text-lg text-white border-b border-gray-400 font-heading">
          Stack
        </h3>
        <p className="mt-4 text-sm text-white lg:text-base">
          React, Next, Vue, Nuxt, Tailwind CSS
        </p>
      </InView>
    </section>
  );
}
