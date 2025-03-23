import { FaFacebookF, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";

const  Footer=()=> {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-5">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
                {/* Contact Section */}
                <div>
                    <h2 className="text-xl font-bold text-white">monstvak</h2>
                    <p className="mt-2">Call us 24/7</p>
                    <p className="text-lg font-semibold text-white">+91-9711994994</p>
                    <p className="mt-2 text-sm">
                        Khasra No. 26/11/1 Ground Floor, Near R.B.M School, Village Bakkarwala, New Delhi-110041
                    </p>
                    <a href="mailto:indianbaths@gmail.com" className="text-blue-400 mt-2 block">
                        monstvak@gmail.com
                    </a>
                    <div className="flex gap-4 mt-4 text-xl">
                        <FaFacebookF className="cursor-pointer hover:text-blue-500" />
                        <FaInstagram className="cursor-pointer hover:text-pink-500" />
                        <FaYoutube className="cursor-pointer hover:text-red-500" />
                        <FaTelegram className="cursor-pointer hover:text-blue-400" />
                    </div>
                </div>

                {/* Our Story */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Our Story</h3>
                    <ul className="mt-2 space-y-2">
                        <li>Company Profile</li>
                        <li>Our Facility</li>
                        <li>Commitment to Quality</li>
                        <li>Contract Manufacturing</li>
                        <li>Our Awards</li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Categories</h3>
                    <ul className="mt-2 space-y-2">
                        <li>Chandliers</li>
                        <li className="text-green-400">Chandliers</li>
                        <li>Chandliers</li>
                        <li>Chandliers</li>
                        <li>Chandliers</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li>Blog</li>
                        <li>Subscription</li>
                        <li>Announcements</li>
                        <li>FAQ's</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm flex justify-between">
                <div>
                <p>Copyright © 2023 <a href="https://www.indianbath.com" className="text-blue-400">www.indianbath.com</a></p>
                </div>
                <div className="hidden md:flex gap-4">
                <p className="mt-2">We Use Safe Payment For</p>
                <div className="flex justify-center gap-4 mt-2">
                    <img src="..\public\VISA.webp" alt="Visa" className="h-8" />
                    <img src="..\public\UPI.png" alt="UPI" className="h-8" />
                    <img src="..\public\RAZORPAY.png" alt="Skrill" className="h-8" />
                    <img src="..\public\APPLEPAY.webp" alt="Apple Pay" className="h-8" />
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;