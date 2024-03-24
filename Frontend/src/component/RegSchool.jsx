import { useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './test.css';

const RegSchool = () => {
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
      <h2>Driving School Online Application</h2>
      <form onSubmit={handleSubmit}>

        <label>
          State:
          <input type="text" name="state" className="form-control rounded-0"
                            onChange={(e) => setStates(e.target.value)} />
        </label>

        <label>
        RTO Name:
          <input type="text" name="state" className="form-control rounded-0"
                            onChange={(e) => setStates(e.target.value)} />
        </label>

        <label>
        Pin Code:
          <input type="number" name="state" className="form-control rounded-0"
                            onChange={(e) => setStates(e.target.value)} />
        </label>

        <p>Is the Owner Having Driving License Number?</p>

        <p>Owner Details</p>

        <label>
        Owner Name:
          <input type="text" name="firstName" className="form-control rounded-0"
                            onChange={(e) => setFullName(e.target.value)} />
            <input type="text" name="middleName" className="form-control rounded-0"
                            onChange={(e) => setFullName(e.target.value)} />
            <input type="text" name="LastName" className="form-control rounded-0"
                            onChange={(e) => setFullName(e.target.value)} />                
        </label>

        <label>
        Relation ::
          <select name="relation" className="form-control rounded-0"
                            onChange={(e) => setGender(e.target.value)} >
            <option value="">Select</option>
            <option value="male">Father</option>
            <option value="female">Mother</option>
            <option value="">Husband</option>
            <option value="">Guardian</option>

          </select>
        </label>

        <label>
        Relation Name:
          <input type="text" name="firstName" className="form-control rounded-0"
                            onChange={(e) => setFullName(e.target.value)} />
            <input type="text" name="middleName" className="form-control rounded-0"
                            onChange={(e) => setFullName(e.target.value)} />
            <input type="text" name="LastName" className="form-control rounded-0"
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
          Birth Date:
          <input type="date" name="birthDate" className="form-control rounded-0"
                            onChange={(e) => setBirthDate(e.target.value)} />
        </label>

        <label>
          Age:
          <input type="text" name="mobileNumber" className="form-control rounded-0"
                            onChange={(e) => setMobileNumber(e.target.value)} />
        </label>
        <label>
          Mobile Number:
          <input type="text" name="emergencyNo" className="form-control rounded-0"
                            onChange={(e) => setEmergencyNo(e.target.value)} />
        </label>

        <label>
          Alt. Mobile Number:
          <input type="text" name="emergencyNo" className="form-control rounded-0"
                            onChange={(e) => setEmergencyNo(e.target.value)} />
        </label>

        <label>
        School Address:
          <textarea name="hospitalAddress" className="form-control rounded-0"
                            onChange={(e) => setHospitalAddress(e.target.value)} />
        </label>

        <label>
        Driving School Name :
          <textarea name="hospitalAddress" className="form-control rounded-0"
                            onChange={(e) => setHospitalAddress(e.target.value)} />
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

export default RegSchool;
