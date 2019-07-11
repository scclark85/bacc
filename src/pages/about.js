import React, { Component } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

class About extends Component {
    render() {
        return (
            <div className="container">
                <Nav />
                <br />

                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron"
                            style={{
                                color: "white",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundImage: "url(/images/abimg.jpg",
                                margin: 0
                            }}
                        >
                            <br />

                            <h1>
                                <b><div style={{
                                    textAlign: "center",
                                }}>
                                    Let us first inspect and evaluate your home for FREE!
                        </div></b>
                            </h1>
                            <br />

                            <b><p>Many homeowners don't know they have damage.  With no obiligation...we will put your home through our proven "process" to evaluate it for signs of sufficient storm damage.  Our HAAG certified managers have an extremely high approval rate among all of the insurance company adjusters.  Let BACC get your home appoved by your insurance, next we will restore your home by replacing it with a new warrantied exterior.  With no "out-of-pocket" expenses, except for your deductible, you can be assured you are making the right decision with BACC Restoration.</p></b>

                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="about col-8">

                        <div style={{
                            textAlign: "center",
                            color: "white",
                            backgroundColor: "#333333"
                        }}>
                            <h3>About Us:</h3>
                        </div>


                        <b><p>- We are licensed, bonded, and insured.</p></b>

                        <b><p>- We are a "Local Contractor" with 25 years of experience in Illinois and Wisconsin.</p></b>

                        <b><p>- Comes with 5 year labor warranty.</p></b>

                        <b><p>- All work will be done with your insurance companies approval and proceeds.</p></b>

                        <b><p>- After your sign up for FREE evaluation, you will have several days to call our reference list.</p></b>


                    </div>

                    <div className="col-3">

                        <img
                            className="haag-icon"
                            src="/images/haag.png"
                            alt="roof_logo"
                        />

                    </div>
                </div>
                <br />


                <div className="row">
                    <div className="services col-6">
                        <div style={{
                            textAlign: "center",
                            color: "white",
                            backgroundColor: "#333333"
                        }}>
                            <h3>
                                Services Available:
                        </h3>
                        </div>

                        <div style={{
                            textAlign: "center"
                        }}>
                            <h5> Now Servicing Southeast WI / Northeast IL</h5>
                        </div>


                        <b><p>- Full kitchen and bath remodels.</p></b>

                        <b><p>- Flooring including hardwood and tiling.</p></b>

                        <b><p>- Roofing, siding, gutters, windows, and door replacements.</p></b>

                        <b><p>- Specializing in insurance work.</p></b>

                    </div>

                    <div className="col-3">

                        <img
                            className="BACC-logo2"
                            src="/images/bacc-logo2.png"
                            alt="BACC-logo2"
                        />

                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron"
                            style={{
                                height: 250,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundImage: "url(/images/bestquality.jpg",
                                color: "white",
                                textAlign: "center"
                            }}>

                            <b><h3>
                                <div>
                                    We use only quality "brand name" products
                            </div>
                            </h3></b>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div
                            className="questions"
                        >
                            <h3>
                                <div style={{
                                    textAlign: "center",
                                    color: "white",
                                    backgroundColor: "#333333"
                                }}>
                                    Frequently Asked Questions
                                </div>
                            </h3>

                            <b><p>Q: Will my insurance rates go up?</p></b>

                            <p><b>A:</b> Storm or weather damages are considered an Act of God.  <b>Your carrier cannot raise your rates as a result of your storm related claim.</b>  Premiums are adjusted annually based on the averages of all claims in the area, state, or nationwide.</p>
                            <br />

                            <b><p>Q: How can I afford to relace my siding or roof?</p></b>

                            <p><b>A:</b> Upon a free home inspection of your property, we'll determine if your home has sufficient strom damage to quality for repairs by your insurance.  <b>BACC's work is based off of insurance approval, if we are not able to get you approved, the homeowner is not responsible for any of our time invested.</b></p>
                            <br />

                            <b><p>Q: What if I don't have the time to meet with my insurance or handle such an involved claim process?</p></b>

                            <p><b>A:</b> After your free evaluation, BACC can handle every detail from start of free eval to completion of your new and improved home's exterior.  From meeting with the adjuster and obtaining approval, checking measurements, working to ensure coverage of all sides, to paying for and applying for permits, and managing the claim paperwork with the insurance.  We are a full service restoration company with skilled siding, roofing, and gutter crews.</p>

                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
export default About

