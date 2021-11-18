import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Home1 from '../images/img1.jpg'
import Home2 from '../images/img2.jpg'


const ListingSection = styled.section`
width: 100%;
height: 100%;
padding: 10rem calc((100vw - 1300) / 2);
`

const Container = styled.div`
/* background-color: pink; */
height: 100%;
width: 100%;
padding: 2rem 1rem;
`

const Heading = styled.div`
font-size: 1.5rem;
padding: 2rem 1rem;
margin-bottom: 40px;

@media screen and (max-width: 768px) {
    text-align: start;
}
`

const InfoRow = styled.div`
display: flex;
flex-direction: row;
padding: 1rem 0;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`

const InfoWrap = styled.div`
padding: 1rem 1rem;
min-height: 550px;
height: 100%;
/* background-color: red; */

h2{
    margin-bottom: 1rem;
    font-weight: 400;
}

@media screen and (max-width:768px) {
margin-bottom: 1rem;
}
`

const Image = styled.img`
width: 100%;
height: 100%;
/* max-width: 600px;
max-height: 400px; */
object-fit: cover;
margin-bottom: 1rem;
`

const InfoLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
color: #000d1a;
width: 140px;
transition: 0.3s;

:hover {
    transform: translateY(-2px)
}
`

const Arrow = styled(IoMdArrowForward)`
margin-left: 10px;
`



const Listings = () => {
    return (
        <ListingSection>
            <Container>
                <Heading>
                    <h1 data-aos='fade-right'
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        View new homes
                    </h1>
                </Heading>
                <InfoRow>
                    <InfoWrap
                        data-aos='zoom-out-up'
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        <Image src={Home1} alt='home'/>
                        <h2>10 bed 10 bath house in Helsinki</h2>
                        <InfoLink to="/homes">
                            <p>View details</p>
                            <Arrow />
                        </InfoLink>
                    </InfoWrap>
                    <InfoWrap
                        data-aos='zoom-out-down'
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        <Image src={Home2} alt='home'
                                css={`
                                margin-top: 120px;
                                @media screen and (max-width: 768px){
                                    margin-top: 2rem;
                                }
                                `}
                        />
                        <h2>5 bed 5 bath house in Tampere</h2>
                        <InfoLink to="/homes">
                            <p>View details</p>
                            <Arrow />
                        </InfoLink>
                    </InfoWrap>
                </InfoRow>
            </Container>
        </ListingSection>
    )
}

export default Listings
