import React from 'react'
import styled from 'styled-components'
import Developing from '../components/Developing'

const Container = styled.div`
padding: 60px 2rem;
`

const DevelopingPages = () => {
    return (
        <Container>
            <Developing />
        </Container>
    )
}

export default DevelopingPages
