import { useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import React from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';


function DLDetails() {
    const [states,setStates ] = useState()
    const [district,setDistrict ] = useState()
    const [subdistrict,setSubdistrict ] = useState()
    const [rtoOffice,setRtoOffice ] = useState()
    const [firstName,setFirstName ] = useState()
    const [middleName,setMiddleName ] = useState()
    const [lastName,setLastName ] = useState()
    const [mobileNumber,setMobileNumber ] = useState()
    const [emergencyNo,setEmergencyNo ] = useState()
    const [gender,setGender ] = useState()
    const [birthDate,setBirthDate ] = useState()
    const [birthPlace,setBirthPlace ] = useState()
    const [village,setVillage ] = useState()
    const [address,setAddress ] = useState()
    const [aadharNumber,setAadharNumber ] = useState()
    const [qualification,setQualification ] = useState()
    const [bloodGroup,setBloodGroup ] = useState()
    const [duration,setDuration ] = useState()

    
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
      
       // For radio buttons
      interests: [] // For checkboxes
    });


    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      const updatedInterests = checked
        ? [...formData.interests, name]
        : formData.interests.filter(interest => interest !== name);
      setFormData({ ...formData, interests: updatedInterests });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3002/info',{states, duration, bloodGroup, qualification, aadharNumber, district, subdistrict, rtoOffice, firstName, middleName, lastName, mobileNumber, emergencyNo, gender, birthDate, birthPlace, village, address, formData})
        .then(result => {console.log(result)
        navigate('/dlTestSlot')
        setFormData({
          interests: []
        });
        })
        .catch(err=> console.log(err))
    }

  return (
    <div id="body">
    <Header></Header>
        <main>
      <h2>Driving License Registration Form</h2>
      <form onSubmit={handleSubmit}>
    <p>Select RTO Office</p>
        <label>
          State:
          <input type="text" name="state" className="form-control rounded-0"
                            onChange={(e) => setStates(e.target.value)} required/>
        </label>

        <label>
          RTO Office:
          <input type="text" name="rtoOffice" className="form-control rounded-0"
                            onChange={(e) => setRtoOffice(e.target.value)} required/>
        </label>

        <label>
          Pin Code:
          <input type="text" name="pinCode" className="form-control rounded-0"
                            onChange={(e) => setPinCode(e.target.value)} required/>
        </label>

    <p>Personal Details</p>
        <p>Name of Applicant</p>
        <label>
          First Name:
          <input type="text" name="firstName" className="form-control rounded-0"
                            onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Middle Name:
          <input type="text" name="middleName" className="form-control rounded-0"
                            onChange={(e) => setMiddleName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" className="form-control rounded-0"
                            onChange={(e) => setLastName(e.target.value)} />
        </label>

        <label>
          Aadhar Number:
          <input type="text" name="aadharNumber" className="form-control rounded-0"
                            onChange={(e) => setAadharNumber(e.target.value)} required/>
        </label>

        <label>
          Gender:
          <select name="gender" className="form-control rounded-0"
                            onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        
        <label>
          Birth Date:
          <input type="date" name="birthDate" className="form-control rounded-0"
                            onChange={(e) => setBirthDate(e.target.value)} required/>
        </label>
       
        <label>
        Blood Group:
          <select name="bloodGroup" className="form-control rounded-0"
                            onChange={(e) => setBloodGroup(e.target.value)} >
        <option value="">Select</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
          </select>
        </label>

        <label>
          Mobile Number:
          <input type="text" name="mobileNumber" className="form-control rounded-0"
                            onChange={(e) => setMobileNumber(e.target.value)} />
        </label>
        <label>
          Emergency Mobile Number:
          <input type="text" name="emergencyNo" className="form-control rounded-0"
                            onChange={(e) => setEmergencyNo(e.target.value)} />
        </label>

      <p>Address</p>

      <label>
          State:
          <input type="text" name="state" className="form-control rounded-0"
                            onChange={(e) => setStates(e.target.value)} />
        </label>

        <label>
          District:
          <input type="text" name="district" className="form-control rounded-0"
                            onChange={(e) => setDistrict(e.target.value)} />
        </label>

        <label>
          Sub District:
          <input type="text" name="subDistrict" className="form-control rounded-0"
                            onChange={(e) => setSubdistrict(e.target.value)} />
        </label>

        <label>
        Village:
          <textarea name="village" className="form-control rounded-0"
                            onChange={(e) => setVillage(e.target.value)} />
        </label>
        <label>
          Address:
          <textarea name="address" className="form-control rounded-0"
                            onChange={(e) => setAddress(e.target.value)} />
        </label>

        <label>
          Pin Code:
          <input type="text" name="pinCode" className="form-control rounded-0"
                            onChange={(e) => setPinCode(e.target.value)} />
        </label>

        <label>
          Duration of Stay at present Address 
          <input type="text" name="duration" className="form-control rounded-0"
                            onChange={(e) => setDuration(e.target.value)} />
        </label><br />

        <div>
          <label>Select Class of Vehicle</label><br />
          <label>
            <input
              type="checkbox"
              name="MCWOG"
              checked={formData.interests.includes('MCWOG')}
              onChange={handleCheckboxChange}
              required/>
            MCWOG M.C W/o Gear
          </label><br />
          <label>
            <input
              type="checkbox"
              name="MCWG"
              checked={formData.interests.includes('MCWG')}
              onChange={handleCheckboxChange}
            />
            MCWG M.C With Gear
          </label><br />
          <label>
            <input
              type="checkbox"
              name="LMV"
              checked={formData.interests.includes('LMV')}
              onChange={handleCheckboxChange}
            />
            LMV LMV-NT-Car
          </label><br />
          <label>
            <input
              type="checkbox"
              name="3W-NT"
              checked={formData.interests.includes('3W-NT')}
              onChange={handleCheckboxChange}
            />
            3W-NT LMV-3 WheelerNT
          </label><br />
          <label>
            <input
              type="checkbox"
              name="TRCTOR"
              checked={formData.interests.includes('TRCTOR')}
              onChange={handleCheckboxChange}
            />
            TRCTOR LMV-Tractor
          </label><br />
          <label>
            <input
              type="checkbox"
              name="LMV-TR"
              checked={formData.interests.includes('LMV-TR')}
              onChange={handleCheckboxChange}
            />
            LMV-TR LMV-Transport
          </label><br />
          <label>
            <input
              type="checkbox"
              name="3W-TR"
              checked={formData.interests.includes('3W-TR')}
              onChange={handleCheckboxChange}
            />
            3W-TR LMV-3 WheelerTR
          </label><br />
          <label>
            <input
              type="checkbox"
              name="TRANS"
              checked={formData.interests.includes('TRANS')}
              onChange={handleCheckboxChange}
            />
            TRANS Transport
          </label><br />
          <label>
            <input
              type="checkbox"
              name="INVCRG"
              checked={formData.interests.includes('INVCRG')}
              onChange={handleCheckboxChange}
            />
            INVCRG Inv Carriage
          </label><br />
          <label>
            <input
              type="checkbox"
              name="RDRLR"
              checked={formData.interests.includes('RDRLR')}
              onChange={handleCheckboxChange}
            />
            RDRLR Road Roller
          </label><br />
          <label>
            <input
              type="checkbox"
              name="LMV-TT"
              checked={formData.interests.includes('LMV-TT')}
              onChange={handleCheckboxChange}
            />
            LMV-TT LMV-TractorTri
          </label><br />
          <label>
            <input
              type="checkbox"
              name="OTHVEH"
              checked={formData.interests.includes('OTHVEH')}
              onChange={handleCheckboxChange}
            />
            OTHVEH Others
          </label>
                  </div>

        <button type="submit">Submit</button>
      </form>
      </main>

    <footer>
       <Footer></Footer>
    </footer>
    </div>
    
  );
};

export default DLDetails;
