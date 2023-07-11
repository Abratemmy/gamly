import React, { useState } from 'react'
import PageLoader from '../PAGELOADER/PageLoader';
import { Table, Thead, Tr, Td, Tbody } from "../Table/Table"
import TableTop from '../TableTop/TableTop';
import pointGreen from '../../../Assets/pointGreen.svg';
import pointRed from '../../../Assets/pointRed.svg'
import Pagination from '../Pagination/Pagination';
import backbtn from '../../../Assets/backNav.svg'

function PendingWithdrawal({ isLoading, goBack, getPendingWithdrawal }) {
    const [search, setSearch] = useState('')

    const [pageNumber, setPageNumber] = useState(0);
    const newsPerPage = 10
    const newsVisited = pageNumber * newsPerPage

    const pageCount = Math.ceil(getPendingWithdrawal?.length / newsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        // this is to scroll up when 
        // window.scrollTo(0, 0)
    }
    return (
        <div>
            {isLoading ? <PageLoader /> :
                <div className='Creators withdrawalContainer allPages'>
                    <div className='container'>
                        <div className='page-top'>
                            <div>
                                Pending Withdrawals
                                <span>Here’s a list of all withdrawals</span>
                            </div>
                            <div className='backbtn'>
                                <button onClick={goBack}><img src={backbtn} alt="" /> Back</button>
                            </div>
                        </div>

                        <div className='tablePage tableSection'>
                            <TableTop handleRefresh={() => setSearch(" ")} setSearch={setSearch} search={search}
                                placeHolder="Search"
                            />
                            <div className="scroll-container">
                                <Table className="table scroll kycTable">
                                    <Thead className='thead'>
                                        <Tr>
                                            <Td className='td'>S/N</Td>
                                            <Td className='td'>Beneficiary</Td>
                                            <Td className='td'>Account Number</Td>
                                            <Td className='td'>withdrawal ID</Td>
                                            <Td className='td'>Bank Name</Td>
                                            <Td className='td'>Amount</Td>
                                            <Td className='td'>Approved Date</Td>
                                            <Td className='td'>Payment Message</Td>
                                            <Td className='td'>status</Td>
                                        </Tr>
                                    </Thead>

                                    <Tbody className="tbody">
                                        {getPendingWithdrawal?.slice ? (
                                            <>
                                                {getPendingWithdrawal?.filter((item) => {
                                                    return search?.toLowerCase() === "" ? item :
                                                        (item?.username?.toLowerCase().includes(search.toLowerCase()) || item?.name?.toLowerCase().includes(search.toLowerCase()))

                                                })?.slice(newsVisited, newsVisited + newsPerPage)?.map((data, index) => {
                                                    return (
                                                        <Tr className='tableRow' key={index}>
                                                            <Td className='td sN'>{((pageNumber * 10) + index + 1).toString().length === 1 ?
                                                                <>0{(pageNumber * 10) + index + 1}</> : <>{(pageNumber * 10) + index + 1}</>
                                                            }
                                                            </Td>
                                                            <Td className=" id td">{data?.name}</Td>
                                                            <Td className="email  td">{data?.address?.zipcode}</Td>
                                                            <Td className="email  td">AQB{data?.id}906</Td>
                                                            <Td className="email  td">{data?.address?.street}</Td>
                                                            <Td className="email  td">NGN 500,000</Td>
                                                            <Td className="email  td">2020-07-21</Td>
                                                            <Td className="email  td">{data?.address?.geo?.lng >= 0 ? <span>
                                                                Posted successful
                                                            </span> : <span>Not posted</span>}</Td>
                                                            <Td className=" td status ">{data?.address?.geo.lng >= 0 ? <span className='tableStatus'>
                                                                <span style={{ paddingRight: '5px' }}><img src={pointGreen} alt="" style={{ width: '8px' }} /></span> Approved
                                                            </span> :
                                                                <span className='tableStatus'>
                                                                    <span style={{ paddingRight: '5px' }}><img src={pointRed} alt="" style={{ width: '8px' }} /></span> Rejected
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

                        <Pagination pageCount={pageCount} changePage={changePage} />
                    </div>
                </div>
            }
        </div>
    )
}

export default PendingWithdrawal