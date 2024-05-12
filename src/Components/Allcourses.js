import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import toast from "toastify"


const Allcourse=()=>{

    useEffect(() =>{
        document.title="Allcourse"
    }, []);


    const getAllCoursesFromServer = () => {

        axios.get(`${base_url}/courses`).then(
                (response)=>{
                    //success
                    // console.log(response)
                    console.log(response.data)
                    toast.success("course has been loaded",);
                    setCourses(response.data)
                    
                },
                (error)=>{
                    // for error
                    console.log(error)
                    toast.error("somthing went worng")
                }
        )
    };

    // calling server function

    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);

    const [courses, setCourses]=useState([]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=> c.id != id));
    };

    return(
        <div>
            <h1>All Course</h1>
            <p>List of courses are as follows</p>
            {
                courses.length >0? courses.map((item)=> <Course key={item.id} course={item} update={updateCourses} />) : "No course"
            }
        </div>

    )
}

export default Allcourse;