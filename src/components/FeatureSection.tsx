const FeatureSection = () => {
  const features = [
    {
      icon: "🚚", // Replace this with your desired icon or image
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard.",
    },
    {
      icon: "✔️",
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship.",
    },
    {
      icon: "💲",
      title: "Unbeatable prices",
      description: "For our materials and quality you won’t find better prices anywhere.",
    },
    {
      icon: "♻️",
      title: "Recycled packaging",
      description: "We use 100% recycled packaging to ensure our footprint is manageable.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          What makes our brand different
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
