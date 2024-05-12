import React from "react";
import { Link,  } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

let myBoolean = true;

const Menus=()=>{
    return(
        <ListGroup>
            <Link  className="list-group-item list-group-item-action" tag="a" to="/" action={myBoolean.toString()}>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-courses" action={myBoolean.toString()}>
                Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action={myBoolean.toString()}>
                View Courses
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action={myBoolean.toString()}>
                About us
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action={myBoolean.toString()}>
                Content
            </Link>
        </ListGroup>

    );
}

export default Menus;
