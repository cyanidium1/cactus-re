import { useRouter } from "next/router";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Divider } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { GiBookmark } from "react-icons/gi";
import ModalWw from "./Modal";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const router = useRouter();

    return (
        <Navbar maxWidth="xl" height={'6rem'} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" color="foreground" className="flex flex-col items-center">
                        {/* pc */}
                        <div className="items-center hidden sm:flex">
                            <GiBookmark size={24} />
                            <p className="font-bold hidden sm:block text-3xl ml-3">A. Zhavrid</p>
                        </div>
                        <p className="text-sm hidden sm:block">юрист | предприниматель</p>
                        {/* mob */}
                        <div className="flex items-center sm:hidden ">
                            <GiBookmark size={24} />
                            <p className="font-bold  text-xl ml-1">A. Zhavrid</p>
                        </div>
                        <p className="text-sm sm:hidden">юрист | бизнесмен</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 items-center" justify="center">
                <NavbarItem>
                    <Link color={router.pathname === "/" ? "secondary" : "foreground"} href="/" className="text-2xl">
                        Главная
                    </Link>
                </NavbarItem>
                <Divider orientation="vertical" className="h-8" />
                <NavbarItem>
                    <Link color={router.pathname === "/services" ? "secondary" : "foreground"} href="/services" className="text-2xl">
                        Услуги
                    </Link>
                </NavbarItem>
                <Divider orientation="vertical" className="h-8" />
                <NavbarItem>
                    <Link color={router.pathname === "/contact" ? "secondary" : "foreground"} href="/contact" className="text-2xl">
                        Контакты
                    </Link>
                </NavbarItem>
                <Divider orientation="vertical" className="h-8" />
                <ThemeSwitcher />
            </NavbarContent>
            <NavbarContent justify="end">

                <NavbarItem className="mt-1">
                    <ModalWw />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="flex flex-col items-center space-y-8 justify-center">
                <NavbarItem>
                    <Link color={router.pathname === "/" ? "secondary" : "foreground"} href="/" className="text-4xl">
                        Главная
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color={router.pathname === "/services" ? "secondary" : "foreground"} href="/services" className="text-4xl">
                        Услуги
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color={router.pathname === "/contact" ? "secondary" : "foreground"} href="/contact" className="text-4xl">
                        Контакты
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarMenu>
        </Navbar>
    );
}