"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Blood Pressure Monitors",
    description: "Diagnostics",
    image: "https://images.unsplash.com/photo-1631549916768-4f8c1366c8c2?q=80&w=1000",
  },
  {
    title: "Wheelchairs & Mobility",
    description: "Mobility Aids",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1000",
  },
  {
    title: "Hospital Beds & Accessories",
    description: "Home Care",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000",
  },
  {
    title: "Respiratory Equipment",
    description: "Breathing Support",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000",
  },
  {
    title: "First Aid & Wound Care",
    description: "Emergency",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1000",
  },
  {
    title: "Rehabilitation Supplies",
    description: "Recovery",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="equipment" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Trusted Medical Supplies.
          <br />
          Designed for Better Care.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Products & Equipment
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        
      </div>
    </section>
  );
}
