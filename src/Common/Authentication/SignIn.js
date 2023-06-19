import React, { useState } from 'react';
import whitelogo1 from "../../Assets/whitelogo1.svg";
import whitelogo2 from "../../Assets/whitelogo2.svg";
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { NavLink, useNavigate } from 'react-router-dom';
import "./auth.css"

function SignIn() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const navigate = useNavigate()

    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    // get input values
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value,
        });
    };

    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.email) errorsValue.email = "Email  is required";
        else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";
        if (!targets.password) {
            errorsValue.password = "Password is required"
        } else if (targets.password.length < 8) {
            errorsValue.password = "Password is not correct"
        }
        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };
    const [loading, setLoading] = useState(false)
    console.log("loading", loading)
    const handleSubmit = (ev) => {
        ev.preventDefault()
        let v = handleError(values);
        setLoading(true)
        console.log("LS", loading)
        if (v > 0) {
            console.log("error");
        }
        else {
            setTimeout(() => {
                localStorage.setItem('userDataToken', JSON.stringify(values));
                navigate('/dashboard')
            }, 2000);
            setLoading(false)

        }
    }
    return (
        <div className='auth'>
            <div className='left'>
                <img src={whitelogo1} alt="" />
                <img src={whitelogo2} alt="" />
            </div>

            <div className='right'>
                <div className='content'>
                    <div className='heading'>Welcome Back</div>
                    <div className='subheading'>Enter your email and password to sign in</div>

                    <div className='auth-form'>
                        <form onSubmit={handleSubmit}>
                            <div className='inputform'>
                                <label>Email</label>
                                <input type="email" placeholder='Your email address'
                                    value={values.email} name="email" onChange={handleChange}
                                />
                                {errors ? <p className='error'> {errors.email}</p> : ""}
                            </div>

                            <div className='inputform'>
                                <label>Password</label>
                                <div className="inner-addon left-addon">
                                    <input type={passwordShown ? "text" : "password"} placeholder="Your password" value={values.password} name="password" onChange={handleChange} />
                                    <AiOutlineEyeInvisible onClick={togglePassword} className="show-icon" />
                                </div>
                                {errors ? <p className='error'> {errors.password}</p> : ""}
                            </div>


                            {loading === true ? (
                                <div className='button ' style={{ paddingTop: "30px" }}>
                                    <button type="submit" className='disable'>SIGN IN </button>
                                </div>) :
                                (
                                    <div className='button ' style={{ paddingTop: "30px" }}>
                                        <button type="submit">SIGN IN</button>
                                    </div>
                                )
                            }



                            <div className='text'>Don't have an account?
                                <span><NavLink to="/register" className="navlink">Sign up</NavLink> </span></div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SignIn