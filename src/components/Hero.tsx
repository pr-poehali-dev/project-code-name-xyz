import { useScroll, useTransform, motion, animate, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  const scale = useMotionValue(1);
  useEffect(() => {
    const controls = animate(scale, [1, 1.2, 1], {
      duration: 0.8,
      repeat: Infinity,
      repeatDelay: 0.3,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [scale]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/e2777924-1b7f-4818-bd63-b7e6c541a958/files/09902cf0-1ff0-4139-b665-91d9b66acefa.jpg"
          alt="Romantic pink red background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <motion.div style={{ scale }} className="text-7xl md:text-9xl mb-6 inline-block">
          ❤️
        </motion.div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          Я ТЕБЯ ЛЮБЛЮ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Три слова, которые меняют всё
        </p>
      </div>
    </div>
  );
}