import { motion } from "framer-motion";
import logoAxis from "@/assets/logo-axis.png";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
  xl: "h-20 w-20",
};

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  return (
    <motion.div
      className={`flex items-center gap-2 sm:gap-3 cursor-pointer group ${className}`}
      initial="initial"
      whileHover="hover"
    >
      <div className="relative">
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-accent/30 rounded-full blur-lg -z-10"
          variants={{
            initial: { opacity: 0.3, scale: 1 },
            hover: { opacity: 0.6, scale: 1.1 }
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Logo image */}
        <motion.img
          src={logoAxis}
          alt="AXIS Logo"
          className={`${sizeClasses[size]} object-contain drop-shadow-lg`}
          variants={{
            initial: { rotate: 0 },
            hover: { rotate: [0, -5, 5, 0] }
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-lg sm:text-xl font-bold text-primary-foreground tracking-tight leading-none">
            AXIS
          </span>
          <span className="hidden sm:block text-[10px] sm:text-xs text-accent font-medium tracking-wide">
            Servicios Eléctricos
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
