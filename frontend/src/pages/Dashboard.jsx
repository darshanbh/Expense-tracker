import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Dashboard() {

    const [transactions, setTransactions] = useState([]);

    const [summary, setSummary] = useState({});

    const [formData, setFormData] = useState({
        amount: "",
        type: "income",
        description: "",
        date: "",
    });

    const fetchTransactions = async () => {

        const res = await API.get("/transactions");

        setTransactions(res.data);
    };

    const fetchSummary = async () => {

        const res = await API.get("/transactions/summary");

        setSummary(res.data);
    };

    useEffect(() => {

        fetchTransactions();

        fetchSummary();

    }, []);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await API.post("/transactions/add", formData);

        setFormData({
            amount: "",
            type: "income",
            description: "",
            date: "",
        });

        fetchTransactions();

        fetchSummary();
    };
    return (

        <div className="min-h-screen pb-12 px-4 md:px-10 max-w-7xl mx-auto font-sans">
            {/* <Navbar />
             */}
             <Navbar summary={summary} />


            <div
                id="summary"
                className="grid md:grid-cols-3 gap-6 mb-10 scroll-mt-28"
            >

                <div className="bg-white border border-emerald-100 p-8 rounded-3xl shadow-xl shadow-emerald-100/50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>
                        </div>
                        <h2 className="text-lg font-medium text-slate-600 tracking-wide">
                            Total Income
                        </h2>
                    </div>

                    <p className="text-4xl font-bold text-slate-900 tracking-tight">
                        <span className="text-emerald-500 mr-1">₹</span>{summary.totalIncome || 0}
                    </p>
                </div>

                <div className="bg-white border border-rose-100 p-8 rounded-3xl shadow-xl shadow-rose-100/50 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" /></svg>
                        </div>
                        <h2 className="text-lg font-medium text-slate-600 tracking-wide">
                            Total Expense
                        </h2>
                    </div>

                    <p className="text-4xl font-bold text-slate-900 tracking-tight">
                        <span className="text-rose-500 mr-1">₹</span>{summary.totalExpense || 0}
                    </p>
                </div>

                <div className="bg-white border border-blue-100 p-8 rounded-3xl shadow-xl shadow-blue-100/50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
                        </div>
                        <h2 className="text-lg font-medium text-slate-600 tracking-wide">
                            Current Balance
                        </h2>
                    </div>

                    <p className="text-4xl font-bold text-slate-900 tracking-tight">
                        <span className="text-blue-500 mr-1">₹</span>{summary.balance || 0}
                    </p>
                </div>

            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200 p-8 rounded-3xl shadow-2xl shadow-slate-200/50 mb-10 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none"></div>

                <h3 className="text-xl font-semibold text-slate-800 mb-6 relative z-10 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    Add New Transaction
                </h3>

                <div className="grid md:grid-cols-4 gap-5 relative z-10">

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="text-slate-400 font-medium">₹</span>
                        </div>
                        <input
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="w-full bg-slate-50 pl-10 pr-4 py-3.5 rounded-2xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                            required
                        />
                    </div>

                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full bg-slate-50 px-4 py-3.5 rounded-2xl border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all appearance-none cursor-pointer"
                    >
                        <option value="income" className="bg-white">Income</option>
                        <option value="expense" className="bg-white">Expense</option>
                    </select>

                    <input
                        type="text"
                        name="description"
                        placeholder="What was this for?"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full bg-slate-50 px-4 py-3.5 rounded-2xl border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                        required
                    />

                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-slate-50 px-4 py-3.5 rounded-2xl border border-slate-200 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                        required
                    />

                </div>

                <div className="mt-8 flex justify-end relative z-10">
                    <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
                        <span>Save Transaction</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </button>
                </div>

            </form>
            {/* <div
                id="transactions"
                className="overflow-x-auto"
            >

                <table className="w-full bg-white rounded-3xl shadow-md overflow-hidden">

                    <thead className="bg-[#dce8cf]">

                        <tr>

                            <th className="p-4 text-left text-[#556b2f]">
                                Date
                            </th>

                            <th className="p-4 text-left text-[#556b2f]">
                                Type
                            </th>

                            <th className="p-4 text-left text-[#556b2f]">
                                Amount
                            </th>

                            <th className="p-4 text-left text-[#556b2f]">
                                Description
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {transactions.map((item) => (

                            <tr
                                key={item._id}
                                className="border-t border-[#e4edd9]"
                            >

                                <td className="p-4">
                                    {new Date(item.date).toLocaleDateString()}
                                </td>

                                <td className="p-4 capitalize">
                                    {item.type}
                                </td>

                                <td className="p-4">
                                    ₹ {item.amount}
                                </td>

                                <td className="p-4">
                                    {item.description}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div> */}

        </div>
    );
}

export default Dashboard;