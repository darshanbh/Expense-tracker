import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Summary() {

    const [summary, setSummary] = useState({});

    const fetchSummary = async () => {

        const res = await API.get("/transactions/summary");

        setSummary(res.data);
    };

    useEffect(() => {

        fetchSummary();

    }, []);

    return (

        <div className="min-h-screen pb-12 px-4 md:px-10 max-w-7xl mx-auto font-sans">

            <Navbar />

            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h1 className="text-4xl font-bold text-slate-800 tracking-tight">
                    Financial Summary
                </h1>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

                {/* Income */}

                <div className="bg-white border border-emerald-100 p-10 rounded-3xl shadow-xl shadow-emerald-100/50 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-125"></div>
                    <p className="text-lg text-slate-500 font-medium tracking-wide uppercase text-sm mb-2">
                        Total Income
                    </p>

                    <h2 className="text-5xl font-bold mt-2 text-slate-900">
                        <span className="text-emerald-500 mr-2 opacity-80">₹</span>{summary.totalIncome || 0}
                    </h2>

                </div>

                {/* Expense */}

                <div className="bg-white border border-rose-100 p-10 rounded-3xl shadow-xl shadow-rose-100/50 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-40 h-40 bg-rose-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-125"></div>
                    <p className="text-lg text-slate-500 font-medium tracking-wide uppercase text-sm mb-2">
                        Total Expense
                    </p>

                    <h2 className="text-5xl font-bold mt-2 text-slate-900">
                        <span className="text-rose-500 mr-2 opacity-80">₹</span>{summary.totalExpense || 0}
                    </h2>

                </div>

                {/* Balance */}

                <div className="bg-white border border-blue-100 p-10 rounded-3xl shadow-xl shadow-blue-100/50 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-125"></div>
                    <p className="text-lg text-slate-500 font-medium tracking-wide uppercase text-sm mb-2">
                        Current Balance
                    </p>

                    <h2 className="text-5xl font-bold mt-2 text-slate-900">
                        <span className="text-blue-500 mr-2 opacity-80">₹</span>{summary.balance || 0}
                    </h2>

                </div>

            </div>

        </div>
    );
}

export default Summary;