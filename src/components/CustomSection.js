import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { IoMdArrowForward } from 'react-icons/io'


const Section =styled.section`
background: #000d1a;
padding: 12rem 0rem ;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 5rem;
`

const Container =styled.div` 
background: white;
padding: 3rem 2rem;
position: relative;
`

const Wrap =styled.div`
/* background-color: blue; */
max-width: 1200px;
margin: 0 auto;
`

const ColumnLeft =styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 -15px;
justify-content: flex-start;
padding: 1rem;
`

const Content =styled.div`
/* background-color: pink; */
flex: 0 0 50%;

h1{
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
}

p{
    margin-bottom: 1rem;
    line-height: 1.5;
    font-size: clamp(0.8rem, 2vw, 1rem);
    text-align: justify;
}

@media screen and (max-width: 768px){
flex: 0 0 100%;
max-width: 100%;
margin-top: 250px
}
`

const ColumnRight =styled.div`
position: absolute;
top: -80px;
right: 0;
max-width: 850px;
height: 140%;
width: 45%;
padding-left: 1rem;
padding-right: 1rem;


@media screen and (max-width: 768px){
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
}
`

const Image =styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`
const Arrow = styled(IoMdArrowForward)`
margin-left: 10px;
`



const CustomSection = ({heading, paragraph1, paragraph2, img, color, link}) => {
    return (
        <Section>
          <Container>
            <Wrap>
                <ColumnLeft> 
                    <Content
                        data-aos='fade-right'
                        data-aos-duration="1000"
                        data-aos-once="true"
                        data-aos-delay='300'
                    >
                        <h1 style={{color:`${color}`}}>{heading}</h1>
                        <p>{paragraph1}</p>
                        <p>{paragraph2}</p>
                        <Button to={link}>
                            Learn more
                            <Arrow/>
                        </Button>
                    </Content>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={img}
                            data-aos='fade-left'
                            data-aos-duration="1000"
                            data-aos-once="true"
                            data-aos-delay='300'
                    />
                </ColumnRight>
            </Wrap>
          </Container>
        </Section>
    )
}

export default CustomSection
