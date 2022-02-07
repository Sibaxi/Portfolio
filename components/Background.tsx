import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Randomize(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function Background() {
  const [violet, setViolet] = useState({ x: [0], y: [0] });
  const [green, setGreen] = useState({ x: [0], y: [0] });

  useEffect(() => {
    let newValues = {
      x: [
        Randomize(-10, -250),
        Randomize(-10, -250),
        Randomize(-10, -250),
        Randomize(-10, -250),
        Randomize(-10, -250),
      ],
      y: [
        Randomize(-10, -250),
        Randomize(-10, -250),
        Randomize(-10, -250),
        Randomize(-10, -250),
        Randomize(-10, -250),
      ],
    };
    setViolet(newValues);
    newValues = {
      x: [
        Randomize(-10, -250),
        Randomize(-10, -250),
        Randomize(-10, -250),
        Randomize(-10, -250),
        Randomize(-10, -250),
      ],
      y: [
        Randomize(-10, -250),
        Randomize(-10, -250),
        Randomize(-10, -250),
        Randomize(-10, -250),
        Randomize(-10, -250),
      ],
    };
    setGreen(newValues);
  }, []);
  return (
    <div className="fixed lg:absolute inset-0 flex flex-col items-end justify-between overflow-hidden">
      <motion.div
        initial={{ scale: 2 }}
        animate={{
          scale: 2,
          x: violet.x,
          y: violet.y,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="h-56 w-56  lg:h-80 lg:w-80  rounded-full blur-3xl bg-indigo-900 mix-blend-exclusion mr-20"
      ></motion.div>
      <motion.div
        initial={{ scale: 2 }}
        animate={{
          scale: 2,
          x: green.x,
          y: green.y,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="h-56 w-56 lg:h-80 lg:w-80 rounded-full blur-3xl  opacity-30 bg-teal-600  mr-80"
      ></motion.div>
    </div>
  );
}
