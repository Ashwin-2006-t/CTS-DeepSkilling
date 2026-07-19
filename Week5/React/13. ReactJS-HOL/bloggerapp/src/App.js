import React from "react";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App(){

    const showBooks=true;

    const showBlogs=true;

    const showCourses=true;

    // Element Variable

    let courseComponent=null;

    if(showCourses){

        courseComponent=<CourseDetails/>;

    }

    return(

        <div style={{padding:"20px"}}>

            <h1>Blogger App</h1>

            {/* Method 1 : if-else */}

            {

                showBooks ?

                <BookDetails/>

                :

                <h3>No Books Available</h3>

            }

            <hr/>

            {/* Method 2 : Logical AND */}

            {

                showBlogs &&

                <BlogDetails/>

            }

            <hr/>

            {/* Method 3 : Element Variable */}

            {courseComponent}

        </div>

    );

}

export default App;