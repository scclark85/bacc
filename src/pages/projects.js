import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import Nav from "../components/Nav";
import Footer from "../components/Footer/index";

class Projects extends Component {
    render() {
        return (
            // Possible do a bootstrap carousel instead of boxes that click into

            <div className="container">
                <Nav />
                <br />

                <div style={{
                    textAlign: "center",
                    color: "white",
                    backgroundColor: "#333333"
                }}>
                    <h3>Our Work</h3>
                </div>

                <div className="projects">
                    <MDBContainer>
                        <MDBCarousel
                            activeItem={1}
                            length={8}
                            showControls={true}
                            showIndicators={true}
                            className="z-depth-1"
                        >
                            <MDBCarouselInner>

                                <MDBCarouselItem itemId="1">
                                    <MDBView>
                                        <img
                                            className="proj-1 d-block w-100"
                                            src="/images/proj-1.jpg"
                                            alt="First slide"
                                        />
                                        <MDBMask overlay="black-light" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">Before</h3>
                                        <p>Roof/Siding Replacement</p>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="2">
                                    <MDBView>
                                        <img
                                            className="proj-2 d-block w-100"
                                            src="/images/proj-2.jpg"
                                            alt="Second slide"
                                        />
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">After</h3>
                                        <p>Roof/Siding Replacement</p>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="3">
                                    <MDBView>
                                        <img
                                            className="proj-3 d-block w-100"
                                            src="/images/proj-3.jpg"
                                            alt="Third slide"
                                        />
                                        <MDBMask overlay="black-slight" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">Custom Deck with Gazebo</h3>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="4">
                                    <MDBView>
                                        <img
                                            className="proj-4 d-block w-100"
                                            src="/images/proj-4.jpg"
                                            alt="Fourth slide"
                                        />
                                        <MDBMask overlay="black-slight" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">Custom Deck with Gazebo</h3>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="5">
                                    <MDBView>
                                        <img
                                            className="proj-5 d-block w-100"
                                            src="/images/proj-5.jpg"
                                            alt="Fifth slide"
                                        />
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">Before</h3>
                                        <p>Kitchen Gut</p>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="6">
                                    <MDBView>
                                        <img
                                            className="proj-6 d-block w-100"
                                            src="/images/proj-6.jpg"
                                            alt="Second slide"
                                        />
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">After</h3>
                                        <p>Kitchen Gut</p>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="7">
                                    <MDBView>
                                        <img
                                            className="proj-7 d-block w-100"
                                            src="/images/proj-7.jpg"
                                            alt="Second slide"
                                        />
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">Before</h3>
                                        <p>Kitchen Gut</p>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>

                                <MDBCarouselItem itemId="8">
                                    <MDBView>
                                        <img
                                            className="proj-8 d-block w-100"
                                            src="/images/proj-8.jpg"
                                            alt="Second slide"
                                        />
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                        <h3 className="h3-responsive">After</h3>
                                        <p>Kitchen Gut</p>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>

                            </MDBCarouselInner>
                        </MDBCarousel>
                    </MDBContainer>
                </div>
                <br />

                <Footer />
            </div>

        )
    }
}

export default Projects
