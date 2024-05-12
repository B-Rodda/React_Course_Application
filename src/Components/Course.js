import axios from "axios";
import React from "react";
import Toast from "toastify";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from 'reactstrap';
import base_url from "../api/bootapi";

const Course =({course, update})=>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                Toast.success("Course Deleted")
                update(id);
            }, (error)=>{
                Toast.error("Course not deleted !! server");
            }
        )
    }
    return(
        <Card className="text-center " style={{background:''}}>
            <CardBody >
                <CardSubtitle style={{ fontWeight: 'bold' }} >{course.title}</CardSubtitle>
                <CardText >{course.discription}</CardText>
                <Container className="text-center" >
                    <Button color="danger ml-3" outline style={{ marginRight: '10px' }} onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning " outline>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )

}

export default Course;

