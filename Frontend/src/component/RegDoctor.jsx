import { useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './test.css';

const RegDoctor = () => {
    const [states,setStates ] = useState()
    const [fullName,setFullName ] = useState()
    const [mobileNumber,setMobileNumber ] = useState()
    const [emergencyNo,setEmergencyNo ] = useState()
    const [gender,setGender ] = useState()
    const [hospitalName,setHospitalName ] = useState()
    const [regNo,setRegNo ] = useState()
    const [specialzation,setSpecialzation ] = useState()
    const [location,setLocation ] = useState()
    const [city,setCity ] = useState()
    const [pinCode,setPinCode ] = useState()
    const [hospitalAddress,setHospitalAddress ] = useState()
    const [nationality,setNationality ] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3003/regdoctor',{states, mobileNumber, emergencyNo, gender, fullName, hospitalName, regNo, specialzation, location, city, pinCode, hospitalAddress, nationality})
        .then(result => {console.log(result)
        navigate('/finddoctor')
        })
        .catch(err=> console.log(err))
    }

  return (
    <div id="body">
    <header>
        <h1>Parivahan Mitra</h1>
    </header>
        <main>
      <h2>Register Docter</h2>
      <form onSubmit={handleSubmit}>

        <label>
          State:
          <input type="text" name="state" className="form-control rounded-0"
                            onChange={(e) => setStates(e.target.value)} />
        </label>
        <label>
          Full Name:
          <input type="text" name="fullName" className="form-control rounded-0"
                            onChange={(e) => setFullName(e.target.value)} />
        </label>

        <label>
          Gender:
          <select name="gender" className="form-control rounded-0"
                            onChange={(e) => setGender(e.target.value)} >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
        Hospital Name:
          <input type="text" name="hospitalName" className="form-control rounded-0"
                            onChange={(e) => setHospitalName(e.target.value)} />
        </label>
        <label>
          Medical Concil Reg No:
          <input type="text" name="regNo" className="form-control rounded-0"
                            onChange={(e) => setRegNo(e.target.value)} />
        </label>
        <label>
        Specialzation:
          <select name="specialzation" className="form-control rounded-0"
                            onChange={(e) => setSpecialzation(e.target.value)} >
            <option value="">Select</option>
            <option value="General Medical">General Medical</option>
            <option value="Optithal">Optithal</option>
            <option value="other">Other</option>
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

        <label>
          Located At:
          <select name="location" className="form-control rounded-0"
                            onChange={(e) => setLocation(e.target.value)} >
            <option value="">Select RTO Office</option>
            <option value="General Medical">General Medical</option>
            <option value="Optithal">Optithal</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          City:
          <input type="text" name="city" className="form-control rounded-0"
                            onChange={(e) => setCity(e.target.value)} />
        </label>
        <label>
          Pin Code:
          <input type="text" name="pinCode" className="form-control rounded-0"
                            onChange={(e) => setPinCode(e.target.value)} />
        </label>

        <label>
          Hospital Address:
          <textarea name="hospitalAddress" className="form-control rounded-0"
                            onChange={(e) => setHospitalAddress(e.target.value)} />
        </label>

        <label>
        Nationality At:
          <select name="nationality" className="form-control rounded-0"
                            onChange={(e) => setNationality(e.target.value)} >
            <option value="">Select</option>
            <option value="indian">Indian</option>
            <option value="other">Other</option>
          </select>
        </label>

        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </form>
      </main>

    <footer>
        &copy; 2024 Your Web Page
    </footer>
    </div>
    
  );
};

export default RegDoctor;
