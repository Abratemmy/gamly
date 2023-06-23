import React, { useState } from 'react';
import validator from 'validator';
import pointGreen from "../../../Assets/pointGreen.svg";
import pointYellow from "../../../Assets/pointYellow.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineEyeInvisible } from "react-icons/ai"

function EditAdminPage({ setopenForm }) {
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
    const handleAddAdmin = (e) => {
        e.preventDefault()
        let v = handleError(values);
        if (v > 0) {
            console.log("error");
        }
        else {
            alert("submitted successfully")
            clearAdmin();
            console.log("values", values)
        }
    }
    return (
        <div>
            <div className='heading'>
                <div className='text'>Edit Admin</div>
                <button onClick={() => setopenForm(false)}>X</button>
            </div>

            <form onSubmit={handleAddAdmin} className='formInput'>
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
                        name="email" placeholder="Enter member email" value={values.email} onChange={handleChange}
                    />
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
                                        <span className='yellow'><img src={pointYellow} alt="" /> Users</span>
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
                        <AiOutlineEyeInvisible onClick={togglePassword} className="show-icon" />
                    </div>

                    {errors ? <span className='error'> {errors.password}</span> : ""}
                </div>

                <div className='submitButton'>
                    <button onClick={() => setopenForm(false)}>Cancel</button>
                    <button type="submit">Edit Admin</button>
                </div>

            </form>
        </div>

    )
}

export default EditAdminPage