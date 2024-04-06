import { useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from "./header";

const RegSchool = () => {
  const [formData, setFormData] = useState({
    state: '',
    rtoname: '',
    pincode: '',
    firstName: '',
    middleName: '',
    lastName: '',
    relation : '',
    relationfirstName: '',
    relationmiddleName: '',
    relationlastName: '',
    gender: '',
    birthDate: '',
    age: '',
    mobno: '',
    altmobno: '',
    address: '',
    dsname: ''
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3004/regschool', formData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Clear the form after successful submission
        setFormData({
          state: '',
          rtoname: '',
          pincode: '',
         firstName: '',
          middleName: '',
          lastName: '',
          relation : '',
          relationfirstName: '',
          relationmiddleName: '',
          relationlastName: '',
          gender: '',
          birthDate: '',
          age: '',
          mobno: '',
          altmobno: '',
          address: '',
          dsname: ''
        });
      })
      .catch(error => console.error('Error submitting form:', error));
  };

  return (
    <div id="body">
    <Header></Header>
        <main>
      <h2>Driving School Online Application</h2>
      <form onSubmit={handleSubmit}>

        <label>
          State:
          <input type="text" name="state" className="form-control rounded-0"
                            value={formData.state}
                            onChange={handleInputChange}
                            required />
        </label>

        <label>
        RTO Name:
          <input type="text" name="rtoname" className="form-control rounded-0"
                            value={formData.rtoname}
                            onChange={handleInputChange}
                            required  />
        </label>

        <label>
        Pin Code:
          <input type="number" name="pincode" className="form-control rounded-0"
                            value={formData.pincode}
                            onChange={handleInputChange}
                            required />
        </label>

        <p>Is the Owner Having Driving License Number?</p>

        <p>Owner Details</p>

        <label>
        Owner Name:
          <input type="text" name="firstName" className="form-control rounded-0"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required />
            <input type="text" name="middleName" className="form-control rounded-0"
                            value={formData.middleName}
                            onChange={handleInputChange}
                            required />
            <input type="text" name="lastName" className="form-control rounded-0"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required />                
        </label><br />

        <label>
        Relation ::
          <select name="relation" className="form-control rounded-0"
                            value={formData.relation}
                            onChange={handleInputChange}
                            required >
            <option value="">Select</option>
            <option value="male">Father</option>
            <option value="female">Mother</option>
            <option value="">Husband</option>
            <option value="">Guardian</option>

          </select>
        </label>

        <label>
        Relation Name:
          <input type="text" name="relationfirstName" className="form-control rounded-0"
                            value={formData.relationfirstName}
                            onChange={handleInputChange}
                            required />
            <input type="text" name="relationmiddleName" className="form-control rounded-0"
                            value={formData.relationmiddleName}
                            onChange={handleInputChange}
                            required />
            <input type="text" name="relationlastName" className="form-control rounded-0"
                            value={formData.relationlastName}
                            onChange={handleInputChange}
                            required />                
        </label>

        <label>
          Gender:
          <select name="gender" className="form-control rounded-0"
                            value={formData.gender}
                            onChange={handleInputChange}
                            required  >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Birth Date:
          <input type="date" name="birthDate" className="form-control rounded-0"
                            value={formData.birthDate}
                            onChange={handleInputChange}
                            required  />
        </label>

        <label>
          Age:
          <input type="text" name="age" className="form-control rounded-0"
                            value={formData.age}
                            onChange={handleInputChange}
                            required  />
        </label>
        <label>
          Mobile Number:
          <input type="text" name="mobno" className="form-control rounded-0"
                            value={formData.mobno}
                            onChange={handleInputChange}
                            required />
        </label>

        <label>
          Alt. Mobile Number:
          <input type="text" name="altmobno" className="form-control rounded-0"
                            value={formData.altmobno}
                            onChange={handleInputChange}
                            required />
        </label>

        <label>
        Driving School Address:
          <textarea name="address" className="form-control rounded-0"
                            value={formData.address}
                            onChange={handleInputChange}
                            required />
        </label>

        <label>
        Driving School Name :
          <textarea name="dsname" className="form-control rounded-0"
                            value={formData.dsname}
                            onChange={handleInputChange}
                            required />
        </label>
        

        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </form>
      </main>

    <footer>
       <Footer></Footer>
    </footer>
    </div>
    
  );
};

export default RegSchool;
