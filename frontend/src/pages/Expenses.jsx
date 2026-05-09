const Expenses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">
            Expense Tracker
          </h1>

          <p className="mt-4 text-slate-400 text-lg">
            Track all your travel expenses and manage your budget smartly.
          </p>
        </div>

        {/* Expense Summary Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Card 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:border-green-500 transition">

            <div className="text-5xl mb-5">💳</div>

            <h2 className="text-2xl font-bold text-green-400">
              Total Spent
            </h2>

            <p className="text-5xl font-extrabold mt-4">
              ₹85,000
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:border-cyan-500 transition">

            <div className="text-5xl mb-5">📈</div>

            <h2 className="text-2xl font-bold text-cyan-400">
              Monthly Budget
            </h2>

            <p className="text-5xl font-extrabold mt-4">
              ₹1,20,000
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl hover:border-purple-500 transition">

            <div className="text-5xl mb-5">🧾</div>

            <h2 className="text-2xl font-bold text-purple-400">
              Transactions
            </h2>

            <p className="text-5xl font-extrabold mt-4">
              24
            </p>

          </div>

        </div>

        {/* Expense Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl overflow-x-auto">

          <h2 className="text-3xl font-bold mb-8">
            Recent Expenses
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b border-slate-700 text-slate-300">

                <th className="text-left py-4">Category</th>
                <th className="text-left py-4">Amount</th>
                <th className="text-left py-4">Date</th>
                <th className="text-left py-4">Status</th>

              </tr>
            </thead>

            <tbody>

              <tr className="border-b border-slate-800 hover:bg-slate-800 transition">

                <td className="py-5">Hotel Booking</td>
                <td className="py-5 text-green-400 font-semibold">
                  ₹25,000
                </td>
                <td className="py-5 text-slate-400">
                  12 May 2026
                </td>
                <td className="py-5">
                  <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                    Paid
                  </span>
                </td>

              </tr>

              <tr className="border-b border-slate-800 hover:bg-slate-800 transition">

                <td className="py-5">Flight Tickets</td>
                <td className="py-5 text-cyan-400 font-semibold">
                  ₹40,000
                </td>
                <td className="py-5 text-slate-400">
                  15 May 2026
                </td>
                <td className="py-5">
                  <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">
                    Completed
                  </span>
                </td>

              </tr>

              <tr className="hover:bg-slate-800 transition">

                <td className="py-5">Food & Dining</td>
                <td className="py-5 text-purple-400 font-semibold">
                  ₹8,000
                </td>
                <td className="py-5 text-slate-400">
                  18 May 2026
                </td>
                <td className="py-5">
                  <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm">
                    Ongoing
                  </span>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Expenses;