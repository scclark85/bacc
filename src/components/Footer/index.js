import React from "react";
// import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./style.css"

const Footer = () => {
    return (

        <footer className="footer footer-fixed-bottom">
            <div className="container">
                <br />
                <div className="row justify-content-center">
                    <h5>Contact Us Today!</h5>
                </div>

                <div className="footer-text row justify-content-center">
                    <div className="f-phone col-3">
                        <p className="footer-phone">Phone: <a href="tel:(815)715-8244"> (815)715-8244 </a> </p>
                    </div>

                    <div className="f-email">
                        <p>Email: <a className="footer-email" href="mailto:briansimon73@gmail.com"> briansimon73@gmail.com </a> </p>
                    </div>
                </div>

                <div className="footer-copyright row justify-content-center">
                    <p>&copy; {new Date().getFullYear()} Copyright: <a className="footer-site" href="baccrestoration.com"> baccrestoration.com </a></p>
                </div>
                <br />

            </div>
        </footer>

    );
}
export default Footer