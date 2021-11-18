import React from 'react'
import CustomSection from '../components/CustomSection'
import { CustomData } from '../data/CustomData'
import styled from 'styled-components/macro'


const PlanningPage = () => {
    return (
        <>
            <CustomSection {...CustomData}/>
            <p css={`text-align: center;
                    margin-bottom: 20px;
                    font-size: 20px;`}>Page is under development ...</p>

        </>
    )
}

export default PlanningPage
 