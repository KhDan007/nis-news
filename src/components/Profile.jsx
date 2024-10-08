// Profile.jsx
import React, { useEffect } from "react";
import { useAuth } from "../AuthContext";
import {
    Card,
    CardBody,
    CardHeader,
    Avatar,
    Divider,
    Spinner,
    Button,
} from "@nextui-org/react";
import { FaEnvelope, FaUser, FaCalendarAlt, FaPen } from "react-icons/fa";

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
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 p-4">
            <Card className="max-w-[700px] w-full">
                <CardHeader className="flex gap-3">
                    <Avatar
                        src={
                            user.avatar ||
                            "https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        }
                        size="lg"
                    />
                    <div className="flex flex-col">
                        <p className="text-md">Profile</p>
                        <p className="text-small text-default-500">
                            Welcome back, {user.name}!
                        </p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <FaUser className="text-2xl text-default-500" />
                            <div>
                                <p className="text-small text-default-500">
                                    Full Name
                                </p>
                                <p className="text-md">{user.name}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-2xl text-default-500" />
                            <div>
                                <p className="text-small text-default-500">
                                    Email
                                </p>
                                <p className="text-md">{user.email}</p>
                            </div>
                        </div>
                        {user.createdAt && (
                            <div className="flex items-center space-x-4">
                                <FaCalendarAlt className="text-2xl text-default-500" />
                                <div>
                                    <p className="text-small text-default-500">
                                        Joined
                                    </p>
                                    <p className="text-md">
                                        {new Date(
                                            user.createdAt
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        )}
                        {user.bio && (
                            <div className="flex items-start space-x-4">
                                <FaPen className="text-2xl text-default-500 mt-1" />
                                <div>
                                    <p className="text-small text-default-500">
                                        Bio
                                    </p>
                                    <p className="text-md">{user.bio}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </CardBody>
                <Divider />
                <CardBody>
                    <Button color="primary" className="w-full">
                        Edit Profile
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
};
