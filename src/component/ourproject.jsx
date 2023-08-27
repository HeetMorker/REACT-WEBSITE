import React from "react";

function OurProject() {
    const projectDetail = [
        { image: "/Images/project/project-1.png", title: "Creative Agency", subtitle: "Branding, Website, App" },
        { image: "/Images/project/project-2.png", title: "Digital Marketing", subtitle: "Logo, Website, Mobile" },
        { image: "/Images/project/project-3.png", title: "Digital Agency", subtitle: "Website, UI/UX" },
        { image: "/Images/project/project-4.png", title: "Plan Management", subtitle: "Branding, Website, Mobile" },
        { image: "/Images/project/project-5.png", title: "Social Engagement", subtitle: "Design, Development" },
        { image: "/Images/project/project-6.png", title: "Web Application", subtitle: "Logo, Webapp, Mobile" },
    ];
    const displayProject = (project, index) => {
        return (
            <div className="col-md-6" key={index}>
                <div className="thumbnail ">
                    <div className="thumbnail-img  overflow-hidden work-br mr-26">
                        <img src={project.image} alt="" className=" trs" />
                    </div>
                    <div className="work-content work-content-padd overflow-hidden">
                        <h4 className="mb-10"><a href="" className="fs-32 dm-sans about-us-h2">{project.title}</a></h4>
                        <span className="fs-16  poppins">{project.subtitle}</span>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <section className="ourproject-padd position-relative">
            <div className="project-shape1"><img src="/Images/others/circle-2.png" alt="shape" /></div>
            <div className="project-shape2"><img src="/Images/others/bubble-2.png" alt="shape" /></div>
            <div className="project-shape3"><img src="/Images/others/bubble-1.png" alt="shape" /></div>
            <div className="container">
                <div className=" mb-15 dm-sans fs-20 rose-color fw-semibold">Our Project</div>
                <h2 className="dm-sans fs-64 mb-30">Some of our <br />finest work</h2>
                <div className="work-btn mb-55">
                    <button>All Works</button>
                    <button>Branding</button>
                    <button>Mobile</button>
                </div>
                <div className="row">
                    {projectDetail.map(displayProject)}
                </div>
            </div>

        </section>

    )
}

export default OurProject; 