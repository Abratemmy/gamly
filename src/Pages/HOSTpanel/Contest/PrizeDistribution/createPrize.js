import React, { useState } from 'react';
import backarrow from '../../../../Assets/backNav.svg'
import addMore from '../../../../Assets/addMore.svg';
import { IoIosArrowUp } from 'react-icons/io';
import closeImg from '../../../../Assets/cancel.svg';
import ContestCard from '../../../../Components/Common/ContestCard/ContestCard';


function CreatePrize({ backButton }) {

    const [selectDistribution, setSelectDistribution] = useState(false)
    const [selectActive, setSelectActive] = useState(null)
    const [distributionSelected, setDistributionSelected] = useState("")
    const distributionData = ["Rank-Based Distribution", "Percentages based distribution", "Proportional Distribution", "Winners-Takes-All"]

    console.log('selectedActive', selectActive)
    console.log('dis', distributionSelected)

    const [active, setActive] = useState(null);
    console.log("time", active)
    const handleClick = (event) => {
        setActive(event.target.id);
        console.log(event.target.id)

    }

    const initialValue = {
        commission: "",
        prizeDistribution: "",
        prizeDistributionName: "",
        firstPrize: "",
        secondPrize: "",
        thirdPrize: ""
    }
    const [values, setValues] = useState(initialValue);
    const clearValues = () => setValues(initialValue)
    console.log("values are", values)
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('submitted successfully');
        setOpenPreview(false);
        clearValues();
        setActive(null);
        setDistributionSelected('')
        localStorage.removeItem('prizeDistributionData')
    }


    const [openPreview, setOpenPreview] = useState(false);
    const previewHandler = () => {
        const payloadArray = [{
            commission: values.commission,
            prizeDistribution: values.prizeDistribution,
            prizeDistributionName: values.prizeDistributionName,
            prizeDistributionType: distributionSelected,
            firstPrize: values.firstPrize,
            secondPrize: values.secondPrize,
            thirdPrize: values.thirdPrize,
            winnerNumber: active
        }]
        localStorage.setItem('prizeDistributionData', JSON.stringify(payloadArray));
        setOpenPreview(true)
    }
    const contestCardData = JSON.parse(localStorage.getItem('prizeDistributionData'));

    console.log('contest', contestCardData)
    return (
        <div>
            <div className='creatPrize'>
                <div className='top'>
                    <div className='name'>Create new prize distribution</div>
                    <button onClick={backButton} >
                        <img src={backarrow} alt='' />
                        <span>Back</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='formWrapper'>
                        <div className='formContainer'>
                            <div className="wrapper">
                                <div className='inputform'>
                                    <label>Commision</label>
                                    <input type="text" placeholder='Enter the your commision in percentage'
                                        name="commission" value={values.commission} onChange={handleChange}
                                    />
                                </div>

                                <div className='inputform'>
                                    <label>Prize Distribution Name</label>
                                    <input type="number" min='1' max='100' placeholder='Enter Total Number Participants'
                                        name="prizeDistributionName" value={values.prizeDistributionName} onChange={handleChange}
                                    />
                                </div>

                                <div className='inputform'>
                                    <label>Prize Distribution Type</label>

                                    <div className='selectDropdown'>
                                        <div className='dropdown-btn' onChange={handleChange} onClick={() => setSelectDistribution(!selectDistribution)}>
                                            {distributionSelected === "" ? "Select System" : <>{distributionSelected}</>}
                                        </div>
                                        {selectDistribution && (
                                            <div className='dropdown-content'>
                                                <div className='createNew'>
                                                    <div className='text'>Create new</div>
                                                    <span><img src={addMore} alt="" /> </span>
                                                </div>
                                                <div className='dropOverflow'>
                                                    {distributionData?.map((option, index) => (
                                                        <div key={index} className={selectActive === option ? "dropActive dropdown-item" : "dropdown-item"}
                                                            onClick={(e) => {
                                                                setDistributionSelected(option);
                                                                setSelectDistribution(false);
                                                                setSelectActive(option)
                                                            }}
                                                        >
                                                            {option} <span><IoIosArrowUp className='icon' /></span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>

                            <div className="wrapper">
                                <div className='inputform'>
                                    <label>Prize Distribution</label>
                                    <input type="number" min='1' max='100' placeholder='0%'
                                        name="prizeDistribution" value={values.prizeDistribution} onChange={handleChange}
                                    />
                                </div>

                                <div className='inputform'>
                                    <label>1st prize</label>
                                    <input type="number" min='1' max='100' placeholder='First prize enter in percentage'
                                        name="firstPrize" value={values.firstPrize} onChange={handleChange}
                                    />
                                    <div className='sm-text'>Prize Distribution :  95%</div>
                                </div>

                                <div className='inputform'>
                                    <label>2nd prize</label>
                                    <input type="number" min='1' max='100' placeholder='Second prize enter in percentage'
                                        name="secondPrize" value={values.secondPrize} onChange={handleChange}
                                    />
                                    <div className='sm-text'>Prize Distribution :  95%</div>
                                </div>

                                <div className='inputform'>
                                    <label>3rd prize</label>
                                    <input type="number" min='1' max='100' placeholder='third prize enter in percentage'
                                        name="thirdPrize" value={values.thirdPrize} onChange={handleChange}
                                    />
                                    <div className='sm-text'>Prize Distribution :  95%</div>
                                </div>
                            </div>
                        </div>

                        <div className="winnerNumber" style={{ paddingTop: "30px" }}>
                            <div className='title'>Select the number of winners</div>
                            <div className='winnerWrapper'>
                                <span className={active === "500" ? "winnerText winneractive" : 'winnerText'}
                                    id={"500"}
                                    onClick={handleClick}
                                >
                                    500
                                </span>
                                <span className={active === "2000" ? "winnerText winneractive" : 'winnerText'}
                                    id={"2000"}
                                    onClick={handleClick}
                                >
                                    2,000
                                </span>
                                <span className={active === "4000" ? "winnerText winneractive" : 'winnerText'}
                                    id={"4000"}
                                    onClick={handleClick}
                                >
                                    4,000
                                </span>
                                <span className={active === "5000" ? "winnerText winneractive" : 'winnerText'}
                                    id={"5000"}
                                    onClick={handleClick}
                                >
                                    5, 000
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="ActionButton">
                        <span className='button preview' onClick={previewHandler}>Preview</span>
                        <button value="submit" className='button submit'>Save</button>
                    </div>
                </form>
            </div>

            {openPreview && (
                <div className='popupContainer'>
                    <div className='previewBody' onClick={(e) => e.stopPropagation()}>
                        <div className="topHeader">
                            <div className='name'>Percentage based distribution</div>
                            <div className='image' onClick={() => setOpenPreview(false)}><img src={closeImg} alt="" /></div>
                        </div>


                        <div className='prizeDistribution' style={{ padding: "30px 70px" }}>
                            <ContestCard contestCardData={contestCardData} fullRow="true" />
                        </div>

                        <div className='ActionButton'>
                            <button className='cancel' onClick={() => setOpenPreview(false)}>Cancel</button>
                            <button className='confirm' onClick={handleSubmit}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CreatePrize