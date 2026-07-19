import React, { Component } from "react";

import Cart from "./Cart";

class OnlineShopping extends Component {

    constructor() {

        super();

        this.items = [

            {
                itemName: "Laptop",
                price: 65000
            },

            {
                itemName: "Mouse",
                price: 800
            },

            {
                itemName: "Keyboard",
                price: 1500
            },

            {
                itemName: "Monitor",
                price: 12000
            },

            {
                itemName: "Headphones",
                price: 2500
            }

        ];

    }

    render() {

        return (

            <div>

                <h1>Shopping Cart</h1>

                {

                    this.items.map((item, index) => (

                        <Cart

                            key={index}

                            itemName={item.itemName}

                            price={item.price}

                        />

                    ))

                }

            </div>

        );

    }

}

export default OnlineShopping;