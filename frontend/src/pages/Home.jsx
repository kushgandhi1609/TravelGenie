import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden text-white">

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:px-16 lg:px-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 rounded-full text-sm font-semibold mb-6 shadow-lg">
              ✈️ AI Powered Smart Travel Planner
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Plan Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                {' '}Dream Trip
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              TravelGenie helps you create AI-generated itineraries,
              manage budgets, track expenses, and explore destinations
              effortlessly.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/create-trip"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:scale-105 transition duration-300"
              >
                Create AI Trip
              </Link>

              <Link
                to="/dashboard"
                className="border border-slate-700 bg-slate-800 px-8 py-4 rounded-2xl font-semibold text-slate-200 hover:bg-slate-700 transition duration-300"
              >
                Explore Dashboard
              </Link>

            </div>

          </div>

          {/* Right Side Card */}
          <div className="relative">

            <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20"></div>

            <div className="relative bg-slate-900/70 backdrop-blur-2xl border border-slate-700 shadow-2xl rounded-3xl p-8 hover:scale-105 transition duration-500">

              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Travel"
                className="rounded-2xl h-80 w-full object-cover shadow-lg"
              />

              {/* Destination Budget Duration */}
              <div className="mt-6 space-y-4">

                <div className="flex justify-between items-center bg-black/40 border border-cyan-500/20 backdrop-blur-xl rounded-2xl p-5 shadow-lg">

                  <span className="font-medium text-slate-300">
                    Destination
                  </span>

                  <span className="font-bold text-cyan-400">
                    Bali, Indonesia
                  </span>

                </div>

                <div className="flex justify-between items-center bg-black/40 border border-green-500/20 backdrop-blur-xl rounded-2xl p-5 shadow-lg">

                  <span className="font-medium text-slate-300">
                    Budget
                  </span>

                  <span className="font-bold text-green-400">
                    ₹50,000
                  </span>

                </div>

                <div className="flex justify-between items-center bg-black/40 border border-purple-500/20 backdrop-blur-xl rounded-2xl p-5 shadow-lg">

                  <span className="font-medium text-slate-300">
                    Duration
                  </span>

                  <span className="font-bold text-purple-400">
                    5 Days
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-16 lg:px-28 pb-24">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose TravelGenie?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:border-cyan-500 transition duration-300">

              <div className="text-5xl mb-5">🤖</div>

              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                AI Itinerary
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Generate personalized travel plans instantly using powerful AI.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:border-green-500 transition duration-300">

              <div className="text-5xl mb-5">💰</div>

              <h3 className="text-2xl font-bold mb-4 text-green-400">
                Budget Tracking
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Manage travel expenses smartly and stay within your budget.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:border-purple-500 transition duration-300">

              <div className="text-5xl mb-5">🌍</div>

              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Explore Destinations
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Discover amazing places and hidden gems around the world.
              </p>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;