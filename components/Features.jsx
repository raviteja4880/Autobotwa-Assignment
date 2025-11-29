import { Coffee, Leaf, Shield } from "lucide-react";

const items = [
  {
    icon: Coffee,
    title: "Signature Roast",
    text: "Medium roast with chocolate and caramel notes — perfectly balanced for a smooth finish."
  },
  {
    icon: Leaf,
    title: "Organic & Fair",
    text: "Ethically sourced from smallholder farmers in Araku Valley, ensuring purity and sustainability."
  },
  {
    icon: Shield,
    title: "Freshness Seal",
    text: "Nitrogen-flushed packaging locks in aroma and flavor, guaranteeing every sip is as fresh as the first."
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="section bg-gradient-to-b text-white"
    >
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-semibold">Why Araku?</h2>
        <p className="text-center text-white/70 mt-2 max-w-2xl mx-auto">
          From the rich soils of the Eastern Ghats to your cup — discover what makes Araku Coffee truly exceptional.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-black/50 border border-white/10 p-8 text-center transition-all duration-300 hover:bg-coffee-700 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <Icon size={36} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-white/70 mt-3 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
