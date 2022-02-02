import React from "react";
import dynamic from "next/dynamic";
import p5Types from "p5"; //Import this for typechecking and intellisense

// Will only import `react-p5` on client-side
const Sketch: any = dynamic(
  (): any => import("react-p5").then((mod) => mod.default),
  {
    ssr: false,
  }
);
interface ComponentProps {
  //Your component props
}

let x = 50;
let y = 50;

export default function Lines(props: ComponentProps) {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x++;
  };

  // Will only render on client-side
  return <Sketch setup={setup} draw={draw} />;
}
