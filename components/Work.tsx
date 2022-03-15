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
    {
      title: "CNJ 10 years",
      img: "/projects/cnj10.png",
      url: "https://10years.cnj.si/",
    },
  ];
  return (
    <section
      id="Work"
      data-scroll-section
      className="flex flex-col justify-center py-20 lg:min-h-screen lg:h-full lg:px-40 pb-28 lg:py-40"
    >
      <InView
        threshold={0.3}
        onChange={(inView) => {
          onVisible(inView);
        }}
      >
        <div className="max-w-xl ">
          <h2 className="text-3xl font-bold text-white lg:text-5xl font-heading">
            Work
          </h2>
          <p className="mt-8 text-sm text-white lg:text-base">
            Here are some of the projects
            <br /> I worked on as developer in recent years...
          </p>
          <div className="grid gap-6 pr-20 mt-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                key={index}
                className="block p-4 transition duration-200 border border-gray-400 hover:scale-105"
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
                <h3 className="mt-4 text-sm text-white  font-heading lg:text-base">
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
