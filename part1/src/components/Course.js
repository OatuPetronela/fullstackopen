import React from "react";

const Course = ({courses})=>{
    return(
        <div>
        <ul><li>{courses.name + " " + courses.exercises}</li></ul>
        </div>
    ) 
}

export default Course