import React from "react";

function AboutUs() {
    return (
        <section className="ptb-140 position-relative aboutus-bg">
            <div className="about-shape1"><img src="/Images/others/bubble-7.png" alt="shape"className="img-fluid" /></div>
            <div className="about-shape2"><img src="/Images/others/line-4.png" alt="shape" className="img-fluid"/></div>
            <div className="about-shape3"><img src="/Images/others/line-5.png" alt="shape" className="img-fluid"/></div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us">
                            <div className=" mb-15 dm-sans fs-20 rose-color fw-semibold">What We Can Do For You</div>
                            <h2 className="dm-sans fs-64 mb-40">We do design, code & develop.</h2>
                            <p className="poppins fs-18 mb-30">Nulla et velit gravida, facilisis quam a, molestie ante. Mauris placerat suscipit dui, eget maximus tellus blandit a. Praesent non tellus sed ligula commodo blandit in et mauris. Quisque efficitur ipsum ut dolor molestie pellentesque. </p>
                            <p className="fs-18 poppins mb-40">Nulla pharetra hendrerit mi quis dapibus. Quisque luctus, tortor a venenatis fermentum, est lacus feugiat nisl, id pharetra odio enim eget libero. </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="aboutus-form ml-1 p-50 br-30 bg-white">
                            <h3 className="dm-sans fs-40 mb-30 ">Get a free Keystroke quote now</h3>
                            <div className="form-group mb-16">
                                <label className="mb-10 fs-14 poppins title-color fw-semibold d-block">Name</label>
                                <input type="text" class="form-control" name="contact-name" placeholder="John Smith" required="" ></input>
                            </div>
                            <div className="form-group mb-16">
                                <label className="mb-10 fs-14 poppins title-color fw-semibold d-block">Email</label>
                                <input type="text" class="form-control" name="contact-name" placeholder="example@gmail.com" required="" ></input>
                            </div>
                            <div className="form-group mb-40">
                                <label className="mb-10 fs-14 poppins title-color fw-semibold d-block">Phone</label>
                                <input type="text" class="form-control" name="contact-name" placeholder="+1234567890" required="" ></input>
                            </div>
                            <div className="quote-btn">
                            <a href="" className="axil-btn btn poppins w-100">Get Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
