import React, { Component } from 'react';
import { Button } from 'reactstrap';
import "./style.css"

class Home extends Component {
    state = {
        backImg: ''
    }

    randomImg = () => {
        var randomNumber = Math.floor(Math.random() * 3) + 1;
        var imgName = "img_" + randomNumber + ".jpg";
        this.setState({ backImg: "url(/images/" + imgName + ")" });
        console.log(this.state.backImg);
    };
    componentDidMount() {
        this.randomImg();
    }

    enterSite = event => {
        console.log(this.state.title);
        event.preventDefault();
        this.props.history.push("/about");
    };

    render() {
        return (
            <header
                className="main"
                id="home"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: this.state.backImg
                }}
                onLoad={this.randomImg}
            >
                <img
                    src="/images/BACC_logo.png"
                    className="logo"
                    alt="bacc-logo"
                />
                <div className="headline">
                    <div className="row">

                        Call today for your FREE HOME INSPECTION.

                    </div>
                </div>

                <div className="row" id="home-phone">
                    <a href="tel: (815)715-8244">
                        (815)715-8244
                        </a>

                </div>

                <Button
                    type="submit"
                    className="main-btn btn-primary btn-lg"
                    onClick={this.enterSite}
                    id="main-button"
                >
                    Click Here For More Info
                    </Button>

            </header>
        )
    }
}
export default Home