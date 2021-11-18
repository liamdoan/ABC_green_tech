import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Scooter from '../images/img-scooter.jpg'
import Scooter2 from '../images/img-scooter2.jpg'
import { Button } from './Button'


const VehiclesSection = styled.section`
background-color: #000d1a;
/* width: 100%; */
height: 100%;
margin: 0rem 2rem 10rem 2rem ;
`

const Container = styled.div`
/* background-color: blue; */
height: 100%;
padding: 5rem 0rem;
`

const Heading = styled.div`
background-color: white;
padding: 10px 10px 20px;
margin: 0 2rem 0 2rem;
max-width: 100%;

@media screen and (max-width: 780px) {
 margin: 0  
}
`

const Title = styled.h1`
/* background-color: red; */
font-size: clamp(1.5rem, 6vw, 2rem);
color: #2cdb97;
padding: 0.5rem 0;
margin-bottom: 1rem;

@media screen and (max-width: 768px) {
    text-align: start;
}
`

const Paragraph = styled.p`
/* background-color: purple; */
display: flex;
text-align: justify;
color: black;
font-size: clamp(0.8rem, 2vw, 1rem);

p{
flex: 0 0 58%;
}

@media screen and (max-width: 780px){
    p{
        flex: 0 0 100%;
    }
}
`


const InfoRow = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding: 1rem 0;

@media screen and (max-width: 780px) {
    flex-direction: column;
}
`

const InfoWrap = styled.div`
padding: 2rem 1.5rem;
min-height: 100%;
height: 100%;
/* background-color: red; */

h2{
    color: white;
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: clamp(0.8rem, 2vw, 1rem);
}

@media screen and (max-width:780px) {
margin-bottom: 1rem;
}
`

const Image = styled.img`
width: 100%;
height: 100%;
max-width: 750px;
max-height: 450px;
object-fit: cover; 
margin-bottom: 1rem;
`


const Arrow = styled(IoMdArrowForward)`
margin-left: 10px;
`



const Vehicles = () => {
    return (
        <VehiclesSection>
            <Container>
                <Heading>
                    <Title data-aos='fade-right'
                        data-aos-duration="1000"
                        data-aos-once="true">
                        E-vehicles
                    </Title>
                    <Paragraph>
                        <p
                        data-aos='fade-right'
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        data-aos-once="true">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis libero corrupti minima ab, tenetur fuga. Accusantium veritatis aperiam neque facere quibusdam provident. Natus eligendi ipsum fuga exercitationem sint! Id et odio qui perferendis dolorum repudiandae incidunt nulla labore iusto suscipit, optio minus culpa nam ab minima! Sed nobis et laudantium facere libero. Veniam itaque inventore libero, reprehenderit consectetur excepturi cum!</p>
                    </Paragraph>
                </Heading>
                <InfoRow>
                    <InfoWrap
                        data-aos='zoom-out-up'
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        data-aos-once="true"
                    >
                        <Image src={Scooter} alt='home'/>
                        <h2>Economical potential of scooters </h2>
                        <Button primary="true"
                                
                                to="/vehicles">
                            <p>Learn more</p>
                            <Arrow />
                        </Button>
                    </InfoWrap>
                    <InfoWrap
                        data-aos='zoom-out-down'
                        data-aos-duration="1000"
                        data-aos-delay="400"
                        data-aos-once="true"
                    >
                        <Image src={Scooter2}
                                alt='home'
                                css={`
                                margin-top: -100px;
                                @media screen and (max-width: 780px){
                                    margin-top: 0.5rem;
                                }
                                `}
                        />
                        <h2>Safety of using scooters during night time</h2>
                        <Button primary="true" 
                                to="/vehicles">
                            <p>Learn more</p>
                            <Arrow />
                        </Button>
                    </InfoWrap>
                </InfoRow>
            </Container>
        </VehiclesSection>
    )
}

export default Vehicles
