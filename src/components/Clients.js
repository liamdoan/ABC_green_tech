import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components/macro'

const ClientsSection = styled.section`
/* background-color: pink; */
margin: 0px 0 40px 0px;
`

const Container = styled.div`
/* background-color: purple; */
padding: 3rem 1rem;


@media screen and (max-width: 280px) {
    padding: 3rem 0;
}
`

const Heading = styled.div`
h1{
/* background-color: red; */
color: black;
text-align: center;
padding: 10px 15px 25px 15px;
font-size: clamp(1.5rem, 6vw, 2rem);
}
`

const Content = styled.div`
/* background-color: red; */
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
/* flex-direction: column; */
`

const Card = styled(Link)`
/* background-color: blue; */
height: 120px;
min-height: 80px;
width: 120px;
min-width: 80px;
margin: 3px 20px;
text-decoration: none;
/* display: flex;
flex-direction: column; */
/* justify-content: space-around; */
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.2);
    border-bottom: 3px solid black;
    /* color: white */
}

@media screen and (max-width: 320px) {
margin: 3px 10px;
}

@media screen and (max-width: 280px) {
margin: 3px 5px;
}
`

const ImgWrap =styled.div`
width: 100%;
/* background-color: blue; */
display: flex;
margin: 20px 0 15px 0;
`


const Img = styled.img`
height: 50px;
width: 100%;
margin: 0 auto;
`

const Info = styled.div`
padding: 0 5px;
display: flex;
/* background-color: pink; */
justify-content: center;
` 

const Title = styled.p`
font-size: clamp(0.7rem, 1.2vw, 0.8rem);
color: black;
/* background: pink */
`

const Clients = ({clients}) => {
    return (
        <ClientsSection id="clients">
            <Container>
                <Heading>
                    <h1>Our Clients</h1>
                </Heading>
                <Content>
                    {clients.map((client, index) => {
                        return (
                            <Card key={index}
                                    to={client.link}
                                >
                                <ImgWrap>
                                    <Img src={client.img} />
                                </ImgWrap>
                                <Info>
                                    <Title>{client.name}</Title>
                                </Info>
                            </Card>
                        )
                    })}
                </Content>
            </Container>
        </ClientsSection>
    )
}

export default Clients
