import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                <h1 className="text-4xl font-extrabold text-center text-gray-800">Contact Us</h1>
                <p className="mt-4 text-lg text-center text-gray-600">
                    Have a question? Feel free to reach out to us using the form below.
                </p>

                <form className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-lg font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-lg font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mt-6">
                        <label htmlFor="message" className="text-lg font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            placeholder="Your Message"
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={6}
                            required
                        />
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
