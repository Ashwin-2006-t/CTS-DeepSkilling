import React,{Component} from "react";

import Guest from "./Guest";
import User from "./User";

class App extends Component{

    constructor(){

        super();

        this.state={

            isLoggedIn:false

        };

    }

    login=()=>{

        this.setState({

            isLoggedIn:true

        });

    }

    logout=()=>{

        this.setState({

            isLoggedIn:false

        });

    }

    render(){

        let page;

        if(this.state.isLoggedIn){

            page=<User/>;

        }

        else{

            page=<Guest/>;

        }

        return(

            <div style={{padding:"20px"}}>

                <h1>Ticket Booking App</h1>

                {

                    this.state.isLoggedIn ?

                    <button onClick={this.logout}>

                        Logout

                    </button>

                    :

                    <button onClick={this.login}>

                        Login

                    </button>

                }

                <hr/>

                {page}

            </div>

        );

    }

}

export default App;