function ListofPlayers() {

    const players = [

        { name: "Virat", score: 95 },

        { name: "Rohit", score: 88 },

        { name: "Gill", score: 75 },

        { name: "Rahul", score: 65 },

        { name: "Pant", score: 92 },

        { name: "Hardik", score: 60 },

        { name: "Jadeja", score: 55 },

        { name: "Bumrah", score: 72 },

        { name: "Shami", score: 68 },

        { name: "Siraj", score: 80 },

        { name: "Surya", score: 99 }

    ];

    const below70 = players.filter(player => player.score < 70);

    return (

        <div>

            <h1>All Players</h1>

            {

                players.map((player,index)=>

                    <p key={index}>

                        {player.name} - {player.score}

                    </p>

                )

            }

            <hr/>

            <h1>Players Below 70</h1>

            {

                below70.map((player,index)=>

                    <p key={index}>

                        {player.name} - {player.score}

                    </p>

                )

            }

        </div>

    );

}

export default ListofPlayers;