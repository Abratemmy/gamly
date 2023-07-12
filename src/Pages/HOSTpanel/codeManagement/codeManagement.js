import React, { useState, useEffect } from 'react';
import "./codeManagement.scss"
import HostSidebar from '../../../Components/Host/HostSidebar';
import TableTop from '../../../Components/Common/TableTop/TableTop';
import { Table, Thead, Tr, Td, Tbody } from "../../../Components/Common/Table/Table"
import { useDispatch, useSelector } from 'react-redux';
import { createCODEMANAGEMENT, getAllCODEMANAGEMENT } from '../../../Components/Host/HOSTACTION/codeManagement';
import pointGreen from '../../../Assets/pointGreen.svg';
import pointYellow from '../../../Assets/pointYellow.svg'
import Pagination from '../../../Components/Common/Pagination/Pagination';
import TableProgressBar from '../../../Components/Common/TableProgressBar/TableProgressBar';
import { FailedMessage, ProcessingMessage, SuccessMessage } from '../../../Components/Common/Message/Message';
import PendingRequest from './PendingRequest';
import closebtn from "../../../Assets/closebox.svg"
function CodeManagement({ getPaymentData }) {
    // tabs
    const [toggleState, setToggleState] = useState(1);


    const [products, setProducts] = useState(getPaymentData?.data);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const handleSelect = (date) => {
        let filtered = products?.filter((product) => {
            let productDate = new Date(product["createdAt"]);
            return (productDate >= date.selection.startDate &&
                productDate <= date.selection.endDate);
        })
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        setProducts(filtered);
    };
    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const getAllCodeManagement = useSelector((state) => state.codeManagementReducer);
    console.log("code Management", getAllCodeManagement)
    const pageCount = Math.ceil(getAllCodeManagement?.length / newsPerPage);
    const progressWidth = ((newsVisited + newsPerPage) / getAllCodeManagement?.length) * 100
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }

    const [sendInvite, setSendInvite] = useState(false);
    const sendInviteToggle = () => {
        setSendInvite(prev => !prev)
    }
    const initialValue = {
        email: "",
        mobile: "",
        socialMedia: ""
    }
    const [values, setValues] = useState(initialValue);

    const clearCodeData = () => setValues(initialValue)
    const handleChange = (ev) => {
        setValues({
            ...values,
            [ev.target.name]: ev.target.value
        });
    };
    const [errors, setErrors] = useState({});

    const handleError = (targets) => {
        let errorsValue = {};
        if (!targets.mobile) errorsValue.mobile = "Please enter phone number";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";
        if (!targets.socialMedia) errorsValue.socialMedia = "Please enter social media handle";

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;
    };

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const sendInvitationHandler = (e) => {
        e.preventDefault()
        let v = handleError(values);
        if (v > 0) {
            console.log("error");
        }
        else {
            setLoading(true)
            dispatch(createCODEMANAGEMENT(values, setLoading, setSuccess, setFailure, clearCodeData, setSendInvite));
        }
    }
    useEffect(() => {
        dispatch(getAllCODEMANAGEMENT())
    }, [dispatch])
    return (
        <HostSidebar name="Code Managements" defaultToggleState={() => setToggleState(1)}>
            <div className='codeManagement allPages'>

                <div className={toggleState === 1 ? "tabContent active-tabContent" : "tabContent"}>

                    <div className='container'>
                        <div className='top'>
                            <div className='left'>Creators Code Details</div>
                            <div className='right'>
                                <button className='button firstb' onClick={() => setToggleState(2)}>Pending request</button>
                                <button className='button second' onClick={sendInviteToggle}>Send Invite</button>
                            </div>
                        </div>

                        <div className='tablePage tableSection'>
                            <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                                handleSelect={handleSelect} placeHolder="Search"
                            />
                            <div className="scroll-container">
                                <Table className="table scroll">
                                    <Thead>
                                        <Tr>
                                            <Td>Creator Name</Td>
                                            <Td>User Name</Td>
                                            <Td>Social media</Td>
                                            <Td>Mobile No</Td>
                                            <Td>Email</Td>
                                            <Td>Invitation code</Td>
                                            <Td>Reach</Td>
                                            <Td>Status</Td>
                                        </Tr>
                                    </Thead>

                                    <Tbody>
                                        {getAllCodeManagement?.slice ? (
                                            <>
                                                {getAllCodeManagement?.filter((item) => {
                                                    return search?.toLowerCase() === "" ? item :
                                                        (item?.username?.toLowerCase().includes(search.toLowerCase()) || item?.name?.toLowerCase().includes(search.toLowerCase()))

                                                })?.slice(newsVisited, newsVisited + newsPerPage)?.map((data, index) => {
                                                    return (
                                                        <Tr key={index}>
                                                            <Td >{data?.name}</Td>
                                                            <Td >{data?.username}</Td>
                                                            <Td  >@{data.username}</Td>
                                                            <Td >{data?.phone}</Td>
                                                            <Td >{data?.email}</Td>
                                                            <Td >{data?.address.suite}</Td>
                                                            <Td >{data?.id}902</Td>
                                                            <Td >{data?.address?.geo.lng >= 0 ? <span>
                                                                <span style={{ paddingRight: '5px' }}><img src={pointGreen} alt="" style={{ width: '9px' }} /></span> Active
                                                            </span> : <span>
                                                                <span style={{ paddingRight: '5px' }}><img src={pointYellow} alt="" style={{ width: '9px' }} /></span> Pending
                                                            </span>}
                                                            </Td>

                                                        </Tr>
                                                    )
                                                })}
                                            </>
                                        ) : ("")}
                                    </Tbody>
                                </Table>
                            </div>
                        </div>

                        <TableProgressBar data={getAllCodeManagement} newsPerPage={newsPerPage} progressWidth={progressWidth} />

                        <Pagination pageCount={pageCount} changePage={changePage} />
                    </div>

                    {sendInvite && (
                        <div className='popupContainer'>
                            <div className='sendInvitePopupBody' onClick={(e) => e.stopPropagation()}>
                                <form className='codeform' onSubmit={sendInvitationHandler}>
                                    <div className='title'>Send Invite
                                        <span><img src={closebtn} alt="" onClick={() => setSendInvite(false)} /> </span>
                                    </div>

                                    <div className="inputDiv">
                                        <label>Email</label>
                                        <input type="text" placeholder="Input email" name="email"
                                            value={values.email} onChange={handleChange}
                                        />
                                        {errors ? <span className='error'> {errors.email}</span> : ""}
                                    </div>

                                    <div className="inputDiv">
                                        <label>Mobile Number</label>
                                        <input type="phone" placeholder="Input phone number " name="mobile"
                                            value={values.mobile} onChange={handleChange}
                                        />
                                        {errors ? <span className='error'> {errors.mobile}</span> : ""}
                                    </div>

                                    <div className="inputDiv">
                                        <label>Social Media</label>
                                        <input type="text" placeholder="input social media handle (Facebook, Instagram, Twitter)" name="socialMedia"
                                            value={values.socialMedia} onChange={handleChange}
                                        />
                                        {errors ? <span className='error'> {errors.socialMedia}</span> : ""}
                                    </div>

                                    <div className='submitButton'>

                                        <button type="submit">Generate invitation</button>


                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {
                        loading && <ProcessingMessage message="Processing" />

                    }
                    {success && (
                        <SuccessMessage message="Invitation sent successfully" handleClose={() => setSuccess(false)} />
                    )}

                    {failure && (
                        <FailedMessage message="Invitation failed" handleClose={() => setFailure(false)} />

                    )}
                </div>

                <div className={toggleState === 2 ? "tabContent active-tabContent" : "tabContent"}>
                    <PendingRequest setToggleState={() => setToggleState(1)} />
                </div>
            </div>
        </HostSidebar>
    )
}

export default CodeManagement