import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Transactions() {

    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async () => {

        const res = await API.get("/transactions");

        setTransactions(res.data);
    };

    useEffect(() => {

        fetchTransactions();

    }, []);

    return (

        <div className="min-h-screen pb-12 px-4 md:px-10 max-w-7xl mx-auto font-sans">

            <Navbar />

            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                </div>
                <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
                    Transactions
                </h1>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden relative">
                <div className="overflow-x-auto relative z-10">

                    <table className="w-full text-left border-collapse">

                        <thead>

                            <tr className="bg-slate-50 border-b border-slate-200">

                                <th className="p-5 font-semibold text-slate-600 tracking-wide uppercase text-sm">
                                    Date
                                </th>

                                <th className="p-5 font-semibold text-slate-600 tracking-wide uppercase text-sm">
                                    Type
                                </th>

                                <th className="p-5 font-semibold text-slate-600 tracking-wide uppercase text-sm">
                                    Amount
                                </th>

                                <th className="p-5 font-semibold text-slate-600 tracking-wide uppercase text-sm">
                                    Description
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {transactions.map((item) => (

                                <tr
                                    key={item._id}
                                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200"
                                >

                                    <td className="p-5 text-slate-600 whitespace-nowrap font-medium">
                                        {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                    </td>

                                    <td className="p-5 capitalize whitespace-nowrap">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider ${item.type === 'income' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                                            {item.type}
                                        </span>
                                    </td>

                                    <td className={`p-5 font-bold whitespace-nowrap ${item.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                                        {item.type === 'income' ? '+' : '-'} ₹ {item.amount}
                                    </td>

                                    <td className="p-5 text-slate-600 w-full font-medium">
                                        {item.description}
                                    </td>

                                </tr>

                            ))}

                            {transactions.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="p-10 text-center text-slate-500 italic">
                                        No transactions found.
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    );
}

export default Transactions;