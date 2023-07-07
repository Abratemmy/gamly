import React, { useState } from 'react';
import backarrow from '../../../../Assets/backNav.svg'

function CreatePrize({ backButton }) {
    const initialValue = {
        commission: "",
        prizeDistribution: "",
        prizeDistributionName: "",
        prizeDistributionType: "",
        firstPrize: '',
        secondPrize: '',
        thirdPrize: '',
    }
    const [values, setValues] = useState(initialValue);

    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value
        });
    };
    const [active, setActive] = useState(null);
    console.log("time", active)
    const handleClick = (event) => {
        setActive(event.target.id);
        console.log(event.target.id)

    }
    return (
        <div className='creatPrize'>
            <div className='top'>
                <div className='name'>Create new prize distribution</div>
                <button onClick={backButton} >
                    <img src={backarrow} alt='' />
                    <span>Back</span>
                </button>
            </div>

            <form className='formWrapper'>
                <div className='formContainer'>
                    <div className="wrapper">
                        <div className='inputform'>
                            <label>commision</label>
                            <input type="text" placeholder='Enter the your commision in percentage'
                                name="commission" value={values.commission} handleChange={handleChange}
                            />
                        </div>

                        <div className='inputform'>
                            <label>Prize Distribution Name</label>
                            <input type="text" placeholder='Enter Total Number Participants'
                                name="prizeDistributionName" value={values.prizeDistributionName} handleChange={handleChange}
                            />
                        </div>

                        <div className='inputform'>
                            <label>Prize Distribution Type</label>
                            <input type="text" placeholder='Enter the your commision in percentage'
                                name="prizeDistributionType" value={values.prizeDistributionType} handleChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="wrapper">
                        <div className='inputform'>
                            <label>Prize Distribution</label>
                            <input type="number" placeholder='0%'
                                name="prizeDistribution" value={values.prizeDistribution} handleChange={handleChange}
                            />
                        </div>

                        <div className='inputform'>
                            <label>1st prize</label>
                            <input type="number" placeholder='First prize enter in percentage'
                                name="firstPrize" value={values.firstPrize} handleChange={handleChange}
                            />
                            <div className='sm-text'>Prize Distribution :  95%</div>
                        </div>

                        <div className='inputform'>
                            <label>2nd prize</label>
                            <input type="number" placeholder='Second prize enter in percentage'
                                name="secondPrize" value={values.secondPrize} handleChange={handleChange}
                            />
                            <div className='sm-text'>Prize Distribution :  95%</div>
                        </div>

                        <div className='inputform'>
                            <label>3rd prize</label>
                            <input type="number" placeholder='third prize enter in percentage'
                                name="thirdPrize" value={values.thirdPrize} handleChange={handleChange}
                            />
                            <div className='sm-text'>Prize Distribution :  95%</div>
                        </div>
                    </div>
                </div>

                <div className="time" style={{ paddingTop: "30px" }}>
                    <div className='title'>Select the number of winners</div>
                    <div className='Timetime'>
                        <span className={active === "first" ? "schedule-time timeactive" : 'schedule-time'}
                            id={"first"}
                            onClick={handleClick}
                        >
                            2,000
                        </span>
                        <span className={active === "second" ? "schedule-time timeactive" : 'schedule-time'}
                            id={"second"}
                            onClick={handleClick}
                        >
                            2,000
                        </span>
                        <span className={active === "third" ? "schedule-time timeactive" : 'schedule-time'}
                            id={"third"}
                            onClick={handleClick}
                        >
                            4,000
                        </span>
                        <span className={active === "fourth" ? "schedule-time timeactive" : 'schedule-time'}
                            id={"fourth"}
                            onClick={handleClick}
                        >
                            5, 000
                        </span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatePrize