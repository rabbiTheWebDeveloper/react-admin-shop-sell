import React from 'react';
import AdminBanner from '../../components/DashboardComponent/AdminBanner/AdminBanner';
import StartMenuBar from '../../components/DashboardComponent/StartMenuBar/StartMenuBar';
import TotallLead from '../../components/DashboardComponent/TotallLead/TotallLead';
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div>
            <AdminBanner></AdminBanner>
            <TotallLead></TotallLead>
            
        </div>
    );
};

export default Dashboard;