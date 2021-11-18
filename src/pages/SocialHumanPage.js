import React from 'react'
import CustomSection from '../components/CustomSection'
import { CustomData2 } from '../data/CustomData'
import styled from 'styled-components/macro'


const SocialHumanPage = () => {
    return (
        <>
            <CustomSection {...CustomData2} />
            <p css={`text-align: center;
                    margin-bottom: 20px;
                    font-size: 20px;`}>Page is under development ...</p>

        </>
    )
}

export default SocialHumanPage
