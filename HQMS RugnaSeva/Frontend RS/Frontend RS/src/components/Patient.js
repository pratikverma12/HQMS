import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Patient() {
  const navigate = useNavigate();
  const location = useLocation();  


  const today = new Date().toISOString().split('T')[0]; // Get today's date in the format "YYYY-MM-DD"

  // Parse query parameters from the URL
  const searchParams = new URLSearchParams(location.search);

  const [state, setstate] = useState({
    name: "",
    gender: "",
    age: "",
    symptoms: "",
    time: "",
    date: "",
    hospital: "",
    department: "",   
    id: "2",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

    // Build the query parameters string
    const queryParams = new URLSearchParams();
    for (const key in state) {
      queryParams.append(key, state[key]);
    }

    const hospital = searchParams.get("hname");
    const department = searchParams.get("dept");
    queryParams.append("hname", hospital);
    queryParams.append("dept", department);

    const onSubmit = async (e) => {
      e.preventDefault();



      try {

        console.log(state);
      // Make an API POST request to save patient data
      await axios.post("http://localhost:8091/api/v1/patient/appointment", 
      
      {
        name: state.name,
        gender: state.gender,
        age: state.age,
        symptoms: state.symptoms,
        time: state.time,
        date: state.date,
        hospital: searchParams.get("hname"),
        department: searchParams.get("dept"),
        id: state.id,
      });

      // Navigate to a success page or do any necessary actions upon successful submission
      navigate(`/display?${queryParams.toString()}`);
      alert("Appointment Successful");
    } catch (error) {
      // Handle API request errors here
      console.error("Error submitting patient data:", error.message);
    }
  };

  
  return (
    <div className="patient">
    <div className="p-5">
      <h2 className="justify-content-center align-items-center text-center">
        Patient Details
      </h2>
      <br />
      <form
        className="mx-auto col-10 col-md-8 col-lg-6 w-50 justify-content-center align-items-center"
        onSubmit={onSubmit}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <h5> Patient Name: </h5>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={state.name}
            onChange={handleInputChange}
            required  
          />
        </div> <br/>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label gender1">
            <h5> Gender: </h5>
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio1"
                value="Male"
                onChange={handleInputChange}
                checked={state.gender === "Male"}
              />
              <label className="form-check-label" for="inlineRadio1">
                <h5> Male</h5>
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio2"
                value="Female"
                onChange={handleInputChange}
                checked={state.gender === "Female"}
              />
              <label className="form-check-label" for="inlineRadio2">
              <h5> Female</h5>
              </label>
            </div> <br/> <br/>

            
            {/* AGE */}
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
              <h5> Age: </h5>
              </label>
              <input
                type="number"
                class="form-control input"
                id="age"
                name="age"
                // aria-describedby="emailHelp"
                onChange={handleInputChange}
                value={state.age}
                required
              />
            </div>

            <div>
              <label for="exampleInputEmail1" class="p-2 form-label">
              <h5> Selected Department: </h5> 
              <input name="dept" value={searchParams.get("dept")}   disabled/> 

              </label> <br/>
            </div>
            <div>
              <label for="exampleInputEmail1" class="p-2 form-label">
                <h5>
                  Selected Hospital: </h5> 
                  <input name="hname" value={searchParams.get("hname")} disabled />
              </label>            
            </div> 

            <div>
              <label for="exampleInputEmail1" class="m-2 form-label">
              <h5> Symptoms: </h5>
              </label>
              <div class="form-floating">
                <textarea
                  class="form-control input"
                  placeholder=""
                  id="symptoms"
                  name="symptoms"
                  style={{ height: "80px" }}
                  onChange={handleInputChange}
                  value={state.symptoms}
                  required
                ></textarea>
                <label for="floatingTextarea2"></label>
              </div>
            </div>
          </div>
          <div>
            <label className="form-check-label" for="inlineRadio2">
              <h5> Time: </h5>
            </label>
            <div class="w-50 cs-form">
              <input
              type="time"
              class="form-control"
              id="time"
              name="time"
              onChange={handleInputChange}
              value={state.time}
              required
               />
            </div>
          </div> <br/>


          <div className="mb-3">
            <label htmlFor="datePicker" className="form-label">
             <h5> Select a Date: </h5>
            </label>
            <input
            type="date"
            className="form-control"
            id="datePicker"
            name="date"
            onChange={handleInputChange}
            value={state.date}
            min={today}
            required
            />
          </div>


          <Link className="spbu" aria-current="page" to="/deptAvail">
            <button className="gradient-button">
            <b>Back</b>
            </button>
          </Link>

          <button type="submit" class="m-3 btn btn-primary gradient-button">
           <b>Submit</b> 
          </button>
        </form>
        
      </div>
      </div>
    );
  }


export default Patient;
