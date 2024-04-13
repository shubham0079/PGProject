import { useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function LLTestSlot() {
    const [name,setName ] = useState()
    const [phone,setPhone ] = useState()
    const [date,setDate ] = useState()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        time: ''// For radio buttons
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3006/slot',{name, phone, date, formData})
        .then(result => {console.log(result)
            setFormData({
                time: ''
              });
        navigate('/home')
        
        })
        .catch(err=> console.log(err))
    }

return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2><b>LL Test Appointment</b></h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text"
                            placeholder="Enter Your Name"
                            autoComplete="off" 
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Phone No</strong>
                        </label>
                        <input type="tel"
                            placeholder="Enter Your Phone No"
                            autoComplete="off"
                            name="phone"
                            className="form-control rounded-0"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Date</strong>
                        </label>
                        <input type="date"
                            
                            name="date"
                            className="form-control rounded-0"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

        <div>
          <label>Time :</label>
          <label>
            <input
              type="radio"
              name="time"
              value="10 To 12"
              checked={formData.time === '10 To 12'}
              onChange={handleInputChange}
              required
            />
            10 To 12
          </label>
          <label>
            <input
              type="radio"
              name="time"
              value="12 To 2"
              checked={formData.time === '12 To 2'}
              onChange={handleInputChange}
              required
            />
            12 To 2
          </label>


        <label>
            <input
              type="radio"
              name="time"
              value="02 To 04"
              checked={formData.time === '02 To 04'}
              onChange={handleInputChange}
              required
            />
            02 To 04
          </label>
        </div>

<button type="submit" className="btn btn-success w-100 rounded-0">
Book Slot

</button>
</form>

</div>
</div>
);
}

export default LLTestSlot;
