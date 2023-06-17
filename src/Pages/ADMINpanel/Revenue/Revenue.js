import axios from "axios";
import React, { useMemo, useState, useEffect } from "react";
import Table from "../../../Components/Table/Table";
import "./Revenue.css";
import { getAllPAGEMANAGEMENT } from '../../../Components/REDUX/ACTION/pageManagementAction';
import { useDispatch, useSelector } from 'react-redux';
import AdminSidebar from '../../../Components/PanelSIDEBAR/AdminSidebar';
import Text from "../../../Components/Table/Text";

function Revenue() {
    const dispatch = useDispatch()
    const getAllPage = useSelector((state) => state.pageManagementReducer);
    console.log("err", getAllPage)

    const [getData, setGetData] = useState(getAllPage)
    console.log("getData", getData)
    const data = React.useMemo(() => getData, [])
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
        setGetData(getData)
        dispatch(getAllPAGEMANAGEMENT())
    }, [dispatch, getData])

    return (
        <AdminSidebar name="Revenue">
            <div className="App">
                <Table columns={columns} data={data} />
                <Text />
            </div>
        </AdminSidebar>

    );
}
export default Revenue;