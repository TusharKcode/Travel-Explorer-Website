export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-pink"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin:"10px 0 0 0 "
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/34"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Find amazing destinations and experiences around the world.
        </p>

        {/* Search Bar */}
        <div className="flex bg-white rounded-lg overflow-hidden max-w-lg mx-auto mb-6 shadow-md">
          <input
            type="text"
            placeholder="Search destinations..."
            className="px-4 py-2 w-full text-black focus:outline-none"
          />
          <button className="bg-yellow-500 px-6 py-2 text-black font-semibold hover:bg-yellow-600 transition">
            Search
          </button>
        </div>

        {/* CTA Button */}
        <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Explore Now
        </button>
      </div>
    </section>
  );
}
