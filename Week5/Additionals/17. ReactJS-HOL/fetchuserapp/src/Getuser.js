import React, { Component } from "react";

class Getuser extends Component {

    constructor() {
        super();

        this.state = {
            title: "",
            firstName: "",
            image: ""
        };
    }

    async componentDidMount() {

        const response = await fetch("https://api.randomuser.me/");

        const data = await response.json();

        const user = data.results[0];

        this.setState({
            title: user.name.title,
            firstName: user.name.first,
            image: user.picture.large
        });

    }

    render() {

        return (

            <div style={{ textAlign: "center" }}>

                <h2>Random User Details</h2>

                <img
                    src={this.state.image}
                    alt="User"
                />

                <h3>
                    {this.state.title} {this.state.firstName}
                </h3>

            </div>

        );
    }

}

export default Getuser;