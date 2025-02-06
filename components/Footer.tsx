import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p>&copy; 2025 E-commerce Store. All rights reserved.</p>
                    </div>

                    <div className="flex space-x-4">
                        <Link href="/about" className="text-white hover:text-blue-400 transition duration-300">About Us</Link>
                        <Link href="/contact" className="text-white hover:text-blue-400 transition duration-300">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
