import React, { useState } from 'react';
import validator from 'validator';
import pointGreen from "../../../Assets/pointGreen.svg";
import pointYellow from "../../../Assets/pointYellow.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { createADMIN } from '../../../Components/REDUX/ACTION/adminAction';
import { FailedMessage, SuccessMessage } from '../../../Components/Message/Message';
import cancelImg from "../../../Assets/cancel.svg";
import Passwordeye from "../../../Assets/passwordEye.svg"

function AddAdminPage({ setAddAdminForm }) {
    const dispatch = useDispatch();

    const [selectRoleActive, setSelectRoleActive] = useState(false)
    const [roleSelected, setRoleSelected] = useState("Select role")
    const roleData = ["Super Admin", "Sub Admin", "Admin"]

    // access
    const [selectAccessActive, setSelectAccessActive] = useState(false)
    const [accessSelected, setaccessSelected] = useState("Both")
    const accessData = ["Both", "Users", "Creators"]

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const [checks, setChecks] = useState({
        emailCheck: false
    });
    const [pwdRequiste, setPWDRquisite] = useState(false);
    const handleOnBlur = () => {
        setPWDRquisite(true);
    };
    const handleOnKeyUp = (e) => {
        const { value } = e.target;
        const emailCheck = /\S+@\S+\.\S+/.test(value);
        setChecks({
            emailCheck
        });
    };

    // validation for edit form
    const [errors, setErrors] = useState({});

    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.title) errorsValue.title = "Please enter admin name";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";
        if (!targets.password) {
            errorsValue.password = "Password is required"
        }
        else if (!validator.isStrongPassword(targets.password, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1
        })) errorsValue.password = "Password must contain a minimum of 8 characters and must be Alphanumeric"

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };
    const initialValue = {
        title: "",
        password: "",
        email: "",
        access: "",
        role: roleSelected
    }
    const [values, setValues] = useState(initialValue);

    const clearAdmin = () => setValues(initialValue)
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value
        });
    };

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const handleAddAdmin = (e) => {
        e.preventDefault()
        let v = handleError(values);
        if (v > 0) {
            console.log("error");
        }
        else {
            setLoading(true)
            dispatch(createADMIN(values, setLoading, setSuccess, setFailure, clearAdmin, setAddAdminForm));
            console.log("submitted")
        }
    }
    return (
        <div>
            <div className='heading'>
                <div className='text'>Add Admin</div>
                <button onClick={() => setAddAdminForm(false)}>
                    <img src={cancelImg} alt="" />
                </button>
            </div>

            <form onSubmit={handleAddAdmin} className='formWrapper'>
                <div className='formInput'>
                    <div className='inputfield'>
                        <label>Name</label>
                        <input type="text"
                            name="title" placeholder='Enter full name' value={values.title} onChange={handleChange}
                        />
                        {errors ? <span className='error'> {errors.title}</span> : ""}
                    </div>

                    <div className='inputfield'>
                        <label>Email</label>
                        <input type="email"
                            name="email" placeholder="Enter member email" value={values.email}
                            onChange={handleChange}
                            onKeyUp={handleOnKeyUp}
                            onBlur={handleOnBlur}
                            autocomplete="off"
                        />
                        {pwdRequiste ? <>
                            {checks.emailCheck ? <div className='valid'>email Id correct</div> : <div className='invalid'> email Id wrong</div>}
                        </> : null}

                        {errors ? <span className='error'> {errors.email}</span> : ""}
                    </div>

                    <div className='inputfield'>
                        <label>Role</label>
                        <div className='selectDropdown'>
                            <div className='dropdown-btn' onChange={handleChange} onClick={() => setSelectRoleActive(!selectRoleActive)}>
                                {roleSelected} <span><MdOutlineKeyboardArrowDown className='icon' /></span>
                            </div>
                            {selectRoleActive && (
                                <div className='dropdown-content'>
                                    {roleData?.map((option) => (
                                        <div className="dropdown-item"
                                            onClick={(e) => {
                                                setRoleSelected(option);
                                                setSelectRoleActive(false)
                                            }}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>

                    <div className='inputfield'>
                        <label>Access</label>
                        <div className='selectDropdown'>
                            <div className='dropdown-btn' onChange={handleChange} onClick={() => setSelectAccessActive(!selectAccessActive)}>
                                {accessSelected === "Both" ? <div className="">
                                    <span className='green'><img src={pointGreen} alt="" /> Users</span>
                                    <span className='yellow'><img src={pointYellow} alt="" /> Creators</span>
                                </div>
                                    : accessSelected === "Users" ? <div className=''>
                                        <span className='green'><img src={pointGreen} alt="" /> Users</span>
                                    </div>
                                        : <div>
                                            <span className='yellow'><img src={pointYellow} alt="" /> Creators</span>
                                        </div>
                                }
                                <span><MdOutlineKeyboardArrowDown className='icon' /></span>
                            </div>
                            {selectAccessActive && (
                                <div className='dropdown-content'>
                                    {accessData?.map((option) => (
                                        <div className="dropdown-item"
                                            onClick={(e) => {
                                                setaccessSelected(option);
                                                setSelectAccessActive(false)
                                            }}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>

                    <div className='inputfield'>
                        <label>Password</label>

                        <div className="inner-addon left-addon">
                            <input type={passwordShown ? "text" : "password"} placeholder="Password" value={values.password} name="password" onChange={handleChange} />
                            <img src={Passwordeye} alt="" onClick={togglePassword} className="show-icon" />
                        </div>

                        {errors ? <span className='error'> {errors.password}</span> : ""}
                    </div>
                </div>
                <div className='submitButton'>
                    <button onClick={() => setAddAdminForm(false)}>Cancel</button>
                    {loading ? <>
                        <button type="submit buttondisabled" style={{ pointerEvents: "none", background: "#bb272f" }}>Adding Admin...</button>
                    </> :
                        <>
                            <button type="submit">Add Admin</button>
                        </>}


                </div>

            </form>

            {success && (
                <SuccessMessage message="Admin added successfully" handleClose={() => setSuccess(false)} />
            )}

            {failure && (
                <FailedMessage message="Admin could not be added" handleClose={() => setFailure(false)} />

            )}
        </div>

    )
}

export default AddAdminPage