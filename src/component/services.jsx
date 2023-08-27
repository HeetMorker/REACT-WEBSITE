import React from "react";

function Services() {
    const display = [
        { image: "/Images/icon/icon-1.png", title: "Design" },
        { image: "/Images/icon/icon-2.png", title: "Development" },
        { image: "/Images/icon/icon-3.png", title: "Online Marketing" },
        { image: "/Images/icon/icon-4.png", title: "Busineess" },
        { image: "/Images/icon/icon-5.png", title: "Technology" },
        { image: "/Images/icon/icon-6.png", title: "Content Stretegy" },
    ];
    const renderServices = (card, index) => {
        return (
            <div className="col-xl-4 col-md-6" key={index}>
                <div className="services-grid position-relative ">
                    <div className="services-thumbnail mr-25 w-85">
                        <img src={card.image} alt="" />
                    </div>
                    <div class="content">
                        <h5 className="mb-30"><a href="" className="fs-24 dm-sans text-light trs">{card.title}</a></h5>
                        <p className="poppins fs-16 mb-40 text-light trs">Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
                        <p><a href="" className="more-info position-relative pl-50 fs-16 poppins text-light trs">Find out more</a></p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <React.Fragment>
            <section className="services-section services-padd">
                <div className="container">
                    <div className="services-heading">
                        <div className=" mb-15 dm-sans fs-20 rose-color fw-semibold">What We Can Do For You</div>
                        <h2 className="fs-64 dm-sans mb-35 text-light w-50">Services we can help you with</h2>
                        <p className="poppins fs-18 mb-40 text-light w-40">Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu imperdiet.</p>
                    </div>
                    <div className="row">
                        {display.map(renderServices)}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Services;