export default function About() {
  return (
    <section
      id="About"
      data-scroll-section
      data-scroll
      className="min-h-screen flex flex-col h-full justify-center lg:px-40  py-40"
    >
      <h2 className="text-3xl lg:text-5xl text-white font-bold font-heading">
        About
      </h2>
      <p className="text-white mt-8 text-sm lg:text-base max-w-xl">
        I&apos;m a Front-End developer located in Slovenia. I studided graphic
        design but of out a desire to build my own designs, I learned
        programming. I enjoy building interactive and dynamic experiences with
        nonintrusive animations and UI effects. Find out more about my work
        experience on
        <a
          href={`https://www.linkedin.com/in/manuel-felda-563a66184/`}
          target="_blank"
          rel="noreferrer"
          className=" ml-1 underline"
        >
          LinkedIn
        </a>{" "}
        or check out some of my
        <a href={`#Work`} data-scroll-to className=" ml-1 underline">
          work
        </a>
        .
      </p>

      <h3 className="mt-6 max-w-xl text-lg text-white font-heading border-b pb-1 border-gray-400">
        Stack
      </h3>
      <p className="mt-4 text-white text-sm lg:text-base">
        React, Next, Vue, Nuxt, Tailwind CSS
      </p>
    </section>
  );
}
