import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-amber-900 text-white">
                <div className="main-footer flex justify-between items-center p-4 bg-blue-400">
                    <div className="about-footer">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, amet.</p>
                    </div>

                    <div className="policy">
                        <h2>Policy</h2>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>

                    <div className="social">
                        <h2>Follow Us</h2>
                        <div className="social-icons flex justify-between items-center">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </div>
                    <div className="contact-footer">
                        <h2>Contact Us</h2>
                        <p>Phone: 1234567890</p>
                        <p>Email:b8416800849@gmail.com</p>
                    </div>
                </div>
                <div className="aside-footer flex justify-center items-center bg-amber-950 text-white p-4">
                    <p my-4> &copy; 2021 E-Shop</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
