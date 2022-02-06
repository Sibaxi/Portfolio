export default function Intro({}) {
  return (
    <section
      id="Intro"
      data-scroll-section
      className="min-h-screen flex  flex-col h-full justify-center px-40 "
    >
      <h1 className=" text-8xl font-bold text-white font-heading">Portfolio</h1>
      <p className="text-white mt-8 max-w-lg">
        Hey there, Im Manuel and this is my portfolio. Scroll down to find out
        more about me or if you are lazy
        <a href={`#About`} data-scroll-to className=" ml-1 underline">
          click here.
        </a>
      </p>
      {/* <Lines /> */}
    </section>
  );
}
