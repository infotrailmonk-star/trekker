import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, TrendingUp, IndianRupee, Flame, ArrowRight } from "lucide-react";
import trekValley from "@/assets/trek-valley.jpg";
import bikeTrip from "@/assets/bike-trip.jpg";
import snowPeak from "@/assets/snow-peak.jpg";

const trips = [
  {
    id: 1,
    title: "Hampta Pass Crossing",
    image: trekValley,
    duration: "5 Days",
    difficulty: "Moderate",
    price: "₹8,999",
    thrill: 4,
    highlights: ["River Crossings", "Alpine Meadows", "Camping"],
  },
  {
    id: 2,
    title: "Leh–Manali Highway Ride",
    image: bikeTrip,
    duration: "8 Days",
    difficulty: "Hard",
    price: "₹14,999",
    thrill: 5,
    highlights: ["High Passes", "Royal Enfield", "Pangong Lake"],
  },
  {
    id: 3,
    title: "Goechala Summit Trek",
    image: snowPeak,
    duration: "10 Days",
    difficulty: "Expert",
    price: "₹18,999",
    thrill: 5,
    highlights: ["Kanchenjunga Views", "Glacial Lakes", "Rhododendron Forests"],
  },
];

const ThrillMeter = ({ score }: { score: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Flame
        key={i}
        size={14}
        className={`${i < score ? "text-secondary fill-secondary" : "text-muted-foreground/30"} transition-colors`}
      />
    ))}
  </div>
);

const TripsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trips" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Trips & Packages
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">
            Curated <span className="text-gradient-warm">Adventures</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            All-inclusive packages designed by trail-tested adventurers. Just
            pack your bags.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trips.map((trip, i) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover-lift"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {trip.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={14} className="text-primary" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp size={14} className="text-primary" />
                    {trip.difficulty}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <IndianRupee size={14} className="text-primary" />
                    <span className="font-semibold text-foreground">{trip.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-xs">Thrill</span>
                    <ThrillMeter score={trip.thrill} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {trip.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <button className="w-full py-3 rounded-lg font-heading font-semibold text-sm bg-gradient-accent text-primary-foreground hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  View Details
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripsSection;
