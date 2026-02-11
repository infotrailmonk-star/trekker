import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Star, ArrowRight } from "lucide-react";
import trekValley from "@/assets/trek-valley.jpg";
import bikeTrip from "@/assets/bike-trip.jpg";
import snowPeak from "@/assets/snow-peak.jpg";
import campingNight from "@/assets/camping-night.jpg";
import rockClimbing from "@/assets/rock-climbing.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const filters = ["All", "Trekking", "Biking"];

const destinations = [
  {
    id: 1,
    title: "Valley of Flowers Trek",
    location: "Uttarakhand, India",
    category: "Trekking",
    rating: 4.9,
    tag: "Hidden Gem",
    image: trekValley,
    difficulty: "Moderate",
  },
  {
    id: 2,
    title: "Winter Kuari Pass Trek",
    location: "Uttarakhand, India",
    category: "Trekking",
    rating: 4.8,
    tag: "Trending",
    image: snowPeak,
    difficulty: "Moderate",
  },
  {
    id: 3,
    title: "Tungnath Trek",
    location: "Uttarakhand, India",
    category: "Trekking",
    rating: 4.7,
    tag: "Recommended",
    image: heroBg,
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Brahmtal Trek",
    location: "Uttarakhand, India",
    category: "Trekking",
    rating: 4.8,
    tag: "Hidden Gem",
    image: campingNight,
    difficulty: "Moderate",
  },
  {
    id: 5,
    title: "Hampta Pass Trek",
    location: "Himachal Pradesh, India",
    category: "Trekking",
    rating: 4.9,
    tag: "Trending",
    image: trekValley,
    difficulty: "Moderate",
  },
  {
    id: 6,
    title: "Annapurna Base Camp Trek",
    location: "Nepal",
    category: "Trekking",
    rating: 4.9,
    tag: "Recommended",
    image: snowPeak,
    difficulty: "Hard",
  },
  {
    id: 7,
    title: "Everest Base Camp Trek",
    location: "Nepal",
    category: "Trekking",
    rating: 5.0,
    tag: "Hidden Gem",
    image: rockClimbing,
    difficulty: "Expert",
  },
  {
    id: 8,
    title: "Spiti Valley Bike Expedition",
    location: "Himachal Pradesh, India",
    category: "Biking",
    rating: 4.8,
    tag: "Trending",
    image: bikeTrip,
    difficulty: "Hard",
  },
  {
    id: 9,
    title: "Leh Ladakh Bike Trip",
    location: "Ladakh, India",
    category: "Biking",
    rating: 4.9,
    tag: "Recommended",
    image: heroBg,
    difficulty: "Hard",
  },
  {
    id: 10,
    title: "Adi Kailash Bike Trip",
    location: "Uttarakhand, India",
    category: "Biking",
    rating: 4.7,
    tag: "Hidden Gem",
    image: campingNight,
    difficulty: "Expert",
  },
  {
    id: 11,
    title: "Bir Billing Bike Trip",
    location: "Himachal Pradesh, India",
    category: "Biking",
    rating: 4.6,
    tag: "Trending",
    image: bikeTrip,
    difficulty: "Moderate",
  },
];

const difficultyColor: Record<string, string> = {
  Easy: "text-primary",
  Moderate: "text-secondary",
  Hard: "text-secondary",
  Expert: "text-destructive",
};

const DestinationsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    activeFilter === "All"
      ? destinations
      : destinations.filter((d) => d.category === activeFilter);

  return (
    <section id="destinations" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Discover
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Where Will You <span className="text-gradient-primary">Wander</span>{" "}
            Next?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            From misty valleys to frozen rivers — handpicked routes for the truly
            adventurous.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 sm:gap-3 mb-10 md:mb-12 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-gradient-accent text-primary-foreground shadow-glow"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * Math.min(i, 5) }}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover-lift cursor-pointer"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary backdrop-blur-sm border border-primary/20">
                  {dest.tag}
                </span>
                <span
                  className={`absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-1 rounded-full text-xs font-bold ${difficultyColor[dest.difficulty]} bg-background/60 backdrop-blur-sm`}
                >
                  {dest.difficulty}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-1 text-muted-foreground text-xs mb-2">
                  <MapPin size={12} />
                  {dest.location}
                </div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {dest.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-secondary fill-secondary" />
                    <span className="text-sm font-semibold text-foreground">
                      {dest.rating}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
