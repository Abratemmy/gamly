import React, { useState } from 'react';
import backarrow from '../../../../Assets/backNav.svg'
import addMore from '../../../../Assets/addMore.svg';
import { IoIosArrowUp } from 'react-icons/io';
import closeImg from '../../../../Assets/cancel.svg';
import ContestCard from '../../../../Components/Common/ContestCard/ContestCard';


function CreateNewContest({ backButton }) {

    const [selectType, setSelectType] = useState(false)
    const [selectActive, setSelectActive] = useState(null)
    const [contestTypeSelected, setcontestTypeSelected] = useState("")
    const contestTypeData = ["Hot", "Mega", "Beginners Battle", "Contest for champions", "10X winning", "4X winning", "Head-to-Head", "Low-entry Contest", "big winning", "Winners Take All", "Mega"]

    //   point system palava
    const [pointSystem, setPointSystem] = useState(false)
    const [selectPointActive, setSelectPointActive] = useState(null)
    const [contestPointsysSelected, setContestpointsysSelected] = useState("")
    const pointSystemData = ['Default Point System', 'Small size contest', 'Head to head contest']

    // prizedstribution
    const [selectDistribution, setSelectDistribution] = useState(false)
    const [distributeActive, setDistributeActive] = useState(null)
    const [distributionSelected, setDistributionSelected] = useState("")
    const distributionData = ["view your prize distribution", "Head to head contest"]

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
        setcontestTypeSelected('')
        localStorage.removeItem('prizeDistributionData')
    }

    const [openPreview, setOpenPreview] = useState(false);

    const previewHandler = () => {
        // const payloadArray = [{
        //     commission: values.commission,
        //     prizeDistribution: values.prizeDistribution,
        //     prizeDistributionName: values.prizeDistributionName,
        //     prizeDistributionType: contestTypeSelected,
        //     firstPrize: values.firstPrize,
        //     secondPrize: values.secondPrize,
        //     thirdPrize: values.thirdPrize
        // }]
        // localStorage.setItem('prizeDistributionData', JSON.stringify(payloadArray));
        setOpenPreview(true)
    }
    // const contestCardData = JSON.parse(localStorage.getItem('prizeDistributionData'));
    const contestCardData = [
        { prizePool: '1.5', entryNo: '41', entrys: 5, lakh: 20, winnerNumber: 50, prizeDistribution: 80, prizeDistributionName: 40, firstPrize: 55, secondPrize: 45, thirdPrize: 35, prizeDistributionType: 'Rahul small contest prize distribution' },

    ]

    console.log('contest', contestCardData)
    return (
        <div>
            <div className='creatPrize'>
                <div className='top'>
                    <div className='name'>Create new contest</div>
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
                                    <label>Contest Name</label>
                                    <input type="text" placeholder='Enter your name'
                                        name="contestName" value={values.contestName} onChange={handleChange}
                                    />
                                </div>

                                <div className='inputform'>
                                    <label>Entry</label>
                                    <input type="number" min='1' max='100' placeholder='Enter Total Number Participants'
                                        name="entry" value={values.entry} onChange={handleChange}
                                    />
                                </div>

                                <div className='inputform'>
                                    <label>Contest Type</label>

                                    <div className='selectDropdown'>
                                        <div className='dropdown-btn' onChange={handleChange} onClick={() => setSelectType(!selectType)}>
                                            {contestTypeSelected === "" ? "dropdown list with option to add new" : <>{contestTypeSelected}</>}
                                        </div>
                                        {selectType && (
                                            <div className='dropdown-content'>
                                                <div className='dropOverflow'>
                                                    {contestTypeData?.map((option, index) => (
                                                        <div key={index} className={selectActive === option ? "dropdown-item" : "dropdown-item"}
                                                            onClick={(e) => {
                                                                setcontestTypeSelected(option);
                                                                setSelectType(false);
                                                                setSelectActive(option)
                                                            }}
                                                        >
                                                            {option}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className='createNew'>
                                                    <div className='text'>Add New Type</div>
                                                    <span><img src={addMore} alt="" /> </span>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>

                                <div className='inputform'>
                                    <label>Multiple Teams</label>
                                    <input type="number" min='1' max='100' placeholder='Enter Total Number Participants'
                                        name="entry" value={values.entry} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="wrapper">
                                <div className='inputform'>
                                    <label>Contest Size</label>
                                    <input type="number" placeholder='Enter Total Number Participants'
                                        name="contestSize" value={values.contestSize} onChange={handleChange}
                                    />
                                </div>

                                <div className='inputform'>
                                    <label>Point System</label>
                                    <div className='selectDropdown'>
                                        <div className='dropdown-btn' onChange={handleChange} onClick={() => setPointSystem(!pointSystem)}>
                                            {contestPointsysSelected === "" ? "Select System" : <>{contestPointsysSelected}</>}
                                        </div>
                                        {pointSystem && (
                                            <div className='dropdown-content'>
                                                <div className='dropOverflow smDropOverflow'>
                                                    {pointSystemData?.map((option, index) => (
                                                        <div key={index} className={selectPointActive === option ? "dropActive dropdown-item" : "dropdown-item"}
                                                            onClick={(e) => {
                                                                setContestpointsysSelected(option);
                                                                setPointSystem(false);
                                                                setSelectPointActive(option)
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
                                                <div className='dropOverflow smDropOverflow'>
                                                    {distributionData?.map((option, index) => (
                                                        <div key={index} className={distributeActive === option ? "dropActive dropdown-item" : "dropdown-item"}
                                                            onClick={(e) => {
                                                                setDistributionSelected(option);
                                                                setSelectDistribution(false);
                                                                setDistributeActive(option)
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
                        </div>

                    </div>

                    <div className="ActionButton">
                        <span className='button preview' onClick={previewHandler}>Preview</span>
                        <button value="submit" className='button submit'>Save</button>
                    </div>
                </form>
            </div>

            {openPreview && (
                <div className='popupContainer ' style={{ paddingBottom: '30px' }}>
                    <div className='contestPopUpContainer' style={{ paddingBottom: '30px' }}>
                        <div className='previewBody' onClick={(e) => e.stopPropagation()} style={{ marginBottom: '30px' }}>
                            <div className="topHeader">
                                <div className='name'>Contest</div>
                                <div className='image' onClick={() => setOpenPreview(false)}><img src={closeImg} alt="" /></div>
                            </div>

                            <div className='' style={{ padding: "10px 70px" }}>
                                <ContestCard contestCardData={contestCardData} fullRow="true" />
                            </div>

                            <div className='ActionButton'>
                                <button className='cancel' onClick={() => setOpenPreview(false)}>Cancel</button>
                                <button className='confirm' onClick={handleSubmit}>Confirm</button>
                            </div>
                        </div>

                    </div>

                </div>
            )}
        </div>
    )
}

export default CreateNewContest