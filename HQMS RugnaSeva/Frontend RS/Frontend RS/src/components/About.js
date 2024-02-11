import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


class About extends Component {
  render() {

    const frontimages =[
      "https://images.pexels.com/photos/18760715/pexels-photo-18760715/free-photo-of-headimg.jpeg",
      "https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];

    const images = [
    // "https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.unsplash.com/photo-1697391060546-f5d3cd5aac7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1697393260365-f19f275d8201?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1842&q=80",
      "https://images.unsplash.com/photo-1697391794789-0bc0a851d72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2002&q=80"
    ];


    const cards = [
      {
        image: images[0],
        description: "REGISTER / LOGIN",
        footer: "Create an account or sign in to your existing account.",
        step: "Step 1"
      },
      {
        image: images[1],
        description: "BOOK APPOINTMENT",
        footer: "Schedule a appointment to meet with a professional.",
        step: "Step 2"
      },
      {
        image: images[2],
        description: "DOWNLOAD RECEIPT",
        footer:"Download your receipt with the token number and visit the hospital at your scheduled appointment. ",
        step: "Step 3"
      }
    ];
    return (
      <div className="App ">
        <div className="carousel-img">
        <Carousel>
          {frontimages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt="Slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        </div>

        <div className="appointment">
          <h1 className="appointment_heading">Get Appointment in 3 easy Steps</h1>
        </div>

        <div className="cards-container">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
          {/* <div className="arrow"></div>
          <div className="arrow"></div> */}
        </div>

        <div className="about_us">
          <h1 className="about_us_heading">About Us</h1>
          <p className="about_us_paragraph">
          Lorem ipsum dolor sit amet, illud zril definitiones no ius, eam at sententiae repudiandae. 
          Primis petentium et vel, aperiam voluptaria his te, mei clita labores et. Sed ad veniam quidam aperiam. 
          Quot fastidii mandamus ei sed, possim oblique ius in. Argumentum temporibus te vis.
          An animal constituto his, mel ex amet pericula omittantur. Sea numquam tacimates in. No quo unum veritus. 
          Pri in minim tation accommodare. Choro voluptua electram at sea, ei sit alii posse.
          </p>
        </div>


        <div className="aboutpg-buttons">
          <Link className="fs-5" to=""><button className="gradient-button">Home</button></Link> 
          <Link className="fs-5" to="/newReg"><button className="gradient-button">Register</button></Link> 
          <Link className="fs-5" to="/login"><button className="gradient-button">Login</button></Link> 
          <Link className="fs-5" to="/contactUs"><button className="gradient-button">Contact Us</button></Link> 
        </div>
      </div>
    );
  }
}



const Card = ({ image, description, footer, step }) => {
  return (
    <div className="card1">
      <div className="card-container">
      <div class="card-heading-about">{step}</div>
      <img className="card-img-top" src={image} alt={description} />
      <div className="card-body card-body-about">
        <p className="card-text-about">{description}</p>
  </div>

      <div className="card-footer">
      <p>{footer}</p>
    {/* <a href="#" className="btn btn-primary next">Next</a> */}
    {/* <span className="arrow"></span> */}
  </div>
      </div>
    </div>
  );
};


export default About;
