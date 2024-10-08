import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link as NextLink,
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
} from "@nextui-org/react";
import { Link, Link as RouterLink } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Import useAuth

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { user, logout } = useAuth(); // Use the auth context

    const menuItems = [
        "Most recent",
        "About",
        "News",
        "Culture",
        "Sport",
        "Tech",
        "Health",
        "Travel",
        "Education",
        "Environment",
    ];

    return (
        <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand as={RouterLink} to="/">
                    <p className="text-red-600 font-bold text-inherit">NEWS</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <RouterLink color="foreground" to="/mostrecent">
                        Most Recent
                    </RouterLink>
                </NavbarItem>

                <NavbarItem>
                    <RouterLink color="foreground" to="/about">
                        About
                    </RouterLink>
                </NavbarItem>

                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 text-md bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                Sections
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="News Sections"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem key="news" description="News">
                            News
                        </DropdownItem>
                        <DropdownItem key="culture" description="Culture">
                            Culture
                        </DropdownItem>
                        <DropdownItem key="sport" description="Sport">
                            Sport
                        </DropdownItem>
                        <DropdownItem key="tech" description="Technology">
                            Technology
                        </DropdownItem>
                        <DropdownItem key="health" description="Health">
                            Health
                        </DropdownItem>
                        <DropdownItem key="travel" description="Travel">
                            Travel
                        </DropdownItem>
                        <DropdownItem key="edu" description="Education">
                            Education
                        </DropdownItem>
                        <DropdownItem
                            key="environment"
                            description="Environment"
                        >
                            Environment
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarContent justify="end">
                {user ? (
                    <>
                        <Dropdown>
                            <NavbarItem>
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color="danger"
                                        name={user.name}
                                        size="sm"
                                        src={user.profilePicture}
                                    />
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu
                                aria-label="Profile Actions"
                                variant="flat"
                            >
                                <DropdownItem
                                    key="profile"
                                    as={Link}
                                    to="/profile"
                                    className="h-14 gap-2"
                                    aria-label="Signed in as"
                                >
                                    <p className="font-semibold">
                                        Signed in as
                                    </p>
                                    <p className="font-semibold">
                                        {user.email}
                                    </p>
                                </DropdownItem>
                                <DropdownItem
                                    key="settings"
                                    aria-label="My Settings"
                                >
                                    My Settings
                                </DropdownItem>
                                <DropdownItem
                                    key="logout"
                                    color="danger"
                                    onClick={logout}
                                    textValue="Log Out"
                                >
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </>
                ) : (
                    <>
                        <NavbarItem className="hidden lg:flex">
                            <RouterLink to="/login">Login</RouterLink>
                        </NavbarItem>
                        <NavbarItem>
                            <Button
                                as={RouterLink}
                                color="danger"
                                to="/signup"
                                variant="flat"
                            >
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <NextLink
                            color="foreground"
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </NextLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
