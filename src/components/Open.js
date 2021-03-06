import React, {useState, useEffect, useRef} from 'react'
import styled, {css} from 'styled-components/macro'
import { Button } from './Button'
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

const OpenSection = styled.section`
height: 100vh;
max-height: 1100px;
position: relative;
overflow: hidden;
`

const OpenWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
/* background-color: pink; */
`

const OpenSlide=styled.div`
z-index: 1;
width: 100%;
height: 100%;
`


const OpenSlider=styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

&::before {
content: '';
position: absolute;
z-index: 2;
width: 100%;
height: 100vh;
bottom: 0vh;
left: 0;
overflow: hidden;
opacity: 0.9;
background: linear-gradient( 
    to right, 
    rgba(0,0,0,0.5), 
    rgba(0,0,0,0.3), 
    rgba(0,0,0,0.1) );
}
`


const OpenImage=styled(motion.img)`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;

`


const OpenContent=styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
max-width: 1600px;
width: calc(100% - 100px);
/* background-color: pink; */
color: white;

h1{
font-size: clamp(1rem, 8vw, 3rem);
font-weight: 300;
text-transform: uppercase;
text-shadow: 0 0 20px rgba(0,0,0,0.4);
text-align: left;
margin-bottom: 0.8rem;
}

p{
margin-bottom: 1.2rem;
text-shadow: 0 0 20px rgba(0,0,0,0.4);

}
`

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`

const SliderButtons =styled.div`
position: absolute;
bottom: 50px;
/* right: 50px; */
display: flex;
z-index: 10;
`

// Reusable style for arrow buttons
const ArrowButtons = css`
width: 50px;
height: 50px;
color: white;
cursor: pointer;
background: transparent;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
    background: #01bf71;
    transform: scale(1.2);
}
`

const PreviousArrow =styled(IoArrowBack)`
${ArrowButtons}
`

const NextArrow =styled(IoArrowForward)`
${ArrowButtons}
`



const Open = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    // Autoslide function

    // useEffect(() => {
    //     const nextSlide = () => {
    //         setCurrent(current => (current === length - 1 ? 0 : current + 1))
    //     }

    //     timeout.current = setTimeout(nextSlide, 2000)

    //     return function () {
    //         if(timeout.current) {
    //             clearTimeout(timeout.current)
    //         }
    //     }
    // }, [current, length])

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        };

        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
 

    // create animation
    const fadeAnimation = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 0.8}},
        exit: {opacity: 0}
    }; 



    return (
        <OpenSection>
            <OpenWrapper>

                <AnimatePresence>
                    {slides.map((slide, index) => {
                        return (
                            <OpenSlide key={index}>
                                {index === current && (
                                    <OpenSlider>
                                        <OpenImage src={slide.image}
                                                    alt={slide.alt}
                                                    initial='hidden'
                                                    animate='visible'
                                                    exit='exit'
                                                    variants={fadeAnimation}
                                                    />
                                        <OpenContent>
                                            <h1 data-aos='fade-right'
                                                data-aos-duration='800'
                                                >
                                                {slide.title}
                                            </h1>
                                            <p data-aos='fade-right'
                                                data-aos-duration='800'
                                                data-aos-delay='300'
                                                css={`font-style: italic;
                                                font-weight: 500;`}
                                                >
                                                {slide.text}
                                            </p>
                                            <Button to={slide.path} 
                                                    primary='true'
                                                    data-aos='fade-right'
                                                    data-aos-duration='800'
                                                    data-aos-delay='300'
                                                    >
                                                    {slide.label}
                                                    <Arrow/>
                                            </Button>
                                        </OpenContent>
                                </OpenSlider>
                                )}
                            </OpenSlide>
                        )
                    })}
                </AnimatePresence>

                <SliderButtons>
                    <PreviousArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </OpenWrapper>
        </OpenSection>
    )
}

export default Open
