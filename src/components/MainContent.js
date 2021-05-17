import React from 'react'
import ClientIntakeForm from './Forms/ClientIntakeForm'
import PersonalHistory from './Forms/PersonalHistory'
// import DashBoard from './DashBoard'

const MainContent = props => {
    return (
        <div className="mainContent">
            {/* { props.selectedTab === 100 && <DashBoard /> } */}
            { props.selectedTab === 0 && <ClientIntakeForm /> }
            { props.selectedTab === 1 && <PersonalHistory /> }
        </div>
    )
}

export default MainContent
