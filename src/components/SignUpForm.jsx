import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { ErrorPopup } from "./ErrorPopup";
import Axios from "axios";
import { useAuth } from '../AuthContext'; // Import useAuth
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const SignUpForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { login } = useAuth(); // Use the login function from AuthContext
    const navigate = useNavigate(); // Use navigate for redirection

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        Axios.post("http://localhost:5000/api/writers/signup", data, {
            headers: {
                "Content-Type": "application/json",
            },
            timeout: 5000,
            responseType: "json",
        })
            .then((response) => {
                console.log(response.data);
                if (response.data.token && response.data.user) {
                    // Use the login function from AuthContext
                    login(response.data.token, response.data.user);
                    console.log("User signed up and logged in");
                    // Redirect to home page or dashboard
                    navigate('/');
                } else {
                    console.error("Token or user data not found in the response");
                    setErrorMessage("Signup failed. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                if (error.response) {
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
                    setErrorMessage(
                        "No response from server. Please try again."
                    );
                } else {
                    setErrorMessage("An error occurred. Please try again.");
                }
            });
    };
    const validateForm = () => {
        if (errors.name) {
            setErrorMessage("Please enter your full name");
        } else if (errors.email) {
            if (errors.email.type === "required") {
                setErrorMessage("Please enter your email address");
            } else if (errors.email.type === "pattern") {
                setErrorMessage("Please enter a valid email address");
            } else if (errors.email.type === "maxLength") {
                setErrorMessage("Email address is too long");
            }
        } else if (errors.password) {
            if (errors.password.type === "required") {
                setErrorMessage("Please enter a password");
            } else if (errors.password.type === "minLength") {
                setErrorMessage("Password must be at least 8 characters long");
            } else if (errors.password.type === "pattern") {
                setErrorMessage(
                    "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
                );
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
                    type="text"
                    label="Full Name"
                    size="lg"
                    {...register("name", { required: true })}
                    onBlur={() => validateForm()}
                />

                <Input
                    type="email"
                    label="Email"
                    size="lg"
                    {...register("email", {
                        required: true,
                        pattern:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        maxLength: 100,
                    })}
                    onBlur={() => validateForm()}
                />

                <Input
                    type="password"
                    label="Password"
                    size="lg"
                    {...register("password", {
                        required: true,
                        minLength: 8,
                        pattern:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
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
                    Sign up
                </button>
            </form>
        </div>
    );
};
