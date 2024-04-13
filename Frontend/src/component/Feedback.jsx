import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './feedback.css';
import Footer from './footer';
import Header from './header';

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobno: '',
    state: '',
    rto: '',
    licencetype: '',
    feedback: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3005/feedback', formData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          mobno: '',
          state: '',
          rto: '',
          licencetype: '',
          feedback: ''
        });
      })
      .catch(error => console.error('Error submitting form:', error));
  };

  return (
    <div id="body">
    <Header></Header>
    <main>
    <section class="content">
      <h2>Feedback Form</h2>
      </section>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Mobile No.</label>
          <input
            type="text"
            name="mobno"
            value={formData.mobno}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>State:</label>
          <select name="state" value={formData.state} onChange={handleInputChange}>
            <option value="">-- Select --</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div>
          <label>RTO:</label>
          <input
            type="text"
            name="rto"
            value={formData.rto}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Licence Type:</label>
          <select name="licencetype" value={formData.licencetype} onChange={handleInputChange}>
            <option value="">-- Select --</option>
            <option value="Learner's License">Learner's License</option>
            <option value="Driving Licence">Driving Licence</option>
            
          </select>
        </div>
        <div>
          <label>Feedback :</label>
          <input
            type="text"
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
            required
          />
        </div><br /><br />
        
        <button type="submit">Submit   </button>      <Link to="/home"  >
    <button>Home</button> 
    </Link> 
      </form>
      
     
   
    </main>

    <footer>
       <Footer></Footer>
    </footer>
    </div>
  );
}

export default Feedback;
