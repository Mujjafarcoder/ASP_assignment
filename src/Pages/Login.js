import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Register.css'


export default function Login() {

    let navigate = useNavigate();

    let [data, setData] = useState([]);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [errors, setErrors] = useState("");

    useEffect(() => {
        let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
        console.log(userInfo);
        setData(userInfo);
    }, [])

    function myfunc() {

        const user = data.find(
            (item) => item.email === email && item.password === password
        );

        if (user) {
            navigate("/dashboard");
        } else {
            setErrors("Invalid email or password");
        }

    }




    return (
        <>
            <div className='Container-fluid vh-100 d-flex justify-content-center align-items-center setcolor'>
                <div className="login-card p-5">
                    <h3 className="text-center mb-4 text-white">Login</h3>
                    <input className='form-control mb-3' id='mail' placeholder='Email' type="email" onChange={(e) => setEmail(e.target.value)} />
                    <input className='form-control mb-3' id='pass' placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className='btn btn-teal w-100' onClick={myfunc}>Login</button>
                    {errors && <p className='text-danger'>{errors}</p>}
                    <p className='ps-3 mt-3 text-white'>Don't have an account? <Link to="/" className="text-white">Sign up</Link></p>
                </div>
            </div>
        </>
    )
}
