import { useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './test.css';

const Info = () => {
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
    const [currentAddress,setCurrentAddress ] = useState()
    const [permanentAddress,setPermanentAddress ] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3002/info',{states, district, subdistrict, rtoOffice, firstName, middleName, lastName, mobileNumber, emergencyNo, gender, birthDate, birthPlace, currentAddress, permanentAddress})
        .then(result => {console.log(result)
        navigate('/Login')
        })
        .catch(err=> console.log(err))
    }

  return (
    <div id="body">
    <header>
        <h1>Parivahan Mitra</h1>
    </header>
        <main>
      <h2>Learning License Registration Form</h2>
      <form onSubmit={handleSubmit}>

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
          RTO Office:
          <input type="text" name="rtoOffice" className="form-control rounded-0"
                            onChange={(e) => setRtoOffice(e.target.value)} />
        </label>
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
          Birth Place:
          <input type="text" name="birthPlace" className="form-control rounded-0"
                            onChange={(e) => setBirthPlace(e.target.value)} />
        </label>
        <label>
          Current Address:
          <textarea name="currentAddress" className="form-control rounded-0"
                            onChange={(e) => setCurrentAddress(e.target.value)} />
        </label>
        <label>
          Permanent Address:
          <textarea name="permanentAddress" className="form-control rounded-0"
                            onChange={(e) => setPermanentAddress(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      </main>

    <footer>
        &copy; 2024 Your Web Page
    </footer>
    </div>
    
  );
};

export default Info;
