"use client";

const specs = [
  { label: "Experience", value: "40+ yrs" },
  { label: "Products", value: "5,000+" },
  { label: "Delivery", value: "Same Day" },
  { label: "Location", value: "Waterbury, CT" },
];

export function EditorialSection() {
  return (
    <section className="bg-background">
      {/* Newsletter Banner */}
      

      {/* Decorative Icons */}
      <div className="flex items-center justify-center gap-6 pb-20">
        
        
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {spec.label}
            </p>
            <p className="font-medium text-foreground text-4xl">
              {spec.value}
            </p>
          </div>
        ))}
      </div>

      {/* Full-width Image */}
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000"
          alt="Saint Francis Medical store interior"
        />
      </div>
    </section>
  );
}
