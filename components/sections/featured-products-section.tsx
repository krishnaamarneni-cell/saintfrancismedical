"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Bathroom Safety",
    description: "Grab Bars · Shower Chairs · Transfer Benches",
    image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?w=1000",
  },
  {
    title: "Wheelchairs",
    description: "Standard · Bariatric · Transport",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?w=1000",
  },
  {
    title: "Hospital Beds",
    description: "Bed Rails · Accessories · Overbed Tables",
    image: "https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?w=1000",
  },
  {
    title: "Rollators & Walkers",
    description: "3-Wheel · 4-Wheel · Folding Walkers",
    image: "https://images.pexels.com/photos/7089395/pexels-photo-7089395.jpeg?w=1000",
  },
  {
    title: "Mobility Aids",
    description: "Canes · Crutches · Walking Aids",
    image: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?w=1000",
  },
  {
    title: "Patient Room",
    description: "Fall Prevention · Alarms · Geri Chairs",
    image: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?w=1000",
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
