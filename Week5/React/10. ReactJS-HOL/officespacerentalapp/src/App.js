import officeImage from "./images/office.png";

function App() {

  const offices = [

    {
      name: "Skyline Office",
      rent: 55000,
      address: "Chennai"
    },

    {
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore"
    },

    {
      name: "Business Hub",
      rent: 45000,
      address: "Hyderabad"
    }

  ];

  return (

    <div style={{padding:"20px"}}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office"
        width="400"
      />

      <hr/>

      {

        offices.map((office,index)=>(

          <div
            key={index}
            style={{
              border:"1px solid gray",
              padding:"10px",
              margin:"10px"
            }}
          >

            <h2>{office.name}</h2>

            <p>Address : {office.address}</p>

            <p
              style={{
                color: office.rent < 60000 ? "red" : "green",
                fontWeight:"bold"
              }}
            >
              Rent : ₹{office.rent}
            </p>

          </div>

        ))

      }

    </div>

  );

}

export default App;