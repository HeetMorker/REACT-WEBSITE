import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Plans() {
    return (
        <section className="plans-padd position-relative aboutus-bg">
            <div className="plans-shape1"><img src="/Images/others/line-1.png" alt="shape" /></div>
            <div className="plans-shape2"><img src="/Images/others/bubble-4.png" alt="shape" /></div>
            <div className="container">
                <div className="plans-heading mb-60">
                    <div className=" mb-15 dm-sans fs-20 rose-color fw-semibold text-center ">Pricing Plan</div>
                    <h2 className="dm-sans fs-64 mb-30 text-center ">We’ve built solutions for...</h2>
                    <p className="w-50 text-center m-auto poppins fs-18 mb-40 trs subtitle">Flexible pricing options for freelancers and design teams.</p>
                </div>
                <div className="pricing-billing text-center ">
                    <ul>
                        <li className="nav-item"><button className="nav-link active primary-bg">Billed Yearly</button></li>
                        <li className="nav-item"><button className="nav-link primary-bg">Billed Monthly</button></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="pricing-table p-40 br-30 mb-30 trs bg-light light-border">
                            <div className="pricing-header text-center">
                                <h3 class="title fs-40 dm-sans primary-color mb-8 fw-normal">Professional</h3>
                                <h6 className="subtitle fs-14 poppins mb-20">A beautiful, simple website</h6>
                                <div className="price-wrap pt-50 mb-30">
                                    <h6 className="fs-64 dm-sans aboutus-h2 fw-semibold ">$199.99 <span className="fs-14 dm-sans testi-span">/yearly</span></h6>
                                </div>
                                <div className="pricing-btn">
                                    <button className="fs-16 poppins pricing-section line-border br-20 bg-light trs">Get Started Today</button>
                                </div>
                            </div>
                            <div className="pricing-body mt-30">
                                <ul>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />10 Pages Responsive Website</li>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />5 PPC Campaigns</li>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />10 SEO Keywords</li>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />5 Facebook Camplaigns</li>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />2 Video Camplaigns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-table p-40 br-30 mb-30 trs bg-light light-border">
                            <div className="pricing-header text-center">
                                <h3 class="title fs-40 dm-sans primary-color mb-8 fw-normal">Standard</h3>
                                <h6 className="subtitle fs-14 poppins mb-20">Small Team</h6>
                                <div className="price-wrap pt-50 mb-30">
                                    <h6 className="fs-64 dm-sans aboutus-h2 fw-semibold ">$219.99 <span className="fs-14 dm-sans testi-span">/yearly</span></h6>
                                </div>
                                <div className="pricing-btn">
                                    <button className="fs-16 poppins pricing-section line-border br-20 bg-light trs">Get Started Today</button>
                                </div>
                            </div>
                            <div className="pricing-body mt-30">
                                <ul>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />20 Pages Responsive Website</li>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />Unlimited PPC Campaigns</li>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />Unlimited SEO Keywords</li>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />Unlimited Facebook Camplaigns</li>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />Unlimited Video Camplaigns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="pricing-table p-40 br-30 mb-30 trs bg-light light-border">
                            <div className="pricing-header text-center">
                                <h3 class="title fs-40 dm-sans primary-color mb-8 fw-normal">Ultimate</h3>
                                <h6 className="subtitle fs-14 poppins mb-20">Large Team</h6>
                                <div className="price-wrap pt-50 mb-30">
                                    <h6 className="fs-64 dm-sans aboutus-h2 fw-semibold ">$559.99 <span className="fs-14 dm-sans testi-span">/yearly</span></h6>
                                </div>
                                <div className="pricing-btn">
                                    <button className="fs-16 poppins pricing-section line-border br-20 bg-light trs">Get Started Today</button>
                                </div>
                            </div>
                            <div className="pricing-body mt-30">
                                <ul>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />50 Pages Responsive Website</li>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />Unlimited PPC Campaigns</li>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />Unlimited SEO Keywords</li>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />Unlimited Facebook Camplaigns</li>
                                    <li className="testi-span fw-normal fs-16 poppins"><FontAwesomeIcon icon="fa-solid fa-check " />Unlimited Video Camplaigns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Plans;