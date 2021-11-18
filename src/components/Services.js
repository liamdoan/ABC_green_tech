import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components/macro'

const ServicesSection = styled.section`
background-color: black;
margin: 0px 0px 40px 0px;
`

const Container = styled.div`
padding: 3rem 1rem;

@media screen and (max-width: 320px) {
    padding: 3rem 0;
}
`

const Heading = styled.div`
h1{
/* background-color: red; */
text-align: center;
padding: 10px 15px 25px 15px;
color: white;
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
/* background-color: whitesmoke; */
height: 120px;
min-height: 80px;
width: 120px;
min-width: 80px;
margin: 3px;
text-decoration: none;
/* display: flex;
flex-direction: column; */
/* justify-content: space-around; */
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.2);
    border: 3px solid white;
    /* color: white */
} 
`

const ImgWrap =styled.div`
width: 100%'';
/* background-color: blue; */
display: flex;
margin: 20px 0 15px 0;
`


const Img = styled.img`
height: 40px;
width: 40px;
margin: 0 auto;
`

const Info = styled.div`
padding: 0 5px;
display: flex;
/* background-color: pink; */
justify-content: center;
` 

const Title = styled.p`
font-size: clamp(0.7rem, 1vw, 0.8rem);
color: black;
`

const Services = ({services}) => {
    return (
        <ServicesSection >
            <Container>
                <Heading>
                    <h1>Our Services</h1>
                </Heading>
                <Content>
                    {services.map((service, index) => {
                        return ( 
                            <Card key={index}
                                to={service.link}
                                style={{backgroundColor:`${service.color}`}}>
                                <ImgWrap>
                                    <Img src={service.img} />
                                </ImgWrap>
                                <Info>
                                    <Title>{service.title}</Title>
                                </Info>
                            </Card>
                        )
                    })}
                </Content>
            </Container>
        </ServicesSection>
    )
}

export default Services
