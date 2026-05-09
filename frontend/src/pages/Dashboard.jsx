import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const savedTrips =
      JSON.parse(localStorage.getItem('trips')) || [];

    setTrips(savedTrips.reverse());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Dashboard
          </h1>

          <p className="mt-4 text-slate-400 text-lg">
            Manage your AI-generated trips.
          </p>
        </div>

        {/* Recent Trips */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

          <h2 className="text-3xl font-bold mb-8 text-white">
            Recent Trips
          </h2>

          <div className="space-y-6">

            {trips.length === 0 ? (
              <p className="text-slate-400">
                No trips generated yet 😭
              </p>
            ) : (
              trips.map((trip) => (
                <div
                  key={trip.id}
                  className="flex justify-between items-center bg-slate-800 rounded-2xl p-5 hover:bg-slate-700 transition"
                >

                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">
                      {trip.destination}
                    </h3>

                    <p className="text-slate-400">
                      {trip.days} Days • ₹{trip.budget}
                    </p>
                  </div>

                  <Link
                    to={`/trip/${trip.id}`}
                    className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl font-semibold"
                  >
                    View
                  </Link>

                </div>
              ))
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;