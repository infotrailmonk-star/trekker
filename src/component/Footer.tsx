import { Mountain, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-7 h-7 text-primary" />
              <span className="text-lg font-heading font-bold text-foreground">
                Trail<span className="text-primary">Monk</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We exist for those who believe the best stories are found off the
              beaten path. Adventure isn't just travel — it's transformation.
            </p>
            <div className="flex gap-3">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {["All Destinations", "Trekking", "Bike Trips", "Extreme Adventures", "Hidden Gems"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {["About Us", "Our Team", "Careers", "Press Kit", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {["FAQs", "Safety Guidelines", "Cancellation Policy", "Travel Insurance", "Privacy Policy"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Trail Monk. All rights reserved. Made with ❤️ for adventurers.
          </p>
          <p className="text-xs text-muted-foreground">
            #TrailMonkTravels — Follow the trail, find yourself.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
