import React from "react";

function EstimateProject() {
    return (
        <section className="estiproject-padd estimate-project position-relative ">
                <div className="estimate-shape1 position-absolute"><img src="/Images/others/bubble-12.png" alt="shape"  /></div>
                <div className="estimate-shape2 position-absolute"><img src="/Images/others/bubble-16.png" alt="shape"  /></div>
                <div className="estimate-shape3 position-absolute"><img src="/Images/others/bubble-13.png" alt="shape"  /></div>
                <div className="estimate-shape4 position-absolute"><img src="/Images/others/bubble-14.png" alt="shape"  /></div>
                <div className="estimate-shape5 position-absolute"><img src="/Images/others/bubble-16.png" alt="shape"  /></div>
                <div className="estimate-shape6 position-absolute"><img src="/Images/others/bubble-15.png" alt="shape"  /></div>
                <div className="estimate-shape7 position-absolute"><img src="/Images/others/bubble-16.png" alt="shape"  /></div>

            <div className="container project-border">
                <div className="estimate-heading mb-65">
                    <div className=" mb-15 dm-sans fs-20 yellow-color text-center fw-semibold">Let's Work Together</div>
                    <h2 className="fs-64 dm-sans mb-55 text-light text-center">Need a successful <br/> project?</h2>
                    <div className="pricing-btn text-center">
                        <button className="fs-16 poppins pricing-section line-border br-20 bg-light trs">Estimate Project</button>
                    </div>
                </div>
                <div className="estimate-thumbnail text-center position-relative">
                    <img src="/Images/others/chat-group.png" alt="" className="img-fluid mr-180" />
                    <img src="/Images/others/laptop-poses.png" alt=""/>
                    <img src="/Images/others/bill-pay.png" alt=""/>
                </div>
            </div>
        </section>
    )

}
export default EstimateProject;