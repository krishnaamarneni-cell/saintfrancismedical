"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Digital Thermometer",
    description: "Fast and accurate temperature readings",
    price: "Call",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800",
  },
  {
    id: 2,
    name: "Compression Stockings",
    description: "Medical-grade support for circulation",
    price: "Call",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=800",
  },
  {
    id: 3,
    name: "Walking Canes & Crutches",
    description: "Adjustable mobility support aids",
    price: "Call",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800",
  },
  {
    id: 4,
    name: "Wound Care Kits",
    description: "Complete bandaging and dressing supplies",
    price: "Call",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=800",
  },
  {
    id: 5,
    name: "Pulse Oximeters",
    description: "Fingertip oxygen level monitoring",
    price: "Call",
    image: "https://images.unsplash.com/photo-1631549916768-4f8c1366c8c2?q=80&w=800",
  },
  {
    id: 6,
    name: "Bathroom Safety Rails",
    description: "Secure grab bars and shower seats",
    price: "Call",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
  },
];

export function CollectionSection() {
  return (
    <section id="supplies" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Medical Supplies
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="font-medium text-foreground text-2xl">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
