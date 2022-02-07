import { motion } from "framer-motion";

export default function Logo() {
  return (
    <svg
      viewBox="0 0 315 263"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 absolute top-0 left-0 mx-5 my-10 lg:mx-20 lg:my-20 z-10"
    >
      <motion.circle
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
        cx="40"
        cy="202"
        r="38.5"
        stroke="white"
        strokeWidth="3"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
        d="M144.701 241.108L33.4239 21.1884L90.9169 21.1884L202.194 241.108L144.701 241.108Z"
        stroke="white"
        strokeWidth="3"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
        d="M246.701 241.108L135.424 21.1884L192.917 21.1884L304.194 241.108L246.701 241.108Z"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
}
