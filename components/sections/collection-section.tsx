"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Air & Foam Mattresses",
    description: "Pressure relief mattresses and overlays",
    price: "Call for pricing",
    image: "https://images.pexels.com/photos/6291520/pexels-photo-6291520.jpeg?w=800",
  },
  {
    id: 2,
    name: "Orthopedic Supplies",
    description: "Braces, supports, and orthopedic products",
    price: "Call for pricing",
    image: "https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg?w=800",
  },
  {
    id: 3,
    name: "Commodes",
    description: "Bedside and drop-arm commodes",
    price: "Call for pricing",
    image: "https://images.pexels.com/photos/7551668/pexels-photo-7551668.jpeg?w=800",
  },
  {
    id: 4,
    name: "Shower Chairs & Benches",
    description: "Safe bathing seats and transfer benches",
    price: "Call for pricing",
    image: "https://images.pexels.com/photos/6129235/pexels-photo-6129235.jpeg?w=800",
  },
  {
    id: 5,
    name: "Grab Bars & Rails",
    description: "Wall-mount safety bars for bathroom and home",
    price: "Call for pricing",
    image: "https://images.pexels.com/photos/3993234/pexels-photo-3993234.jpeg?w=800",
  },
  {
    id: 6,
    name: "Bed Rails & Accessories",
    description: "Safety rails, trapeze bars, and bed accessories",
    price: "Call for pricing",
    image: "https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?w=800",
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
