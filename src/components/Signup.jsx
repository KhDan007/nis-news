import { Link } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";

export const Signup = () => {
    return (
        <main className="bg-blue-500 flex flex-col justify-center items-center h-screen p-5">
            <div className="container bg-slate-50 flex rounded-2xl shadow-2xl">
                <div className="w-0 sm:w-1/3 bg-orange-300"></div>
                <div className="w-full sm:w-2/3 p-4 sm:p-6 md:p-8 lg:p-12 sm:pt-3 md:pt-4 lg:pt-4">
                    <h3 className="text-sm flex justify-between sm:justify-end items-center text-slate-500">
                        <span>Already have an account?</span>

                        <Link
                            className="font-bold text-xs md:text-md px-4 md:px-6 py-1 border-2 rounded-2xl sm:ml-4"
                            to="/login"
                        >
                            Login
                        </Link>
                    </h3>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                        Welcome to NEWS
                    </h2>
                    <h3 className="text-slate-500 font-semibold pt-1 pb-6 lg:pb-10">
                        Register your account
                    </h3>

                    <SignUpForm />
                </div>
            </div>
        </main>
    );
};
