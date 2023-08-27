import React from "react";

function Footer() {
    return (
        <footer className="pt-10">
            <div className="container">
                <div className="footer-top d-flex pb-70">
                    <div className="facebook">
                        {/* <a href=""><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a> */}
                    </div>
                    <div className="twitter">
                        {/* <a href=""><FontAwesomeIcon icon="fa-brands fa-twitter" /></a> */}
                    </div>
                    <div className="pinterest">
                        {/* <a href=""><FontAwesomeIcon icon="fa-brands fa-pinterest-p" /></a> */}
                    </div>
                    <div className="linkedin">
                        {/* <a href=""><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a> */}
                    </div>
                    <div className="instagram">
                        {/* <a href=""><FontAwesomeIcon icon="fa-brands fa-instagram" /></a> */}
                    </div>
                    <div className="vimeo">
                        {/* <a href=""><FontAwesomeIcon icon="fa-brands fa-vimeo-v" /></a> */}
                    </div>
                    <div className="dribble">
                        {/* <a href=""><FontAwesomeIcon icon="fa-brands fa-dribbble" /></a> */}
                    </div>
                    <div className="behance">
                        {/* <a href=""><FontAwesomeIcon icon="fa-brands fa-behance" /></a> */}
                    </div>
                </div>
                <div className="footer-body project-border">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7">
                            <div className="footer-widget mr-40 pr-80 footer-border">
                                <h2 className="dm-sans fs-56 mb-20  ">Get in touch!</h2>
                                <p className="poppins fs-16 mb-40">Fusce varius, dolor tempor interdum tristique, dui urna bib endum magna, ut ullamcorper purus</p>
                                <form action=""  >
                                    <div className="input-group d-flex justify-content-between">
                                        {/* <span><FontAwesomeIcon icon="fa-solid fa-envelope-open" /></span> */}
                                        <div className="input">
                                            <input type="email" placeholder="Email address" className="w-100 border-0 poppins" />
                                        </div>
                                        <div className="subcribe-btn ">
                                            <button className="fs-16 poppins primary-bg">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-4">
                                    <h6 className="fs-20 dm-sans aboutus-h2 mb-30 text-center">Services</h6>
                                    <ul>
                                        <li className="ptb-8 text-center"><a href="" className="fs-18 poppins subtitle">Design</a></li>
                                        <li className="ptb-8 text-center"><a href="" className="fs-18 poppins subtitle">Development</a></li>
                                        <li className="ptb-8 text-center"><a href="" className="fs-18 poppins subtitle">Online Marketing</a></li>
                                        <li className="ptb-8 text-center"><a href="" className="fs-18 poppins subtitle">Business</a></li>
                                        <li className="ptb-8 text-center"><a href="" className="fs-18 poppins subtitle">Technology</a></li>
                                        <li className="ptb-8 text-center"><a href="" className="fs-18 poppins subtitle">Content Strategy</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-4">
                                    <h6 className="fs-20 dm-sans aboutus-h2 mb-30 text-center">Resources</h6>
                                    <ul className="p-0">
                                        <li className="ptb-8 text-center"><a href="" className="fs-18 poppins subtitle">Blog</a></li>
                                        <li className="ptb-8 text-center"><a href="" className="fs-18 poppins subtitle">Case Studies</a></li>
                                        <li className="ptb-8 text-center"><a href="" className="fs-18 poppins subtitle">Portfolio</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-4">
                                    <h6 className="fs-20 dm-sans aboutus-h2 mb-30 text-center">Support</h6>
                                    <ul className="p-0">
                                        <li className="ptb-8 text-center"><a href="" className="fs-18 poppins subtitle">Contact</a></li>
                                        <li className="ptb-8 text-center"><a href="" className="fs-18 poppins subtitle">Privacy Policy</a></li>
                                        <li className="ptb-8 text-center"><a href="" className="fs-18 poppins subtitle">Portfolio</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom ptb-25">
                <div className="row">
                    <div className="col-md-6">
                    <span class="copyright-text fs-16 poppins">© 2023. All rights reserved by <a href="" >Heet Morker.</a></span>
                    </div>
                    <div className="col-md-6">
                        <ul className="d-flex term-conditions justify-content-end">
                            <li className="pr-20"><a href="" className="fs-16 poppins ">Privacy Policy</a></li>
                            <li className="pr-20"><a href="" className="fs-16 poppins ">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;