import { motion } from "motion/react";
import { useEffect, useState } from "react";

const AnimatedGridLines = () => {
  const [animatedLines, setAnimatedLines] = useState<
    Array<{
      id: number;
      isHorizontal: boolean;
      position: number;
      delay: number;
      duration: number;
      reverse: boolean;
    }>
  >([]);

  useEffect(() => {
    const lines = [];
    const maxW = window.innerWidth;
    const maxH = window.innerHeight;

    for (let i = 0; i < 3; i++) {
      const top =
        Math.floor((Math.random() * (maxH * 0.8) + maxH * 0.1) / 24) * 24;
      lines.push({
        id: i,
        isHorizontal: true,
        position: top,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 6,
        reverse: Math.random() > 0.5,
      });
    }
    for (let i = 0; i < 3; i++) {
      const left =
        Math.floor((Math.random() * (maxW * 0.8) + maxW * 0.1) / 24) * 24;
      lines.push({
        id: i + 3,
        isHorizontal: false,
        position: left,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 6,
        reverse: Math.random() > 0.5,
      });
    }
    setAnimatedLines(lines);
  }, []);

  return animatedLines.map((line) => {
    if (line.isHorizontal) {
      return (
        <motion.div
          key={line.id}
          className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-black/50 to-transparent dark:via-white/50 z-0 pointer-events-none"
          style={{
            top: line.position,
            left: 0,
          }}
          initial={{ x: line.reverse ? "100vw" : "-200px" }}
          animate={{ x: line.reverse ? "-200px" : "100vw" }}
          transition={{
            repeat: Infinity,
            duration: line.duration,
            delay: line.delay,
            ease: "linear",
          }}
        />
      );
    } else {
      return (
        <motion.div
          key={line.id}
          className="absolute w-[1px] h-[200px] bg-gradient-to-b from-transparent via-black/50 to-transparent dark:via-white/50 z-0 pointer-events-none"
          style={{
            left: line.position,
            top: 0,
          }}
          initial={{ y: line.reverse ? "100vh" : "-200px" }}
          animate={{ y: line.reverse ? "-200px" : "100vh" }}
          transition={{
            repeat: Infinity,
            duration: line.duration,
            delay: line.delay,
            ease: "linear",
          }}
        />
      );
    }
  });
};

export default AnimatedGridLines;
