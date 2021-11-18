import React from 'react'
import InfoSection from '../components/InfoSection'
import { InfoData2 } from '../data/InfoData'
import styled from 'styled-components/macro'


const EnergyPage = () => {
    return (
        <>
            <InfoSection {...InfoData2} />
            <p css={`text-align: center;
                    margin-bottom: 20px;
                    font-size: 20px;`}>Page is under development ...</p>
        </>
    )
}

export default EnergyPage
