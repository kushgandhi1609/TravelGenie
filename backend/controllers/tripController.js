import Trip from '../models/Trip.js';

export const createTrip = async (req, res) => {
  const trip = await Trip.create(req.body);
  res.json(trip);
};

export const getTrips = async (req, res) => {
  const trips = await Trip.find();
  res.json(trips);
};