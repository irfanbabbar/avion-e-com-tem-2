export default function JoinUs() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="flex items-center justify-center bg-white max-w-2xl w-full shadow-xl rounded-xl">
        <div className="text-center p-4  space-y-6">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Join the club and get the benefits
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-base md:text-lg">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop-up stores, and more.
          </p>

          {/* Input and Button */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="px-6 py-2text-center mt-4 bg-[#2A254B] text-gray-300 py-2 rounded hover:bg-orange-600 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
