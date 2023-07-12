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
    const data = getAllPage
    // const [getData, setGetData] = useState(getAllPage)


    const name = React.useMemo(() => data, []);
    console.log("getAllPage", name)

    console.log("nameAA", name)
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

    // name state to store the TV Maze API name. Its initial value is an empty array


    useEffect(() => {

        dispatch(getAllPAGEMANAGEMENT())
    }, [dispatch])

    return (
        <AdminSidebar name="Revenue">
            <div className="App">
                <Table columns={columns} data={name} />
                <h1>hi8i</h1>
                <Text />
            </div>
        </AdminSidebar>

    );
}
export default Revenue;