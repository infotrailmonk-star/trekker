import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Download } from "lucide-react";

const NewsletterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  return (
    <section id="plan" className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Stay Connected
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Never Miss an{" "}
            <span className="text-gradient-primary">Adventure</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Get exclusive trail updates, hidden gem discoveries, and early
            access to new trips. Plus, grab your free trekking guide!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <button className="px-8 py-4 rounded-lg font-heading font-bold bg-gradient-accent text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <Send size={18} />
              Subscribe
            </button>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Download size={16} />
            Download Free Trekking Guide (PDF)
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
