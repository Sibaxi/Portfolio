import { Item } from "framer-motion/types/components/Reorder/Item";

export default function Work() {
  const projects = [
    {
      title: "Argeta soundtasting",
      img: "https://picsum.photos/200/200",
      url: "",
    },
    {
      title: "Lahkonocnice",
      img: "https://picsum.photos/200/200",
      url: "",
    },
    {
      title: "Hypex",
      img: "https://picsum.photos/200/200",
      url: "",
    },
    {
      title: "Argeta soundtasting",
      img: "https://picsum.photos/200/200",
      url: "",
    },
  ];
  return (
    <section
      id="Work"
      data-scroll-section
      className="min-h-screen flex flex-col h-full justify-center px-40 py-40"
    >
      <div className=" max-w-xl">
        <h2 className="text-5xl text-white font-bold font-heading">Work</h2>
        <p className="text-white mt-8">
          Here are some of the projects
          <br /> I worked on as developer in recent years...
        </p>
        <div className="grid grid-cols-2 mt-8 gap-6">
          {projects.map((project, index) => (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              key={index}
              className="block border border-gray-400 p-4 hover:scale-105 transition duration-200"
            >
              <img src={project.img} className="w-full object-cover" />
              <h3 className=" text-white font-heading mt-4">{project.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
