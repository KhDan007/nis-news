import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { ErrorPopup } from "./ErrorPopup";
import Axios from "axios";

export const MyForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log(data);
        Axios.post("http://localhost:5000/api/writers/signup", data, {
            headers: {
                "Content-Type": "application/json",
                // Authorization: "Bearer token123",
            },
            timeout: 5000,
            responseType: "json",
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
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

        Axios.get("http://localhost:5000/").then((response) => {
            console.log(response.data);
        });
    }, [errors]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit(onSubmit)();
        }
    };

    return (
        <div className="relative p-4">
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
                    Submit
                </button>
            </form>
        </div>
    );
};
