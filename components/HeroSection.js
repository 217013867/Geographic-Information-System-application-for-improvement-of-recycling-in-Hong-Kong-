import {Button} from "reactstrap";

/**
 * For rendering frontend component - Hero
 * @returns {JSX.Element}
 */
const HeroSection = () => {

    return (
        <section className="hero-section" id="hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 hero-text-image">
                        <div className="row">
                            <div className="col-lg-8 text-center text-lg-start">
                                <h1 data-aos="fade-right">Protect Your Earth with Recycling</h1>
                                <p className="mb-5" data-aos="fade-right" data-aos-delay="100">Find Recycling Station
                                    Learn
                                    Recycling</p>
                            </div>
                            <div className="col-lg-4 iphone-wrap">
                                <img src="/image/earth.jpg" alt="Image" className="phone-1" data-aos="fade-right"/>
                                <img src="/image/logo.jpg" alt="Image" className="phone-2" data-aos="fade-right"
                                     data-aos-delay="200"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection