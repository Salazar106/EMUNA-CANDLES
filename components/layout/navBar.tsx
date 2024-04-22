import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { Image } from "@nextui-org/react";
import "./navBar.css"

export const NavBar = () => {

    const links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
        { name: 'Catalog', link: '/catalog' },
    ]

    const social = [
        { name: "facebook", link: 'https://www.facebook.com/emunacandles/', icon: <FaSquareFacebook /> },
        { name: "instagram", link: 'https://www.instagram.com/emunacandles/', icon: <FaInstagram /> },
    ]



    return (
        <div>
            <div className=" hidden md:block h-36 bg-sky-200" id="imgNavBar">  
            </div>            

            <Navbar style={{ backgroundColor: "#b38c6d", color: "white" }}
                classNames={{
                    item: [
                        "flex",
                        "relative",
                        "h-full",
                        "items-center",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[2px]",
                        "data-[active=true]:after:rounded-[2px]",
                        "data-[active=true]:after:bg-primary",

                    ],
                }}
            >
                <NavbarBrand>
                    <Image src='/imgs/grayLogo.png' alt="Ejemplo" width={70} />

                    {/* <p className="font-bold text-inherit">EMUNA CANDLES</p> */}
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {links.map((link, index) => (
                        <NavbarItem key={index}>
                            <Link style={{ color: "white" }} href={link.link}>
                                {link.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarContent justify="end">
                    {social.map((red, index) => (
                        <NavbarItem key={index}>
                            <Link target="_blank" style={{ color: "white" }} href={red.link}>
                                {red.icon}
                            </Link>
                        </NavbarItem>
                    ))}
                    {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem> */}
                </NavbarContent>
            </Navbar>
        </div>
    );
}
