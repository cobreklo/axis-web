import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { companyStats } from "@/data/services";
import logoAxis from "@/assets/logo-axis.png";

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
      {count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-24 lg:py-32 axis-dark-gradient relative overflow-hidden">
      {/* Decorative Background Logo */}
      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        whileInView={{ opacity: 0.05, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 pointer-events-none"
      >
        <img
          src={logoAxis}
          alt=""
          className="w-96 h-96 object-contain"
          aria-hidden="true"
        />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                alt="Equipo AXIS trabajando en proyecto eléctrico"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-accent text-accent-foreground p-4 sm:p-6 rounded-xl shadow-gold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="text-2xl sm:text-3xl font-bold">+10</div>
              <div className="text-xs sm:text-sm font-medium">Años</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
              Ingeniería con{" "}
              <span className="axis-gradient-text">Propósito</span>
            </h2>
            <p className="text-primary-foreground/70 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
              En AXIS Electrical Services, combinamos más de una década de
              experiencia con tecnología de vanguardia para ofrecer soluciones
              eléctricas que superan los estándares de la industria.
            </p>
            <p className="text-primary-foreground/70 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10">
              Nuestro equipo de ingenieros certificados trabaja con pasión y
              precisión, garantizando que cada proyecto sea ejecutado con los
              más altos niveles de seguridad y eficiencia energética.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-primary-foreground/60 text-xs sm:text-sm mt-1 sm:mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
