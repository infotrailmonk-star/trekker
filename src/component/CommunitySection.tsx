import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import campingNight from "@/assets/camping-night.jpg";
import trekValley from "@/assets/trek-valley.jpg";
import rockClimbing from "@/assets/rock-climbing.jpg";
import bikeTrip from "@/assets/bike-trip.jpg";

const stories = [
  {
    id: 1,
    user: "Arjun M.",
    avatar: "A",
    image: campingNight,
    caption: "3 AM, 14,000 ft. The Milky Way was our ceiling. This is why we trek. 🌌",
    tag: "#TrailMonkTravels",
    likes: 342,
    comments: 28,
  },
  {
    id: 2,
    user: "Priya S.",
    avatar: "P",
    image: trekValley,
    caption: "Crossed the scariest bridge of my life and I'd do it again tomorrow! 🌊",
    tag: "#TrailMonkTravels",
    likes: 518,
    comments: 45,
  },
  {
    id: 3,
    user: "Rahul K.",
    avatar: "R",
    image: rockClimbing,
    caption: "When you realize the only way is up. Badami taught me grit. 🧗",
    tag: "#TrailMonkTravels",
    likes: 276,
    comments: 19,
  },
  {
    id: 4,
    user: "Sneha D.",
    avatar: "S",
    image: bikeTrip,
    caption: "Spiti changed me. 5 passes, 1 Royal Enfield, infinite memories. 🏍️",
    tag: "#TrailMonkTravels",
    likes: 621,
    comments: 52,
  },
];

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Community
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Tales From The <span className="text-gradient-warm">Trail</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real stories from real adventurers. Your next tale starts here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group rounded-xl overflow-hidden bg-card border border-border hover-lift"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {story.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {story.user}
                    </p>
                    <p className="text-xs text-primary">{story.tag}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {story.caption}
                </p>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <button className="flex items-center gap-1 text-xs hover:text-destructive transition-colors">
                    <Heart size={14} /> {story.likes}
                  </button>
                  <button className="flex items-center gap-1 text-xs hover:text-primary transition-colors">
                    <MessageCircle size={14} /> {story.comments}
                  </button>
                  <button className="ml-auto hover:text-primary transition-colors">
                    <Share2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
