import React, {useState} from 'react';
import {useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';



export default function ShowD() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Get the values from the query parameters
  const patientName = searchParams.get('name');
  const gender = searchParams.get('gender');
  const age = searchParams.get('age');
  const symptoms = searchParams.get('symptoms');
  const hospital = searchParams.get('hname');
  const department = searchParams.get('dept');
  const time = searchParams.get('time');
  const date = searchParams.get('date');
  

  // Ref for the content to be captured as an image
  const contentRef = useRef();

  // Function to capture and download as an image
  const captureAndDownloadImage = () => {
    // Hide the button before capturing
    const button = document.querySelector('.download-button');
    button.style.display = 'none';

    html2canvas(contentRef.current).then(canvas => {
      // Show the button again after capturing
      button.style.display = 'block';

      // Convert the canvas to a data URL
      const imageDataURL = canvas.toDataURL('image/png');

      // Create a temporary link element to trigger the download
      const a = document.createElement('a');
      a.href = imageDataURL;
      a.download = 'appointment_slip.png'; // Set the filename for the downloaded image

      // Trigger the download
      a.click();
    });
  };

  return (
    
    <div className="bat">
      <div className="row justify-content-center  ">
        <div className="col-md-6 ">
          <div className="card shadow m-5 second-div">
            <div className="card-body"  ref={contentRef}>
              
              <h2 className="card-title text-center" >PATIENT DETAILS</h2>
                <ul>
                  <li><p><strong>Patient Name:</strong> {patientName}</p></li>
                  <li><p><strong>Gender:</strong> {gender}</p></li>
                  <li><p><strong>Age:</strong> {age}</p></li>
                  <li><p><strong>Symptoms:</strong> {symptoms}</p></li>
                  {/* <li><p><strong>Hospital:</strong> {hospital}</p></li> */}
                  <li><p><strong>Department:</strong> {department}</p></li>
                  <li><p><strong>Time:</strong> {time}</p></li>
                  <li><p><strong>Date:</strong> {date}</p></li>
                  <li><p><strong>Token:</strong> {department}-09</p></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-content-center align-items-center  text-center">
      <button className="btn btn-primary download-button gradient-button" onClick={captureAndDownloadImage}>
        <b> Print Receipt </b>
      </button>


<br></br>
      <Link

      to="/login"
      > <button className='m-3 btn btn-primary gradient-button'>
      <b> LogOut </b>
      </button>
      </Link>

      </div>
    </div>
  );
}