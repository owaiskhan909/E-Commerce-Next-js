import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-5 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-3xl font-bold cursor-pointer hover:text-gray-200">
                    <Link href="/">Store</Link>
                </div>

                <ul className="flex space-x-8 text-lg font-semibold">
                    <li>
                        <Link href="/">
                            <span className="hover:text-gray-400 transition duration-300">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            <span className="hover:text-gray-400 transition duration-300">Products</span>
                        </Link>
                    </li>
                    <li>
                        <button className="snipcart-checkout hover:text-gray-400 transition duration-300">
                            View Cart
                        </button>
                    </li>
                    <li>
                        <Link href="/about">
                            <span className="hover:text-gray-400 transition duration-300">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className="hover:text-gray-400 transition duration-300">Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
