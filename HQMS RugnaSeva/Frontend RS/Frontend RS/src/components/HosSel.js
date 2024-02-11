import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";

export function HosSel() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('abcd'));

    return (
      <div className="d-flex flex-row m-5 hosSel-pg">

      {/*ENT Card */}
     <Link className="" aria-current="page" to="/deptAvail?dept=ENT">
       <div className="m-2 card hosSel-pg-card" style={{ width: "18rem" }}>
         <img src="https://media.istockphoto.com/id/1488020234/photo/doctor-otolaryngologist-using-an-otoscope-in-a-patients-ear-at-medical-clinic.jpg?b=1&s=612x612&w=0&k=20&c=OEo3ahTMfah42FWSZr8j8tBVrlHW3HHEQ3xS_wt4ra8=" class="card-img-top" alt="..."/> 
           <div className="card-body">
             <p className="text-center card-text"> ENT </p>
           </div>  
       </div>
     </Link>

     {/*Cardiology Card  */}
     <Link className=" active" aria-current="page" to="/deptAvail?dept=Cardiology">
       <div className="m-2 card hosSel-pg-card" style={{ width: "18rem" }}>
         <img src="https://images.pexels.com/photos/8460126/pexels-photo-8460126.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
         <div className="card-body">
           <p className="text-center card-text"> Cardiology </p>
         </div>
       </div>
     </Link>

     {/*Neurology Card  */}
     <Link className=" active" aria-current="page" to="/deptAvail?dept=Neurology">
       <div className="m-2 card hosSel-pg-card" style={{ width: "18rem" }}>
         <img src="https://media.istockphoto.com/id/1180488192/photo/males-doctor-examining-brain-mr.jpg?b=1&s=612x612&w=0&k=20&c=rEV_TfLTw1Inwg-CrdcguzpRbBOFxJqlJBaZ_MtvH2c=" class="card-img-top" alt="..."/>
         <div className="card-body">
           <p className="text-center card-text"> Neurology</p>
         </div>
       </div>
     </Link>

     {/*Gynaecology Card  */}
     <Link className=" active" aria-current="page" to="/deptAvail?dept=Gynaecology">
       <div className="m-2 card hosSel-pg-card" style={{ width: "18rem" }}>
         <img src="https://images.pexels.com/photos/7088491/pexels-photo-7088491.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
         <div className="card-body">
           <p className="text-center card-text"> Gynaecology </p>
         </div>
       </div>
     </Link>
     
   </div>
    );
  }


export default HosSel;
