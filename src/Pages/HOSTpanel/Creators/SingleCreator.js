import React, { useState, useEffect } from 'react'
import HostSidebar from '../../../Components/PanelSIDEBAR/HostSidebar'
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io"
import TopCard from '../../../Components/pageCard/TopCard';
import HostPercentage from '../../../Components/pageCard/HostPercentage';
import moment from "moment"
import uparrow from "../../../Assets/uparr.svg";
import './SingleCreator.scss'
import AreaChartRechart3 from '../../../Components/RECHART/AreaChart3';
import closeImg from "../../../Assets/closebox.svg"
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getSINGLECREATOR } from '../../../Components/REDUX/ACTION/creatorAction';
import Avatar from "../../../Assets/Avatar.svg";
import pointGreen from '../../../Assets/pointGreen.svg';
import pointYellow from '../../../Assets/pointYellow.svg'
import Piechart from '../../../Components/RECHART/PieChart/PieChart';
import greenLine from '../../../Assets/greenRectangle.svg';
import pinkLine from '../../../Assets/pinkRectangle.svg'
import GetUser from './getUser';
import ViewMoreDetail from './viewMoreDetail/ViewMoreDetail';

function SingleCreator() {
    const [toggleState, setToggleState] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch()
    const creatorCard = [
        { subtitle: "Total", amount: 120000, span: "", text: "" },
        { subtitle: "Last Month", amount: 30000, span: 3, text: "decrease From Previous Month" },
        { subtitle: "Last Week", amount: 16000, span: 5, text: "Increase From Previous Week" }
    ]
    const prevMonth = moment().subtract(1, "month").format('MMMM')
    const percentageData = {
        previousMonthTotal: 3000,
        currentMonthTotal: 6000
    }

    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const { creator } = useSelector((state) => state.creatorReducer);
    console.log("creator", creator)


    // const pageCount = Math.ceil(getAllCreators?.length / newsPerPage);
    // const progressWidth = ((newsVisited + newsPerPage) / getAllCreators?.length) * 100
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const PIECHARTCOLORS = ['#FFBBBE', '#86DEA4'];
    const PIECenterText = {
        title: "₹1,00,000"
    }

    useEffect(() => {
        dispatch(getSINGLECREATOR(id))
    }, [id, dispatch])

    return (
        <HostSidebar name="Creators">
            <div className={toggleState === 1 ? "tabContent active-tabContent" : "tabContent"}>
                <div className='singleCreator'>
                    <div className='container'>
                        <div className='topContent'>
                            <NavLink to="/creators" className='left'>Creators</NavLink>
                            <span className='iconspan'><IoIosArrowForward className="icon" /> </span>
                            <span className='right'>Creator Details</span>
                        </div>

                        <div className='Session hostStyleforTopCard'>
                            <div className='header'>User</div>
                            <TopCard topCard={creatorCard} />
                        </div>

                        <div className='percentageSession' style={{ margin: '10px 0px' }}>
                            <div className='row g-3'>
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <HostPercentage average="1,500" leftText="Total download" rightText="Total download" prevMonth={prevMonth}
                                        previousMonthTotal={percentageData.previousMonthTotal} currentMonthTotal={percentageData.currentMonthTotal}
                                    />
                                </div>
                                <div className='col-lg-3 col-md-12 col-sm-12'>
                                    <div className='percentageCard' style={{ width: "80%" }}>
                                        <div className="cardWrapper">
                                            <div className='cardContent'>
                                                <div className='top'>
                                                    Users
                                                    <div className='date'>
                                                        June, 15 - {moment().format("MMMM, DD")} <span><IoIosArrowDown className='icon' /></span>
                                                    </div>
                                                </div>

                                                <div className="UserContent">
                                                    <div className='header'>20,000</div>
                                                    <span>65% <img src={uparrow} alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='graph'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-7 col-sm-12'>
                                    <AreaChartRechart3 title="Users Growth Rate" />
                                </div>
                            </div>

                        </div>

                        <div style={{ padding: "40px 0px 60px 0px" }}>
                            <div className='row' >
                                <div className='col-lg-7 col-md-7 col-sm-12'>
                                    <div className='allUserButton'>
                                        <button className='allUsersBtn' onClick={() => setToggleState(2)}>All Users</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='creatorRightSidebar'>
                        <div className='rightsidebarBody'>
                            <div className='closeBtn'>
                                <img src={closeImg} alt="" />
                            </div>
                            <div className='profile'>
                                <div className='image'>
                                    {creator?.image ? <img src={creator.image} alt="" /> :
                                        <img src={Avatar} alt="" />
                                    }
                                </div>

                                <div className='name'>
                                    {creator?.name}
                                    <span>{creator?.username}</span>
                                </div>
                            </div>

                            <div className='detail'>
                                <div className='content'>
                                    <div className='name'>Phone number</div>
                                    <div className='answer'>{creator?.phone}</div>
                                </div>
                                <div className='content'>
                                    <div className='name'>Age</div>
                                    <div className='answer'>23 Years</div>
                                </div>
                                <div className='content'>
                                    <div className='name'>Gender</div>
                                    <div className='answer'>Male</div>
                                </div>
                                <div className='content'>
                                    <div className='name'>Email</div>
                                    <div className='answer'>{creator?.email}</div>
                                </div>
                                <div className='content'>
                                    <div className='name'>Invitation code</div>
                                    <div className='answer'>{creator?.address.suite}</div>
                                </div>
                                <div className='content'>
                                    <div className='name'>KYC Status</div>
                                    <div className='answer'>
                                        {creator?.address?.geo.lng >= 0 ? <span>
                                            <span style={{ paddingRight: '5px' }}><img src={pointGreen} alt="" style={{ width: '9px' }} /></span> Active
                                        </span> : <span>
                                            <span style={{ paddingRight: '5px' }}><img src={pointYellow} alt="" style={{ width: '9px' }} /></span> Pending
                                        </span>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className='pieChartSession'>
                                <Piechart COLORS={PIECHARTCOLORS} centerText={PIECenterText}
                                    total="₹50,000" total2="₹25,000" text="Total Income"
                                    text2="Total Withdrawal " lineImage={greenLine} lineImage2={pinkLine}
                                />
                            </div>

                            <div className='rightsidebarBtn'>
                                <button className='' onClick={() => setToggleState(3)}> View More</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* getUsers */}
            <div className={toggleState === 2 ? "tabContent active-tabContent" : "tabContent"}>
                <GetUser handleBackButton={() => setToggleState(1)} search={search} />
            </div>

            {/* view more user details */}
            <div className={toggleState === 3 ? "tabContent active-tabContent" : "tabContent"}>
                <ViewMoreDetail handleBackButton={() => setToggleState(1)} singleCreatorDetail={creator} />
            </div>
        </HostSidebar>
    )
}

export default SingleCreator