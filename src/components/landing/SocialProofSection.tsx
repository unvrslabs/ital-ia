import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ShieldCheck, Award, Flag, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const badges = [
  { icon: Award, label: "Partner Nvidia", sub: "DGX Spark" },
  { icon: ShieldCheck, label: "GDPR & NIS2", sub: "Compliant" },
  { icon: Flag, label: "Made in Italy", sub: "100% sovrana" },
];

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const motionVal = { val: 0 };
          const controls = animate(motionVal, { val: target }, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (latest) => setCount(Math.round(latest.val)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}+</span>;
};

export const SocialProofSection = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Stat + description */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <p className="text-5xl md:text-6xl font-bold text-primary">
                <AnimatedCounter target={50} />
              </p>
            </div>
            <p className="text-muted-foreground text-sm">PMI italiane già consulte</p>
          </div>

          {/* Badges row */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="liquid-glass rounded-xl p-4 text-center flex flex-col items-center gap-2"
              >
                <badge.icon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-foreground text-xs md:text-sm font-semibold leading-tight">{badge.label}</p>
                  <p className="text-muted-foreground text-[10px] md:text-xs">{badge.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
