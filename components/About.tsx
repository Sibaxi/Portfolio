export default function About() {
  return (
    <section
      id="About"
      data-scroll-section
      className="min-h-screen flex flex-col h-full justify-center px-40  py-40"
    >
      <h2 className="text-5xl text-white font-bold font-heading">About</h2>
      <p className="text-white mt-8 ">
        Im a Front-end developer with a background in design.
      </p>
      <h3 className="mt-6 max-w-xl text-lg text-white font-heading border-b pb-1 border-gray-400">
        Stack
      </h3>
      <p className="mt-4 text-white">Vue, Nuxt, React, Next, Tailwind CSS</p>
      <h3 className="mt-6 max-w-xl text-lg text-white font-heading border-b pb-1 border-gray-400">
        Social
      </h3>
    </section>
  );
}
