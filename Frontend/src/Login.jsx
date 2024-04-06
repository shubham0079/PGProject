import { useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
    const [phone,setPhone ] = useState()
    const [password,setPassword ] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{phone, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/state')
            }
        })
        .catch(err=> console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" 
        style={{
            backgroundImage: `url('/public/photo/pexels-pixabay-210182.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100vh', // Adjust as needed
          }}>
        <div className="bg-white p-3 rounded w-25">
        <h2><b>Login</b></h2>
        

        <form onSubmit={handleSubmit}>
            <div className="mb-3">

            <label htmlFor="email">
            <strong>Phone No</strong>
            </label>
            <input
                type="tel"
                placeholder="Enter Your Number"
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
            <input
                type="password"
                placeholder="Confirm Password"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>

<button type="submit" className="btn btn-success w-100 rounded-0">

Login

</button>
</form>
<p>Dont't have an Accont?</p>

<Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
Sign UP

</Link>


</div>
</div>
);
}

export default Login;
