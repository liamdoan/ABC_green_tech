import React from 'react'
import Clients from '../components/Clients'
import { ClientData } from '../data/ClientData'
import styled from 'styled-components/macro'

const Container = styled.div`
padding-top: 5rem;
`

const ClientsPage = () => {
    return (
        <Container>
         <Clients clients={ClientData} /> 
         <p css={`text-align: center;
                    margin-bottom: 20px;
                    font-size: 20px;`}>Page is under development ...</p>    
        </Container>
    )
}

export default ClientsPage
