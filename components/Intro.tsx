import { InView } from "react-intersection-observer";

type Props = {
  onVisible: Function;
};

export default function Intro({ onVisible }: Props) {
  return (
    <section
      id="Intro"
      data-scroll-section
      className="min-h-screen flex w-full flex-col h-full lg:justify-center lg:px-40 pt-48 lg:pt-0 "
    >
      <InView
        threshold={0.6}
        onChange={(inView) => {
          onVisible(inView);
          console.log(inView);
        }}
      >
        <h1 className=" text-4xl lg:text-8xl font-bold text-white font-heading">
          Portfolio
        </h1>
        <p className="text-white text-sm mt-4 lg:mt-8 max-w-lg lg:text-base">
          Hey there, I&apos;m Manuel and this is my portfolio. Scroll down to
          find out more about me or if you are lazy
          <a href={`#About`} data-scroll-to className=" ml-1 underline">
            click here.
          </a>
        </p>
      </InView>
    </section>
  );
}
