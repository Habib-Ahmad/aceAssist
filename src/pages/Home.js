import React, { useState } from 'react'
import SideNav from '../components/Navigators/SideNav'
import Header from '../components/Navigators/Header'
import MainContent from '../components/MainContent'

const Home = props => {

    const tabNameToIndex={
        // 100: "dashboard",
        0: "client-intake-form",
        1: "personal-history"
    }

    const indexToTabName={
        // "dashboad": 100,
        "client-intake-form": 0,
        "personal-history": 1
    }

    const [selectedTab, setSelectedTab] = useState(indexToTabName[props.match.params.page])

    const handleChange = (event, newValue) => {
        props.history.push(`/${tabNameToIndex[newValue]}`)
        setSelectedTab(newValue);
    };

    return (
        <div className="home">
            <SideNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} handleChange={handleChange} />
            <div className="home__content">
                <Header />
                <MainContent selectedTab={selectedTab} />
            </div>
                
        </div>
    )
}

export default Home