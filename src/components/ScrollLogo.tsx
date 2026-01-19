import { motion, useScroll, useTransform } from "framer-motion";
import logoAxis from "@/assets/logo-axis.png";

const ScrollLogo = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.15, 0.08, 0.08, 0.15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 90, 180, 270, 360]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.div
      className="fixed bottom-8 right-8 pointer-events-none z-10 hidden lg:block"
      style={{ opacity, scale, rotate, y }}
    >
      <img
        src={logoAxis}
        alt=""
        className="w-24 h-24 object-contain drop-shadow-2xl"
        aria-hidden="true"
      />
    </motion.div>
  );
};

export default ScrollLogo;
