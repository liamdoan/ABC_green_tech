import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { IoMdArrowForward } from 'react-icons/io'


const Section =styled.section`
width: 100%;
height: 100%;
padding: 2rem 0rem;
margin-bottom: 5rem;
/* background-color: pink; */
`

const Container = styled.div`
padding: 2rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`

const ColumnLeft = styled.div`
/* background-color: blue; */
display: flex;
justify-content: center;
order: ${({reverse}) => reverse ? '2' : '1'};

`

const ContentWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;

h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}

p{
    margin-bottom: 2rem;
    font-size: clamp(0.8rem, 2vw, 1rem);
    text-align: justify;
    /* color: white; */
}
`


const ColumnRight = styled.div`
padding: 1rem 2rem;
display: flex;
justify-content: center;
align-items: center;
order: ${({reverse}) => reverse ? '1' : '2'};
max-height: 700px;


@media screen and (max-width: 768px) {
order: ${({reverse}) => reverse ? '2' : '1'};
}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        width: 90%;
        height: 90%;
    }
}

` 
const Arrow = styled(IoMdArrowForward)`
margin-left: 10px;
`
  


const InfoSection = ({heading, paragraph1, paragraph2, paragraph3, buttonLabel, reverse, image, delay, color, link}) => {
    return (
        <Section>
            <Container> 
                <ColumnLeft 
                    reverse={reverse}
                    data-aos='fade-up'
                    data-aos-duration='2000'
                    data-aos-once='true'
                    data-aos-delay={delay}>
                     <ContentWrap>
                        <h1 style={{color:`${color}`}}>{heading}</h1>
                        <p>{paragraph1}</p>
                        <p>{paragraph2}</p>
                        <p>{paragraph3}</p>
                        <Button to={link}>
                            {buttonLabel}
                            <Arrow/>
                        </Button>
                    </ContentWrap>
                </ColumnLeft>
                <ColumnRight 
                    reverse={reverse}
                    data-aos='zoom-in'
                    data-aos-duration='2000'
                    data-aos-once='true'
                    data-aos-delay={delay}
                >
                    <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
