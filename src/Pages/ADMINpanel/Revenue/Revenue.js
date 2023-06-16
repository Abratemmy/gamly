import axios from "axios";
import React, { useMemo, useState, useEffect } from "react";
import Table from "../../../Components/Table/Table";
import "./Revenue.css";
import { getAllPAGEMANAGEMENT } from '../../../Components/REDUX/ACTION/pageManagementAction';
import { useDispatch, useSelector } from 'react-redux';
import AdminSidebar from '../../../Components/SIDEBAR/AdminSidebar';

function Revenue() {
    const dispatch = useDispatch()

    const getAllPage = useSelector((state) => state.pageManagementReducer);
    console.log("err", getAllPage)

    const data = React.useMemo(() => getAllPage, [])
    const columns = useMemo(
        () => [
            {
                // first group - TV Show
                Header: "TV Show",
                // First group columns
                columns: [
                    {
                        Header: "S/N",
                        accessor: "username",
                    },
                    {
                        Header: "Name",
                        accessor: "name",
                    },
                    {
                        Header: "Total Revenue",
                        accessor: "address.street",
                    },
                    {
                        Header: "Last Month",
                        accessor: "address.city",
                    },
                    {
                        Header: "Last Week",
                        accessor: "address.suit",
                    },
                    {
                        Header: "Growth rate",
                        accessor: "hello hjjkk",
                    },
                ],
            }
        ],
        []
    );

    // data state to store the TV Maze API data. Its initial value is an empty array


    useEffect(() => {
        dispatch(getAllPAGEMANAGEMENT())
    }, [dispatch])

    return (
        <AdminSidebar name="Revenue">
            <div className="App">
                <Table columns={columns} data={data} />
            </div>
        </AdminSidebar>

    );
}
export default Revenue;