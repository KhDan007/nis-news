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
} from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
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
