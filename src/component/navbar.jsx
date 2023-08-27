import React from "react";

function NavBar() {
    return (
        <React.Fragment>
            <div class="bubble position-absolute start-0 top-0">
                <img src="/Images/others/bubble-39.png" alt="bubble" className="img-fluid" />
            </div>
            <div className="shape1 animated-bubble position-absolute ">
                <img src="/Images/others/bubble-14.png" alt=""  />
            </div>
            <div className="shape2 animated-bubble position-absolute ">
                <img src="/Images/others/bubble-14.png" alt="" />
            </div>
            <section className="100-dvh position-relative" >
                <header className='ptb-50 postion-relative'>
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className='navbar-brand'>
                                <a href="index.html">
                                    <img src="/Images/testimonial/logo.png" alt="logo" className='img-fluid' />
                                </a>
                            </div>
                            <div className="menu-wrap  d-flex align-items-center ">
                                <ul className="menu menu-mar d-flex justify-content-end  p-0">
                                    <li ><a href="" className="poppins text-dark">Digital Agency</a></li>
                                    <li ><a href="" className="poppins text-dark">Services</a></li>
                                    <li ><a href="" className="poppins text-dark">Portfolio</a></li>
                                    <li ><a href="" className="poppins text-dark">Pages</a></li>
                                    <li ><a href="" className="poppins text-dark">Blog</a></li>
                                    <li ><a href="" className="poppins text-dark">Contact</a></li>
                                </ul>
                                <div className="header-bar">
                                    <button className="header-btn rounded-circle d-flex flex-column justify-content-center  align-items-center">
                                        <span className="mb-1"></span>
                                        <span className="mb-1"></span>
                                        <span className="mb-1"></span>

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                {/* BANNER SECTION */}
                <div className="banner pt-255 positon-relative h-795">
                    <div className="container  h-100">
                        <div className="row h-100">
                            <div className="col-lg-6">
                                <div className="banner-content mt-60">
                                    <h1 className=" title dm-sans title-color mb-30 fs-78 ">Build beautiful website & mobile apps.</h1>
                                    <span className=" d-inline-block subtitle poppins">Create live segments and target the right people for messages based on their behaviors.</span>
                                        <a href="" className=" axil-btn btn poppins">Get Started</a>
                                </div>
                            </div>
                            <div className="col-lg-6 position-relative">
                                <div className="banner-thumbnail ">
                                    <div className="large-thumb">
                                        <img src="/Images/banner/window.png" alt="Laptop" className="img-fluid" />
                                    </div>
                                    <div className="large-thumb-2 position-absolute bottom-0">
                                        <img src="/Images/banner/laptop-poses.png" alt="Laptop" className="img-fluid" />
                                    </div>
                                    <div className="large-thumb-3 position-absolute top-0 end-0" >
                                        <img src="/Images/banner/chat-group.png" alt="chat" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default NavBar;