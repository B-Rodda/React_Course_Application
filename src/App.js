import React from "react";
import logo from './logo.svg';
import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import { Button, Container, Row, Col } from "reactstrap";
import Home from './Home/Home';
import Course from "./Components/Course";
import AllCourse from'./Components/Allcourses'
import AddCours from "./Components/AddCourse";
import Header from "./Components/Header";
import Menus from "./Components/Menus";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div >
        <Router>
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>
              <Routes>
              <Route path="/" Component={Home} exact />
            <Route path="/add-courses" Component={AddCours} exact />
            <Route path="/view-courses" Component={AllCourse} exact />
              </Routes>
           
            </Col>
          </Row>
        </Container>
        </Router>
    </div>
  );
}

export default App;
