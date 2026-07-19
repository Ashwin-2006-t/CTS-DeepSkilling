import React, { Component } from "react";

class Cart extends Component {

    render() {

        return (

            <div>

                <h3>{this.props.itemName}</h3>

                <h4>Price : ₹ {this.props.price}</h4>

                <hr />

            </div>

        );

    }

}

export default Cart;