import React from 'react';
import "./Sales.css"
import AdminSidebar from '../../../Components/PanelSIDEBAR/AdminSidebar';
import TopCard from '../../../Components/TopCard/TopCard';

function Sales() {
    // sales card array
    const salesCard = [
        { subtitle: "Total", amount: "120000", span: "", text: "" },
        { subtitle: "Last Month", amount: "30000", span: 3, text: "descrease From Previous Month", avg: "2,600" },
        { subtitle: "Last Week", amount: "16000", span: 5, text: "Increase From Previous Week", avg: "1,200" },
        { subtitle: "Today", amount: "78000", span: 7, text: "Increase From Previous Day" }
    ]
    return (
        <AdminSidebar name="sales">
            <div className='Sales'>
                <div className='container'>
                    <TopCard topCard={salesCard} cardName="Payout" />
                </div>
            </div>
        </AdminSidebar>
    )
}

export default Sales