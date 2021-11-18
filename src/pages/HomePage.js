import React from 'react'
import CustomSection from '../components/CustomSection'
import InfoSection from '../components/InfoSection'
import Vehicles from '../components/Vehicles'
import Open from '../components/Open'
import { InfoData, InfoData2 } from '../data/InfoData';
import { CustomData, CustomData2 } from '../data/CustomData';
import { ServicesData } from '../data/ServicesData'
import {SliderData} from '../data/SliderData'
import Clients from '../components/Clients'
import { ClientData } from '../data/ClientData'
import Services from '../components/Services'
// import Contact from '../components/Contact'


const HomePage = () => {
    return (
        <> 
            <Open slides={SliderData} />
            <Services services={ServicesData}/> 
            <InfoSection {...InfoData}/>
            <Vehicles/>
            <CustomSection {...CustomData}/>
            <InfoSection {...InfoData2}/> 
            <CustomSection {...CustomData2}/>
            <Clients clients={ClientData} />
            {/* <Contact /> */}
        </>
    )
}

export default HomePage
