function IndianPlayers() {

    const team = [

        "Virat",

        "Rohit",

        "Gill",

        "Rahul",

        "Pant",

        "Hardik"

    ];

    const [

        odd1,

        even1,

        odd2,

        even2,

        odd3,

        even3

    ] = team;

    const t20Players = [

        "Virat",

        "Rohit",

        "Surya"

    ];

    const ranjiPlayers = [

        "Jaiswal",

        "Sarfaraz",

        "Rinku"

    ];

    const mergedPlayers = [

        ...t20Players,

        ...ranjiPlayers

    ];

    return (

        <div>

            <h1>Odd Team Players</h1>

            <p>{odd1}</p>

            <p>{odd2}</p>

            <p>{odd3}</p>

            <hr/>

            <h1>Even Team Players</h1>

            <p>{even1}</p>

            <p>{even2}</p>

            <p>{even3}</p>

            <hr/>

            <h1>Merged Players</h1>

            {

                mergedPlayers.map((player,index)=>

                    <p key={index}>{player}</p>

                )

            }

        </div>

    );

}

export default IndianPlayers;