import mongoose from 'mongoose';

const tripSchema = mongoose.Schema(
  {
    destination: String,
    budget: Number,
    days: Number,
    itinerary: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Trip', tripSchema);