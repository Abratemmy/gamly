import React, { useState } from 'react'
import TableProgressBar from '../TableProgressBar/TableProgressBar';
import Pagination from '../Pagination/Pagination';
import { Table, Thead, Tr, Td, Tbody } from "../Table/Table"
import TableTop from '../TableTop/TableTop';
import pointGreen from '../../../Assets/pointGreen.svg';
import pointYellow from '../../../Assets/pointYellow.svg'
import pointLightGreen from '../../../Assets/pointLightGreen.svg'
import { NavLink } from 'react-router-dom';
import Avatar from "../../../Assets/Avatar.svg"
import './KYC.scss'

function KYC({ getKYCData, navigateToPending, goToSingleKYCDetail }) {
    const [search, setSearch] = useState('')

    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const pageCount = Math.ceil(getKYCData?.length / newsPerPage);
    const progressWidth = ((newsVisited + newsPerPage) / getKYCData?.length) * 100
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }

    return (
        <div className='Creators kycWrapper allPages'>
            <div className='container'>
                <div className='page-top'>
                    <div>
                        KYC
                        <span>Here’s a list of all creators KYC</span>
                    </div>
                    <div className='topButton'>
                        <button onClick={navigateToPending}>Pending KYC</button>
                    </div>
                </div>


                <div className='tablePage tableSection doNotShowDate'>
                    <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                        placeHolder="Search"
                    />
                    <div className="scroll-container">
                        <Table className="table scroll kycTable">
                            <Thead>
                                <Tr>
                                    <Td>Creator Name</Td>
                                    <Td>Creator Id</Td>
                                    <Td>Email</Td>
                                    <Td>KYC Status</Td>
                                    <Td>Details</Td>
                                </Tr>
                            </Thead>

                            <Tbody className="tbody">
                                {getKYCData?.slice ? (
                                    <>
                                        {getKYCData?.filter((item) => {
                                            return search?.toLowerCase() === "" ? item :
                                                (item?.username?.toLowerCase().includes(search.toLowerCase()) || item?.name?.toLowerCase().includes(search.toLowerCase()))

                                        })?.slice(newsVisited, newsVisited + newsPerPage)?.map((data, index) => {
                                            return (
                                                <Tr key={index}>
                                                    <Td className="firstRowData" width="25%">
                                                        <div className='data'>
                                                            {data?.image ?
                                                                <div className='image'><img src={data?.image} alt="" /></div>
                                                                : <div className='image'><img src={Avatar} alt="" /></div>
                                                            }

                                                            <div className='dataName'>
                                                                <div>{data?.name}</div>
                                                                <div className='username'>@{data?.username}</div>
                                                            </div>
                                                        </div>
                                                    </Td>
                                                    <Td className="otherData id">{data?.id},902</Td>
                                                    <Td className="email otherData">{data?.email}</Td>
                                                    <Td className="otherData status">{data?.address?.geo.lng >= 0 ? <span>
                                                        <span style={{ paddingRight: '5px' }}><img src={pointGreen} alt="" style={{ width: '9px' }} /></span> Active
                                                    </span> : data?.address?.geo.lng <= -50 ?
                                                        <span>
                                                            <span style={{ paddingRight: '5px' }}><img src={pointLightGreen} alt="" style={{ width: '9px' }} /></span> Processing
                                                        </span> :
                                                        <span>
                                                            <span style={{ paddingRight: '5px' }}><img src={pointYellow} alt="" style={{ width: '9px' }} /></span> Pending
                                                        </span>}
                                                    </Td>
                                                    <Td className="otherData details"><NavLink to={`/${goToSingleKYCDetail}/${data.id}`} className="tableNav">View</NavLink></Td>

                                                </Tr>
                                            )
                                        })}
                                    </>
                                ) : ("")}
                            </Tbody>
                        </Table>
                    </div>
                </div>

                <TableProgressBar data={getKYCData} newsPerPage={newsPerPage} progressWidth={progressWidth} />

                <Pagination pageCount={pageCount} changePage={changePage} />
            </div>
        </div>

    )
}

export default KYC