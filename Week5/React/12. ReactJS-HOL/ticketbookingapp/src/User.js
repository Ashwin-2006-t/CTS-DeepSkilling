import FlightDetails from "./FlightDetails";

function User() {

    return (

        <div>

            <h1>Welcome User</h1>

            <p>You can browse and book tickets.</p>

            <FlightDetails/>

            <br/>

            <button>

                Book Ticket

            </button>

        </div>

    );

}

export default User;