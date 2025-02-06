/* eslint-disable @next/next/no-img-element */
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AboutPage = () => {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                <h1 className="text-4xl font-extrabold text-center text-gray-800">About Our Store</h1>
                <p className="mt-4 text-lg text-center text-gray-600">
                    Welcome to our online store! We are dedicated to providing top-quality products to our customers.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            At our store, we believe in delivering the best products at the most competitive prices.
                            Our mission is to offer a wide range of high-quality products that meet the diverse needs of our customers.
                            Whether youre shopping for the latest tech gadgets or fashion, we have something for everyone.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://cdn.pixabay.com/photo/2024/04/11/16/20/business-8690142_1280.jpg"
                            alt="Store Team"
                            className="w-full max-w-md rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our customers choose us for a number of reasons:
                    </p>
                    <ul className="mt-4 text-left mx-auto max-w-2xl space-y-2 text-gray-600">
                        <li>✔ High-quality products sourced from reliable suppliers</li>
                        <li>✔ Fast and reliable shipping to ensure timely delivery</li>
                        <li>✔ Exceptional customer service to assist with any questions</li>
                        <li>✔ Secure payment methods for a worry-free shopping experience</li>
                    </ul>
                </div>

                <div className="mt-10 flex justify-center">
                    <img
                        src="https://cdn.pixabay.com/photo/2024/03/26/11/57/e-commerce-8656646_1280.jpg"
                        alt="Quality Products"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
