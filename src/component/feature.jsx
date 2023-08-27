import React from "react";
import CountUp from 'react-countup';

function Feature() {
    const featureDisplay = [
        { image: "/Images/icon/icon-7.png", title: "Years of operation" , count: 15 },
        { image: "/Images/icon/icon-8.png", title: "Project Deliverd" , count: 360 },
        { image: "/Images/icon/icon-9.png", title: "Specialist" , count: 600 },
        { image: "/Images/icon/apple.png", title: "Years of operation" , count: 64 },

    ];
    const renderFeature = (feature, index) => {
        return (
            <div className="col-lg-3 col-6" key={index}>
                <div className="countup position-relative countup-padd">
                    <div className="icon text-center">
                        <img src={feature.image} alt="" />
                    </div>
                    <div class="count-number text-center mb-10">
                        <CountUp start={0} end={feature.count} duration={3} />
                        <span className="fs-64 dm-sans">+</span>
                        <h6 className="fs-20 fw-semibold dm-sans text-light mb-30">{feature.title}</h6>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section className="feature-padd feature-section">
            <div className="container">
                <div className="feature-heading">
                    <div className=" mb-15 dm-sans fs-20 rose-color fw-semibold text-center text-light">Featured Case Study</div>
                    <h2 className="dm-sans fs-64 mb-30 text-center text-light">Design startup movement</h2>
                    <p className="w-50 text-center m-auto poppins fs-16 mb-40 text-light trs">In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus.</p>
                </div>
                <div className="row">
                    {featureDisplay.map(renderFeature)}
                </div>
            </div>
        </section >
    )
}
export default Feature;