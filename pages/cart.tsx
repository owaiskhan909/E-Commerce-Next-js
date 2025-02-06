import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CartPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />

            <div className="flex-grow max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                <h1 className="text-4xl font-extrabold text-center text-gray-800">Your Cart</h1>
                <p className="mt-4 text-lg text-center text-gray-600">
                    Review your items before proceeding to checkout.
                </p>

                <div className="mt-8">
                    <div className="space-y-6">
                        <div className="text-center text-gray-500">
                            <p className="text-xl">No items in the cart yet.</p>
                            <p className="mt-2 text-sm">Browse our products and add them to your cart!</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="font-medium text-lg">Total: </span>
                        <span className="font-bold text-2xl text-gray-800">$0.00</span>
                    </div>
                    <Link href="/checkout">
                        <button className="bg-blue-700 text-white py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-blue-600">
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CartPage;
