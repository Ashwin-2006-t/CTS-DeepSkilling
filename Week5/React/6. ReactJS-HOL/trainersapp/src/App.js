import "./App.css";

import {

    BrowserRouter,

    Routes,

    Route,

    Link,

    Navigate

} from "react-router-dom";

import Home from "./Components/Home";

import TrainerList from "./Components/TrainerList";

import TrainerDetails from "./Components/TrainerDetails";

function App() {

    return (

        <BrowserRouter>

            <div>

                <h1>Trainer Management Portal</h1>

                <nav>

                    <Link to="/">Home</Link>

                    {" | "}

                    <Link to="/trainers">Trainers</Link>

                </nav>

                <hr />

                <Routes>

                    <Route

                        path="/"

                        element={<Navigate to="/home" />}

                    />

                    <Route

                        path="/home"

                        element={<Home />}

                    />

                    <Route

                        path="/trainers"

                        element={<TrainerList />}

                    />

                    <Route

                        path="/trainers/:id"

                        element={<TrainerDetails />}

                    />

                </Routes>

            </div>

        </BrowserRouter>

    );

}

export default App;