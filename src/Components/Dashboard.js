import React from 'react'
import Cards from './Cards'
import { MDBContainer } from "mdbreact";
import CardSection from './CardSection';
import ChartSection from './ChartSection';

function Dashboard() {
    return (
        <div className="mdbcontainer">
            <CardSection />
            <ChartSection />
        </div>
    )
}

export default Dashboard
