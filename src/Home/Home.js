import React, { useEffect } from "react";
import { Jumbotron } from "bootstrap";
import { Button } from "reactstrap";



const Home=()=>{

    useEffect(() =>{
      document.title="Home"
    }, []);
    return(
        <div className="text-center " >
        <h2 className="">Welcome to Courses Application</h2>
        <p className="lead">Our platform offers a variety of courses designed to cater to diverse interests and skill levels. From beginner-friendly introductions to advanced, specialized topics, our courses are crafted by experts to ensure a rewarding learning experience. Whether you're looking to boost your career or pursue a personal interest, there's a course for you. Join us and start learning today!</p>
        
        <p></p>
        <p className="lead">
          <Button color="info" outline>More</Button>
        </p>
      </div>

    )
}

export default Home;