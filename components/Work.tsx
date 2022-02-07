import Image from "next/image";
import cx from "classnames";
import { InView } from "react-intersection-observer";

type Props = {
  onVisible: Function;
};

export default function Work({ onVisible }: Props) {
  const projects = [
    {
      title: "Argeta soundtasting",
      img: "/projects/soundtasting.png",
      url: "https://soundtasting.argeta.com/en/",
    },
    {
      title: "Lahkonocnice",
      img: "/projects/lahkonocnice.png",
      url: "https://www.lahkonocnice.si",
    },
    {
      title: "Hypex",
      img: "/projects/hypex.png",
      url: "https://hypex.si/en",
    },
    // {
    //   title: "Argeta soundtasting",
    //   img: "/projects/soundtasting.png",
    //   url: "",
    // },
  ];
  return (
    <section
      id="Work"
      data-scroll-section
      className="lg:min-h-screen flex flex-col lg:h-full justify-center lg:px-40 py-20 pb-28 lg:py-40"
    >
      <InView
        threshold={0.3}
        onChange={(inView) => {
          onVisible(inView);
        }}
      >
        <div className=" max-w-xl">
          <h2 className="text-3xl lg:text-5xl text-white font-bold font-heading">
            Work
          </h2>
          <p className="text-white mt-8 text-sm lg:text-base">
            Here are some of the projects
            <br /> I worked on as developer in recent years...
          </p>
          <div className="grid lg:grid-cols-2 mt-8 gap-6 pr-20">
            {projects.map((project, index) => (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="block border border-gray-400 p-4 hover:scale-105 transition duration-200"
              >
                <Image
                  src={project.img}
                  className={cx(
                    "w-full object-cover",
                    index === 0 ? "object-center" : " object-left"
                  )}
                  width="300"
                  height="300"
                  alt={project.title}
                />
                <h3 className=" text-white font-heading mt-4 text-sm lg:text-base">
                  {project.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </InView>
    </section>
  );
}
