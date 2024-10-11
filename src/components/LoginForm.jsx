import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { ErrorPopup } from "./ErrorPopup";
import Axios from "axios";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        Axios.post("http://localhost:5000/api/writers/login", data, {
            headers: {
                "Content-Type": "application/json",
            },
            timeout: 5000,
            responseType: "json",
        })
            .then((response) => {
                if (response.data.token) {
                    // Use the login function from AuthContext
                    login(response.data.token, response.data.user);
                    console.log("User logged in and token stored");
                    // Redirect to home page or dashboard
                    navigate("/");
                } else {
                    console.error("Token not found in the response");
                    setErrorMessage("Signup failed. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    if (error.response.status === 400) {
                        setErrorMessage(
                            error.response.data.message ||
                                "Signup failed. Please try again."
                        );
                        console.error(
                            error.response.data.message ||
                                "Signup failed. Please try again."
                        );
                    } else {
                        setErrorMessage("An error occurred. Please try again.");
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    setErrorMessage(
                        "No response from server. Please try again."
                    );
                } else {
                    // Something happened in setting up the request that triggered an Error
                    setErrorMessage("An error occurred. Please try again.");
                }
            });
    };
    const validateForm = () => {
        if (errors.email) {
            if (errors.email.type === "required") {
                setErrorMessage("Please enter your email address");
            }
        } else if (errors.password) {
            if (errors.password.type === "required") {
                setErrorMessage("Please enter a password");
            }
        }
    };

    useEffect(() => {
        validateForm();
    }, [errors]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit(onSubmit)();
        }
    };

    return (
        <div className="relative">
            {errorMessage && (
                <ErrorPopup
                    message={errorMessage}
                    onClose={() => setErrorMessage("")}
                />
            )}
            <form
                onSubmit={handleSubmit(onSubmit)}
                onKeyDown={handleKeyDown}
                className="space-y-4"
            >
                <Input
                    type="email"
                    label="Email"
                    size="lg"
                    {...register("email", {
                        required: true,
                    })}
                    onBlur={() => validateForm()}
                />

                <Input
                    type="password"
                    label="Password"
                    size="lg"
                    {...register("password", {
                        required: true,
                    })}
                    onBlur={() => validateForm()}
                />

                <button
                    type="submit"
                    className="
                        cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600
                        text-white px-10 py-3 text-lg rounded-full
                        shadow-lg transform transition-all duration-300
                        hover:from-blue-600 hover:to-blue-700
                        hover:shadow-xl hover:-translate-y-0.5
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                        active:shadow-md active:translate-y-0
                    "
                >
                    Log in
                </button>
            </form>
        </div>
    );
};
