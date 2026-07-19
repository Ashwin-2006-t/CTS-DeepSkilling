import React, { Component } from "react";

class ComplaintRegister extends Component {

    constructor() {

        super();

        this.state = {

            employeeName: "",
            complaint: ""

        };

    }

    handleChange = (event) => {

        this.setState({

            [event.target.name]: event.target.value

        });

    };

    handleSubmit = (event) => {

        event.preventDefault();

        const referenceNo = Math.floor(Math.random() * 100000);

        alert(
            "Complaint Submitted Successfully!\n\n" +
            "Reference Number : " + referenceNo
        );

    };

    render() {

        return (

            <div style={{ margin: "30px" }}>

                <h2>Ticket Raising Application</h2>

                <form onSubmit={this.handleSubmit}>

                    <label>Employee Name</label>

                    <br /><br />

                    <input
                        type="text"
                        name="employeeName"
                        value={this.state.employeeName}
                        onChange={this.handleChange}
                    />

                    <br /><br />

                    <label>Complaint</label>

                    <br /><br />

                    <textarea

                        rows="5"

                        cols="40"

                        name="complaint"

                        value={this.state.complaint}

                        onChange={this.handleChange}

                    />

                    <br /><br />

                    <button type="submit">

                        Submit Complaint

                    </button>

                </form>

            </div>

        );

    }

}

export default ComplaintRegister;