import React from 'react'
import Contact from '../components/Contact'
import styled from 'styled-components'
import ClientBg from "../images/img-contact.jpg"

const Container = styled.div`
background: linear-gradient( to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(${ClientBg});
background-size: cover;
padding: 2rem 0;
`

const ContactPage = () => {
    return (
        <Container>
            <Contact />
        </Container>
    )
}

export default ContactPage
