import { Coffee, Leaf, Droplet, ThermometerSun, Star, Shield, Globe } from "lucide-react";

const highlights = [
  { icon: Coffee, label: "Single Origin", detail: "Araku Valley, Andhra Pradesh" },
  { icon: Leaf, label: "100% Organic", detail: "Grown without pesticides or chemicals" },
  { icon: ThermometerSun, label: "Altitude", detail: "1,100 – 1,400 meters above sea level" },
  { icon: Droplet, label: "Process", detail: "Washed & sun-dried for natural flavor" },
  { icon: Star, label: "Tasting Notes", detail: "Cocoa • Caramel • Citrus" },
  { icon: Shield, label: "Quality Assurance", detail: "Every batch lab-tested for purity" },
  { icon: Globe, label: "Sustainability", detail: "Empowering local tribal farmers" },
  { icon: Leaf, label: "Roast Profile", detail: "Medium roast — balanced and smooth" }
];

export default function Highlights() {
  return (
    <section
      id="highlights"className="section bg-gradient-to-b"
    >
      <div className="container relative z-10">
        <div className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-sm p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-center">Product Highlights</h2>
          <p className="text-center text-white/70 mt-2 max-w-2xl mx-auto">
            Discover what makes Araku Coffee exceptional — crafted with care, sustainability, and
            authenticity in every bean.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="rounded-2xl bg-black/60 border border-white/10 hover:bg-coffee-700 transition-all duration-300 p-6 text-center shadow-md hover:shadow-lg"
              >
                <div className="flex justify-center mb-3">
                  <Icon size={28} className="text-amber-400" />
                </div>
                <div className="text-sm text-white/60">{label}</div>
                <div className="mt-1 font-medium text-white">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
