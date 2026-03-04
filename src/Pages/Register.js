import React, { useState } from 'react'
import '../Styles/Register.css'
import {  Link, useNavigate } from 'react-router-dom';

export default function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    function myfunc(e) {
        e.preventDefault();

        let newErrors = {};

        if (!firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email format";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        setErrors(newErrors);

        let oldInfo=JSON.parse(localStorage.getItem("userInfo")) || [];

        let userInfo={
            firstName,
            lastName,
            email,
            password
        }

        oldInfo.push(userInfo);

        localStorage.setItem("userInfo",JSON.stringify(oldInfo));

       
        navigate("/login");
    
    }
    return (
        <>
            <div className="container-fluid full-height ">
                <div className="row h-100 setcolor">

                    {/* LEFT SIDE */}
                    <div className="col-xl-6 d-none d-xl-block d-flex flex-column justify-content-center text-white left-panel p-5 mt-5">

                        <h1 className="mb-4 fw-bold">
                            Expert level Cybersecurity <br />
                            in <span className="highlight">hours</span> not weeks.
                        </h1>

                        <h6 className="mt-4 mb-3">What's included</h6>

                        <ul className="feature-list">
                            <li> <i className="bi bi-check-lg"></i> Effortlessly spider and map targets to uncover hidden security flaws</li>
                            <li><i className="bi bi-check-lg"></i> Deliver high-quality, validated findings in hours, not weeks.</li>
                            <li> <i className="bi bi-check-lg"></i>Generate professional, enterprise-grade security reports automatically.</li>
                        </ul>

                        <div className="trustpilot mt-4">
                            <div className="d-flex align-items-center gap-2">
                                <i className="fa-solid fa-star"></i>
                                <span className="fw-semibold">Trustpilot</span>
                            </div>

                            <div className="rating-text">
                                Rated <span className="fw-bold">4.5/5.0</span>
                                <span className="reviews">(100k+ reviews)</span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-xl-6 col-12 d-flex justify-content-center align-items-center">
                        <div className="login-card p-5">
                            <h3 className="text-center mb-4 text-white">Sign up</h3>
                            <p className='ps-3 text-white'>Already have an account? <Link to="/login" className="text-white">Log in</Link></p>

                            <input
                                className="form-control mb-3"
                                placeholder="First name*"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && <div className="text-danger">{errors.firstName}</div>}

                            <input
                                className="form-control mb-3"
                                placeholder="Last name*"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.lastName && <div className="text-danger">{errors.lastName}</div>}

                            <input
                                className="form-control mb-3"
                                placeholder="Email address*"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className="text-danger mb-3">{errors.email}</div>}

                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Password (8+ characters)*"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                            <div className="form-check mb-3">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label small">
                                    I agree to Terms & Conditions
                                </label>
                            </div>

                            <button className="btn btn-teal w-100" onClick={myfunc}>
                                Create account
                            </button>

                            <div className="social-icons">


                                <div className="F-con apple-icon">
                                    <i className="fa-brands fa-apple"></i>
                                </div>


                                <div className="F-con google-icon">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 48 48"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.8 32.4 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 5 29.3 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.3-.4-3.5z" />
                                        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 5 29.3 3 24 3 16 3 9 7.5 6.3 14.7z" />
                                        <path fill="#4CAF50" d="M24 45c5.2 0 9.9-2 13.5-5.3l-6.2-5.2C29.3 35 26.8 36 24 36c-5.2 0-9.6-3.5-11.2-8.2l-6.6 5.1C9 40.5 16 45 24 45z" />
                                        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 3-3.2 5.5-6 7.2l6.2 5.2C39.9 36.8 45 30.9 45 24c0-1.2-.1-2.3-.4-3.5z" />
                                    </svg>
                                </div>

                                {/* Meta */}
                                <div className="F-con meta-icon">
                                    <i className="fa-brands fa-meta"></i>
                                </div>

                            </div>
                        </div>


                       
                    </div>

                </div>
            </div>
        </>
    )
}