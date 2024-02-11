import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import NewReg from "./components/NewReg";
import HosSel from "./components/HosSel";
import Patient from "./components/Patient";
import DeptAvail from "./components/DeptAvail";
import Display from "./components/ShowD";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestComponent from "./components/TestComponent";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<About />}></Route>
            <Route exact path="/newReg" element={<NewReg />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/hosSel" element={<HosSel />}></Route>
            <Route exact path="/Patient" element={<Patient />}></Route>
            <Route exact path="/deptAvail" element={<DeptAvail />}></Route>
            <Route exact path="/testComponent/:test_id" element={<TestComponent />}></Route>
            <Route exact path="/display" element={<Display />}></Route>
            <Route exact path="/contactUs" element={<ContactUs />}></Route>
          </Routes>
        </Router>
        {<Footer/>}
        {/* <Login /> */}
        {/* <NewReg /> */}
      </>
    );
  }
}

// function App() {
//   return <>

//   </>;
// }

// export default App;
