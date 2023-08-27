import React from "react";

function Testimonial() {
    const testimoinalInfo = [
        { image: "/Images/icon/yelp-2.png", authorimage: "/Images/testimonial/testimonial-1.png", authorname: "Darrell Steward"},
        { image: "/Images/icon/google-2.png", authorimage: "/Images/testimonial/testimonial-2.png", authorname: "Savannah Nguyen"},
        { image: "/Images/icon/fb-2.png", authorimage: "/Images/testimonial/testimonial-3.png", authorname: "Floyd Miles"},
      
    ];
    const rendertestimonials = (testimoinal, index) => {
        return (
            <div className="col-lg-4">
                <div className="testimoinal-grid testi-padd trs">
                    <div className="mb-30 testi-img"><img src={testimoinal.image} alt="" /></div>
                    <p class="fs-24 mb-40 dm-sans about-us-h2 ls">“ Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. ”</p>
                </div>
                <div className="author-info d-flex align-items-center">
                    <div className="thumb">
                        <img src={testimoinal.authorimage} alt="author" class="rounded-circle img-fluid" />
                    </div>
                    <div class="author-content ml-20">
                        <span class="name d-block fs-16 poppins about-us-h2 fw-semibold">{testimoinal.authorname}</span>
                        <span class="designation fs-14 poppins testi-span d-block ">Executive Chairman</span>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <section className="ptb-140 position-relative ">
            <div className="testi-shape1"><img src="/Images/others/bubble-1.png" alt="shape" /></div>
            <div className="container">
                <div className="testimonial-heading">
                    <div className=" mb-15 dm-sans fs-20 rose-color fw-semibold">Testimonial</div>
                    <h2 className="dm-sans fs-64 mb-30">From getting started</h2>
                    <p className="poppins fs-18 mb-30 w-50">Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet.</p>
                </div>
                <div className="row">
                    {testimoinalInfo.map(rendertestimonials)}
                </div>
            </div>
        </section>
    )
}

export default Testimonial;