import React from 'react'
import Services from '../components/Services'
import { ServicesData } from '../data/ServicesData'
import styled from 'styled-components/macro'

const Container = styled.div`
padding-top: 60px;
`

const ServicesPage = () => {
    return (
        <Container>
            <Services services={ServicesData}/>
            <p css={`text-align: center;
                    margin-bottom: 20px;
                    font-size: 20px;`}>Page is under development ...</p>
        </Container>
    )
}

export default ServicesPage
