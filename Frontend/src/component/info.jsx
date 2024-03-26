import { useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './test.css';
import Footer from './footer';

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
    <p>Select RTO Office</p>
        <label>
          State:
          <input type="text" name="state" className="form-control rounded-0"
                            onChange={(e) => setStates(e.target.value)} />
        </label>

        <label>
          RTO Office:
          <input type="text" name="rtoOffice" className="form-control rounded-0"
                            onChange={(e) => setRtoOffice(e.target.value)} />
        </label>

        <label>
          Pin Code:
          <input type="text" name="pinCode" className="form-control rounded-0"
                            onChange={(e) => setPinCode(e.target.value)} />
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
                            onChange={(e) => setMobileNumber(e.target.value)} />
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
          Qualidication:
          <select name="qualidication" className="form-control rounded-0"
                            onChange={(e) => setGender(e.target.value)} >
            <option value="">Select</option>
            <option value="8th Passed">8th Passed</option>
            <option value="10+2 or Equivalent">10+2 or Equivalent</option>
            <option value="10th Standard or Equivalent
">10th Standard or Equivalent
</option>
            <option value="Below 8th
">Below 8th
</option>
            <option value="Diploma in any Discipline
">Diploma in any Discipline
</option>
            <option value="Doctrate in any Discipline
">Doctrate in any Discipline
</option>
            <option value="Graduate in Non Medical Sciences
">Graduate in Non Medical Sciences
</option>
            <option value="Graduate in any Medical Sciences
">Graduate in any Medical Sciences
</option>
            <option value="IM/Certificate Conse
">IM/Certificate Conse
</option>
            <option value="Illiterate
">Illiterate
</option>
            <option value="M.Phil in any Discipline
">M.Phil in any Discipline
</option>
            <option value="Post Graduate Diploma in any Discipline
">Post Graduate Diploma in any Discipline
</option>
            <option value="Post Graduate in Non Medical Sciences
">Post Graduate in Non Medical Sciences
</option>
            <option value="Post Graduate in any Medical Science">Post Graduate in any Medical Science</option>

          </select>
        </label>

        <label>
        Blood Group:
          <select name="bloodGroup" className="form-control rounded-0"
                            onChange={(e) => setGender(e.target.value)} >
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
          Current Address:
          <textarea name="Village" className="form-control rounded-0"
                            onChange={(e) => setCurrentAddress(e.target.value)} />
        </label>
        <label>
          Permanent Address:
          <textarea name="Address" className="form-control rounded-0"
                            onChange={(e) => setPermanentAddress(e.target.value)} />
        </label>

        <label>
          Pin Code:
          <input type="text" name="pinCode" className="form-control rounded-0"
                            onChange={(e) => setPinCode(e.target.value)} />
        </label>

        
        <button type="submit">Submit</button>
      </form>
      </main>

    <footer>
       <Footer></Footer>
    </footer>
    </div>
    
  );
};

export default Info;
