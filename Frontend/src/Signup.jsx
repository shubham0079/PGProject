import { useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name,setName ] = useState()
    const [phone,setPhone ] = useState()
    const [password,setPassword ] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name, phone, password})
        .then(result => {console.log(result)
        navigate('/Login')
        })
        .catch(err=> console.log(err))
    }

return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Register</h2>
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
                            <strong>Password</strong>
                        </label>
                        <input type="password"
                            placeholder="Enter Your Password"
name="password"
className="form-control rounded-0"
onChange={(e) => setPassword(e.target.value)}
/>
</div>
<button type="submit" className="btn btn-success w-100 rounded-0">

Register

</button>
</form>
<p>Already Have an Account?</p>

<Link to="/Login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
Login

</Link>


</div>
</div>
);
}

export default Signup;
