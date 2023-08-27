import "./App.css";
import NavBar from "./component/navbar";
import Services from "./component/services";
import AboutUs from "./component/AboutUs";
import OurProject from "./component/ourproject";
import Feature from "./component/feature";
import Testimonial from "./component/testimonial";
import Plans from "./component/plans";
import TopCLients from "./component/topcleints";
import EstimateProject from "./component/estimateproject";
import Footer from "./component/footer";
function App() {
    return (
        <main>
            <NavBar/>
            <Services/>
            <AboutUs/>
            <OurProject/>
            <Feature/>  
            <Testimonial/>
            <Plans/>
            <TopCLients/>
            <EstimateProject/>
            <Footer/>            
        </main> 
    );
}

export default App;
