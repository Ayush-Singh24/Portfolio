import "./home.scss";
import { Variants, motion } from "framer-motion";
export function Home() {
  const textVariants: Variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants: Variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AYUSH SINGH</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the latest projects
            </motion.button>
            <motion.button variants={textVariants}>Contact</motion.button>
          </motion.div>
          <motion.img
            src="/images/scroll.png"
            alt="scroll"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          animate="animate"
        >
          Computer Science
        </motion.div>
        <div className="imageContainer">
          <img src="/images/ayush.png" alt="profile" />
        </div>
      </div>
    </div>
  );
}
