import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_1280.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white px-6 md:px-12">
                        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                            Welcome to Our E-commerce Store
                        </h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Discover the best products at unbeatable prices. Browse our latest collections and enjoy a seamless shopping experience!
                        </p>
                        <div className="mt-8 flex justify-center space-x-4">
                            <Link href="/products">
                                <button className="bg-transparent border-2 border-white-500 text-white-500 py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-blue-500 hover:text-white">
                                    Shop Products
                                </button>
                            </Link>
                            <Link href="/about">
                                <button className="bg-transparent border-2 border-white-500 text-white-500 py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-blue-500 hover:text-white">
                                    Learn About Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 bg-gray-100 text-center">
                <h2 className="text-3xl font-extrabold text-gray-800">
                    Why Shop With Us?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    We offer a wide range of high-quality products that are designed to meet your needs and exceed expectations.
                    With secure payments, fast shipping, and exceptional customer service, we make your shopping experience seamless.
                </p>
                <div className="mt-10 flex justify-center space-x-6">
                    <Link href="/products">
                        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-blue-600">
                            Browse Products
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-blue-600">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
