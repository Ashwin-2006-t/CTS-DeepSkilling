import React, { Component } from "react";

class Register extends Component {

    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            password: "",
            errors: {}
        };
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });

    };

    handleSubmit = (event) => {

        event.preventDefault();

        let errors = {};

        // Name Validation
        if (this.state.name.length < 5) {
            errors.name = "Name should have atleast 5 characters";
        }

        // Email Validation
        if (
            !this.state.email.includes("@") ||
            !this.state.email.includes(".")
        ) {
            errors.email = "Enter a valid Email";
        }

        // Password Validation
        if (this.state.password.length < 8) {
            errors.password = "Password should have atleast 8 characters";
        }

        this.setState({ errors });

        if (Object.keys(errors).length === 0) {
            alert("Registration Successful");
        }

    };

    render() {

        return (

            <div style={{ margin: "30px" }}>

                <h2>Mail Registration Form</h2>

                <form onSubmit={this.handleSubmit}>

                    <label>Name</label><br />

                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />

                    <br />

                    <span style={{ color: "red" }}>
                        {this.state.errors.name}
                    </span>

                    <br /><br />

                    <label>Email</label><br />

                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <br />

                    <span style={{ color: "red" }}>
                        {this.state.errors.email}
                    </span>

                    <br /><br />

                    <label>Password</label><br />

                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <br />

                    <span style={{ color: "red" }}>
                        {this.state.errors.password}
                    </span>

                    <br /><br />

                    <button type="submit">
                        Register
                    </button>

                </form>

            </div>

        );

    }

}

export default Register;