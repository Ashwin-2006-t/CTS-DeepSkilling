import "./../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const average = (props.goal / props.total) * 100;

    return (

        <div className="box">

            <h1>Student Score Card</h1>

            <h3>Name : {props.name}</h3>

            <h3>School : {props.school}</h3>

            <h3>Total Marks : {props.total}</h3>

            <h3>Goal : {props.goal}</h3>

            <h2>Average : {average}%</h2>

        </div>

    );

}

export default CalculateScore;