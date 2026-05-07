import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const location = useLocation();

    const userName = localStorage.getItem("name");

    const handleLogout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("name");

        localStorage.removeItem("email");

        navigate("/");
    };

    return (

        <div className="w-full flex justify-center mb-10 sticky top-4 z-50">

            <div className="w-full bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-full px-8 py-4 flex items-center justify-between">

                {/* Logo */}

                <div
                    className="flex items-center gap-4 cursor-pointer group"
                    onClick={() => navigate("/dashboard")}
                >

                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 p-[2px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">

                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">

                            <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>

                        </div>

                    </div>

                    <div>

                        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent leading-none tracking-tight">
                            FinTrack
                        </h1>

                        <p className="text-xs text-slate-500 mt-1 ml-1 font-medium tracking-wide uppercase">
                            Finance Manager
                        </p>

                    </div>

                </div>

                {/* Navigation */}

                <div className="flex items-center gap-2 bg-slate-100/80 p-1.5 rounded-full border border-slate-200">

                    <button
                        onClick={() => navigate("/dashboard")}
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
        
                        ${location.pathname === "/dashboard"
                                ? "bg-white text-emerald-600 shadow-sm shadow-slate-200"
                                : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                            }`}
                    >
                        Dashboard
                    </button>

                    <button
                        onClick={() => navigate("/transactions")}
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                        
                        ${location.pathname === "/transactions"
                                ? "bg-white text-emerald-600 shadow-sm shadow-slate-200"
                                : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                            }`}
                    >
                        Transactions
                    </button>

                </div>

                {/* Profile Section */}

                <div className="relative group">

                    <button className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">

                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg">

                            {userName?.charAt(0).toUpperCase()}

                        </div>

                        <div className="text-left">

                            <p className="text-xs text-slate-400">
                                Hi,
                            </p>

                            <p className="text-sm font-semibold text-slate-700">
                                {userName}
                            </p>

                        </div>

                    </button>

                    {/* Dropdown */}

                    <div className="absolute right-0 top-full pt-2 hidden group-hover:flex flex-col bg-white border border-slate-200 rounded-2xl shadow-xl w-44 overflow-hidden z-50">
                        <button
                            className="px-5 py-3 text-left text-slate-600 hover:bg-slate-50 transition-all"
                        >
                            Profile
                        </button>

                        <button
                            onClick={handleLogout}
                            className="px-5 py-3 text-left text-rose-500 hover:bg-rose-50 transition-all"
                        >
                            Logout
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Navbar;