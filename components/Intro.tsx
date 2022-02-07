export default function Intro() {
  return (
    <section
      id="Intro"
      data-scroll-section
      data-scroll
      className="min-h-screen flex w-full flex-col h-full justify-center lg:px-40 "
    >
      <h1 className=" text-4xl lg:text-8xl font-bold text-white font-heading">
        Portfolio
      </h1>
      <p className="text-white text-sm mt-8 max-w-lg lg:text-base">
        Hey there, I&apos;m Manuel and this is my portfolio. Scroll down to find
        out more about me or if you are lazy
        <a href={`#About`} data-scroll-to className=" ml-1 underline">
          click here.
        </a>
      </p>
    </section>
  );
}
