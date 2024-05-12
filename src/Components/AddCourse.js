import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label, Toast} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import success from "reactstrap";

const AddCours=() => {
    useEffect(()=>{
        document.title="Addcourses"
    },[]);

    const [course,setCourses]=useState({});
    //form handle function
    const handeForm = (e) =>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{

                console.log(response)
                console.log("success")
                setCourses({id:"",title:"",description:""})
              
            },(error)=>{
                console.log(error);
                console.log("error")
               
            }
        )
    }

    return(
        
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form onSubmit={handeForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId" onChange={(e)=>{
                            setCourses({...course, id: e.target.value})
                    }} />
                </FormGroup>

                <FormGroup>
                    <label for="title" >Course title</label>
                    <Input type="text" placeholder="Enter Title here" id="title" onChange={(e)=>{
                        setCourses({...course, title: e.target.value})
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter Description Here" id="description" style={{height:150}} onChange={(e)=>{
                        setCourses({...course, description: e.target.value})
                    }} />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success" style={{ marginRight: '10px' }}>AddCours</Button>
                    <Button color="warning "  type="reset" onClick={()=>{
                        setCourses({id:"",title:"",description:""})
                    }} >Clear</Button>
                </Container>

            </Form>
        </Fragment>
    )
}

export default AddCours;