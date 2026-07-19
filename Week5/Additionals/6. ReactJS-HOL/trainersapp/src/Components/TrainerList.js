import TrainersMock from "../TrainersMock";
import { Link } from "react-router-dom";

function TrainerList() {

    return (

        <div>

            <h2>Trainer List</h2>

            <ul>

                {
                    TrainersMock.map((trainer) => (

                        <li key={trainer.trainerId}>

                            <Link to={`/trainers/${trainer.trainerId}`}>

                                {trainer.name}

                            </Link>

                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default TrainerList;