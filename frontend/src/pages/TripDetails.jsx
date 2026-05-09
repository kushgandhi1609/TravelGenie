import { useParams } from 'react-router-dom';

const TripDetails = () => {
  const { id } = useParams();

  const trips =
    JSON.parse(localStorage.getItem('trips')) || [];

  const trip = trips.find(
    (trip) => trip.id.toString() === id
  );

  if (!trip) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl">
        Trip Not Found 😭
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-6 text-cyan-400">
          {trip.destination}
        </h1>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">

          <p className="text-xl text-slate-300 mb-6">
            {trip.days} Days • ₹{trip.budget}
          </p>

          <div className="bg-slate-800 p-6 rounded-2xl">

            <h2 className="text-3xl font-bold mb-4 text-purple-400">
              AI Itinerary
            </h2>

            <div className="text-slate-300 whitespace-pre-line leading-8">
              {trip.itinerary}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TripDetails;