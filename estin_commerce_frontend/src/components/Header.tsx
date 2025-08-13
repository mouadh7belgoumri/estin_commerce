import { useState } from "react"
import { FaCartShopping, FaBars, FaXmark } from "react-icons/fa6"
import { Link } from "react-router"
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/clerk-react"

interface navLink {
    title: string
    href: string
}

const Header = () => {
    const navLinks: navLink[] = [
        { title: "Home", href: "/" },
        { title: "Shop", href: "/shop" },
        { title: "Suggest", href: "/suggest" },
        { title: "About Us", href: "/about" },
    ]
    const [active, setActive] = useState(false)

    return (
        <div className="relative">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-between items-center px-6 lg:px-10 py-6 lg:py-8">
                <h1 className="text-xl lg:text-2xl font-bold">
                    <Link to={'/'}>Logo</Link>
                </h1>
                <div className="flex items-center gap-8 lg:gap-12">
                    <ul className="flex gap-6 lg:gap-8 text-lg">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link 
                                    to={link.href} 
                                    className="hover:text-gray-600 transition-colors duration-200"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 lg:gap-6">
                        <FaCartShopping className="text-2xl lg:text-3xl hover:text-gray-600 cursor-pointer transition-colors duration-200" />
                        <SignedOut><SignInButton/></SignedOut>
                        <SignedIn><UserButton /></SignedIn>
                    </div>
                </div>
            </nav>

            {/* Mobile Header */}
            <div className="lg:hidden">
                <div className="flex justify-between items-center px-4 py-4">
                    <h1 className="text-xl font-bold">
                        <Link to={'/'}>Logo</Link>
                    </h1>
                    <div className="flex items-center gap-4">
                        <FaCartShopping className="text-xl" />
                        <SignedOut><SignInButton/></SignedOut>
                        <SignedIn><UserButton /></SignedIn>
                        <button 
                            onClick={() => setActive(!active)} 
                            className="p-2 text-xl"
                            aria-label="Toggle menu"
                        >
                            {active ? <FaXmark /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <nav className={`${active ? 'block' : 'hidden'} bg-black text-white absolute top-full left-0 right-0 z-50 shadow-lg`}>
                    <ul className="flex flex-col py-4">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link 
                                    to={link.href} 
                                    className="block px-6 py-3 text-lg hover:bg-gray-800 transition-colors duration-200"
                                    onClick={() => setActive(false)}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header

