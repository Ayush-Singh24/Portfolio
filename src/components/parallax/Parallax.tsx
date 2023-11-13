import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({
  text,
  color,
}: {
  text: string;
  color: "dark" | "light";
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background:
          color === "dark"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>{text}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            color === "dark" ? "images/planets.png" : "images/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
}
