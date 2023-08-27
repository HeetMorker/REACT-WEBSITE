import React from "react";

    function TopCLients() {
        const clientImages = [
            { image: "/Images/brand/brand-1.png", },
            { image: "/Images/brand/brand-2.png", },
            { image: "/Images/brand/brand-3.png", },
            { image: "/Images/brand/brand-4.png", },
            { image: "/Images/brand/brand-5.png", },
            { image: "/Images/brand/brand-6.png", },
            { image: "/Images/brand/brand-7.png", },
            { image: "/Images/brand/brand-8.png", },
        ];
        const DisplayClients = (client, index) => {
            return (
                <div class="col-lg-3 col-6" key={index}>
                    <div class="brand-grid pt-10"><img src={client.image} alt="client" /></div>
                </div>
            )
            }
        return (
            <section className="clients-padd services-section position-relative">
                <div className="clients-shape"><img src="/Images/others/line-9.png" alt="shape" /></div>
                <div className="container">
                    <div className="services-heading">
                        <div className=" mb-15 dm-sans fs-20 rose-color fw-semibold">Top Clients</div>
                        <h2 className="w-50 fs-64 dm-sans mb-35 text-light w-50">We’ve built solutions for...</h2>
                        <p className="poppins fs-18 mb-35 text-light w-40">Design anything from simple icons to fully featured websites and applications.</p>
                    </div>
                    <div class="row">
                        {clientImages.map(DisplayClients)}
                    </div>
                </div>
            </section>

        )
    }
    export default TopCLients;