import React from 'react'
import Vehicles from '../components/Vehicles'
import styled from 'styled-components/macro'

const Container = styled.div`
padding-top: 5rem;
`

const VehiclesPage = () => {
    return (
        <Container>
         <Vehicles/>   
         <p css={`text-align: center;
                    margin-bottom: 20px;
                    font-size: 20px;`}>Page is under development ...</p>

        </Container>
    )
}

export default VehiclesPage 
