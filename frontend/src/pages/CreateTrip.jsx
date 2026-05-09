import { useState } from 'react';
import axios from 'axios';

const CreateTrip = () => {
  const [formData, setFormData] = useState({
    destination: '',
    budget: '',
    days: '',
  });

  const [itinerary, setItinerary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateTrip = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        'http://localhost:8000/api/ai/itinerary',
        formData
      );

      setItinerary(response.data.itinerary);

      // Save Trip to LocalStorage
      const existingTrips =
        JSON.parse(localStorage.getItem('trips')) || [];

      const newTrip = {
        id: Date.now(),
        destination: formData.destination,
        budget: formData.budget,
        days: formData.days,
        itinerary: response.data.itinerary,
      };

      existingTrips.push(newTrip);

      localStorage.setItem(
        'trips',
        JSON.stringify(existingTrips)
      );

    } catch (error) {
      console.log(error);
      alert('Failed to generate trip');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-8">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Create AI Trip
          </h1>

          <p className="mt-4 text-slate-400 text-lg">
            Generate smart AI-powered travel itineraries instantly.
          </p>
        </div>

        {/* Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

          {/* Destination */}
          <div className="mb-6">
            <label className="block mb-3 text-slate-300 text-lg font-medium">
              Destination
            </label>

            <input
              type="text"
              name="destination"
              placeholder="Enter destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 p-4 rounded-2xl outline-none focus:border-cyan-500"
            />
          </div>

          {/* Budget */}
          <div className="mb-6">
            <label className="block mb-3 text-slate-300 text-lg font-medium">
              Budget (₹)
            </label>

            <input
              type="number"
              name="budget"
              placeholder="Enter your budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 p-4 rounded-2xl outline-none focus:border-green-500"
            />
          </div>

          {/* Days */}
          <div className="mb-8">
            <label className="block mb-3 text-slate-300 text-lg font-medium">
              Number of Days
            </label>

            <input
              type="number"
              name="days"
              placeholder="Enter number of days"
              value={formData.days}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 p-4 rounded-2xl outline-none focus:border-purple-500"
            />
          </div>

          {/* Button */}
          <button
            onClick={generateTrip}
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-[1.02] transition duration-300 text-white py-4 rounded-2xl text-lg font-bold shadow-2xl"
          >
            {loading ? 'Generating...' : 'Generate AI Trip'}
          </button>

        </div>

        {/* AI Response */}
        {itinerary && (
          <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-6 text-cyan-400">
              Your AI Itinerary
            </h2>

            <div className="text-slate-300 whitespace-pre-line leading-8 text-lg">
              {itinerary}
            </div>

          </div>
        )}

      </div>

    </div>
  );
};

export default CreateTrip;