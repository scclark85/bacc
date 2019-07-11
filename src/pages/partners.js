import React, { Component } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer/index";

class Partners extends Component {
    render() {
        return (
            <div className="container">
                <Nav />
                <br />

                <div style={{
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#333333"
                }}>
                    <h3>BACCs Business Partners</h3>
                </div>
                <br />


                <div className="row">
                    <div className="col-6">
                        <a href={
                            "https://www.richards-supply.com/"
                        }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="partner-1 d-block w-100"
                                src="/images/richards_logo.jpg"
                                alt="part 1"
                            />
                        </a>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="col-5">
                        <a href={
                            "https://www.rbscorp.com/products/siding/exterior-portfolio/"
                        }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="partner-2 d-block w-100"
                                src="/images/ep_logo.jpg"
                                alt="part 2"
                            />
                        </a>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <a href={
                                "https://www.iko.com/"
                            }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="partner-3 d-block w-100"
                                    src="/images/iko.jpg"
                                    alt="part 3"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
export default Partners