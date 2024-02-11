import React from 'react';

class ContactUs extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      name: '', // Initialize with empty strings
      email: '',
      subject: '',
      message: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = this.state;

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  // Update the state properties as the user types
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };





  render() {

    return (
      <div className="contact-us-page">
  <div className=".contact-us-container">
    <div className="row">
      <div className="col-sm-6">
        <img src="https://maktoobmedia.com/wp-content/uploads/2021/12/istockphoto-1271752802-170667a-1.jpeg" alt="Contact Us" class="contact-us-image" />
      </div>
      <div className="col-sm-6">
        <div className='contact-us-content'>
        <h1 className="contact-us-title">Contact Us</h1>
        <p className="contact-us-description">
          We'd love to hear from you! Please feel free to contact us with any questions, comments, or feedback you may have<br/>
          <br/>
          <b>Email: rugnaseva@email-example.com <br/>
          Toll Free Number: 1800 XXXX YYYY</b> <br/>

        </p>
        <form className="contact-us-form" onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" onChange={this.handleChange}/>
          <input type="email" name="email" placeholder="Your Email" onChange={this.handleChange}/>
          <input type="text" name="subject" placeholder="Subject" onChange={this.handleChange}/>
          <textarea name="message" placeholder="Your Message" onChange={this.handleChange}></textarea>
          <button type="submit">Send</button>
        </form>
        </div>
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default ContactUs;
