function TripCard({ trip }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4">
      <h2 className="text-2xl font-bold">{trip.destination}</h2>

      <p>Budget: ${trip.budget}</p>
      <p>Days: {trip.days}</p>

      <div className="mt-4 whitespace-pre-wrap">
        {trip.itinerary}
      </div>
    </div>
  );
}

export default TripCard;