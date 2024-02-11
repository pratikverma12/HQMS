import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewReg() {
  const { register, handleSubmit, errors, watch } = useForm();
  const navigate = useNavigate();

  const [state, setState] = useState({})  

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form data, e.g., check if passwords match
      if (state.password !== state.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      console.log(state);
      // Send registration data to the backend
      await axios.post("http://localhost:8091/api/v1/patient/save", {
        fname: state.fname,
        lname: state.lname,
        contact: state.contact,
        email: state.email,
        password: state.password,
      });

      // Redirect to the "/login" page upon successful registration
      navigate("/login");
      alert("Registration Successful");
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };

    return (
      <div className="newReg">
        <h2 className="p-5 justify-content-center align-items-center text-center">
          Patient Registration Form
        </h2>
        <form
          className="mx-auto col-10 col-md-8 col-lg-6 w-50 justify-content-center align-items-center"
          onSubmit={onSubmit}
        >
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              value={state.fname}
              onChange={(e)=>{
                setState(prev => ({...prev,fname:e.target.value}))
              }}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lname"
              name="lname"
              value={state.lname}
              onChange={(e)=>{
                setState(prev => ({...prev,lname:e.target.value}))
              }}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="contact"
              name="contact"
              value={state.contact}
              onChange={(e)=>{
                setState(prev => ({...prev,contact:e.target.value}))
              }}
              // pattern="[789][0-9]{9}"
              // title="Number must start with either 7, 8 or 9. And must contain only 10 digits."
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={state.email}
              onChange={(e)=>{
                setState(prev => ({...prev,email:e.target.value}))
              }}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Create Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={state.password}
              onChange={(e)=>{
                setState(prev => ({...prev,password:e.target.value}))
              }}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must contain at least one number and one uppercase and lowercase alphabet, and at least 6 or more characters"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Re-enter Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={state.confirmPassword}
              onChange={(e)=>{
                setState(prev => ({...prev,confirmPassword:e.target.value}))
              }}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary gradient-button">
              Register
          </button> 
         
        </form>
      </div>
    );
  }


export default NewReg;  