import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema(
  {
    title: String,
    amount: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Expense', expenseSchema);