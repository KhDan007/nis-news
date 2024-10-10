// Profile.jsx
import React, { useEffect } from "react";
import { useAuth } from "../AuthContext";
import { Card, CardBody, Spinner } from "@nextui-org/react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const Profile = () => {
    const { user, loading, fetchUserProfile } = useAuth();

    useEffect(() => {
        fetchUserProfile();
    }, [fetchUserProfile]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner size="lg" color="primary" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Card className="max-w-[400px]">
                    <CardBody>
                        <p className="text-center text-lg">
                            No user data available
                        </p>
                    </CardBody>
                </Card>
            </div>
        );
    }

    return (
        <main>
            <div className="container mx-auto p-4 h-full">
                <div className="relative">
                    <div className="bg-gray-300 rounded-lg rounded-b-none w-full h-28"></div>
                    <div className="bg-gray-100 rounded-lg rounded-t-none w-full pt-16 md:pt-16 pl-8 md:pl-16 pb-4 mb-4">
                        <div className="flex items-center justify-center avatar overflow-hidden absolute rounded-full w-24 h-24 md:w-32 md:h-32 bg-white left-8 md:left-14 top-16 md:top-10 z-10">
                            {/* There will be the avatar of the user */}
                            {user?.avatar ? (
                                <img src={user.avatar} alt="" />
                            ) : (
                                <FaUser className="w-11/12 h-full" />
                            )}
                        </div>
                        <h3 className="text-xl md:text-2xl">
                            {user?.name || "Username"}
                        </h3>
                        <h4 className="text-sm md:text-lg">
                            {user?.type || "Writer"}
                        </h4>
                    </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg pl-8 md:pl-16">
                    <p className="text-xl md:text-2xl">About</p>
                    <h3 className="text-md md:text-lg flex items-center mt-3">
                        <FaUser className="inline mr-2" />
                        {user?.bio || "bio"}
                    </h3>
                    <h3 className="text-md md:text-lg flex items-center mt-3">
                        <MdOutlineMailOutline className="inline mr-2" />
                        {user?.email || "email"}
                    </h3>
                    <h3 className="text-md md:text-lg flex items-center mt-3">
                        <FaPhoneAlt className="inline mr-2" />
                        {user?.phone || "+7 (999) 999 99-99"}
                    </h3>
                </div>
            </div>
        </main>
    );
};
