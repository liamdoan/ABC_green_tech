import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import styled, {css} from 'styled-components/macro'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa'


const FooterSection =styled.section`
background: #000d1a;
color: white;
width: 100%;
min-height: 600px;
padding: 3rem calc((100vw - 1300px) / 2);
`

const Container = styled.div`
/* background: pink; */
height: 100%;
width: 100%;
padding: 2rem 2rem 0 2rem;
`

const FooterTop = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 4rem 0rem;

h4 {
color: #b6a89c;
}

@media screen and (max-width: 768px){
flex-direction: column;
}
`

const FooterMainInfo = styled.div`
/* background-color: red; */
display: flex;
flex-direction: column;
`

const ContactInfo = styled.div`
p {
    margin: 0 0 12px 0;
    font-style: italic;
    font-size: clamp(0.7rem, 4.5vw, 1rem);
    color: #b6b6b6;
}
`

const Quote = styled.div`
flex: 1;
padding: 2rem 0;

h1{
    font-size: clamp(2rem, 8vw, 5rem);
}
`

const FooterInfoWrap = styled.div`
/* background-color: red; */
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: 7px;

`

const FooterInfo = styled.div`
/* background-color: blue; */
padding: 2rem;
line-height: 3;
display: flex;
flex-direction: column;
margin: 0 auto;
/* margin-right: 8rem; */

a{
    color: white;
    text-decoration: none;
    font-size: clamp(0.5rem, 3vw, 1rem);
    line-height: 1.5rem;
}

@media screen and (max-width: 768px){
    margin-top: 1rem;
    padding: 1rem 0
}
`


const FooterBottom = styled.div`
/* background: orange; */
display: flex;
padding: 2rem 0;
justify-content: space-between;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`


const SocialIconWrap = styled.div`
/* background: pink; */
display: flex;
align-items: center;
justify-content: center;
/* max-width: 500px; */
`


const SocialIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0 1rem;
width: 100%;


@media screen and (max-width: 768px) {
margin-bottom: 2rem;
width: 100%
}
`

const Icons =css`
font-size: clamp(1rem, 6vw, 2rem);
margin-right: 0.5rem;
color: #b6a89c;
transition: 0.3s ease-in-out;

&:hover{
    color: #01bf71;
    transform: scale(1.2);
    transition: 0.3s ease-in-out
}
`

const Facebook = styled(FaFacebookF)`
${Icons}
`
const Instagram = styled(FaInstagram)`
${Icons}
`
const Twitter = styled(FaTwitter)`
${Icons}
`
const Youtube = styled(FaYoutube)`
${Icons}
`
const Linkedin = styled(FaLinkedinIn)`
${Icons}
`


const Contact = styled.div`
/* background: red; */
/* width: 50%; */
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
    width: 100%;
    justify-content: center;
}
`
const CopyRight = styled.p`
/* background-color: red; */
font-size: 12px;
margin-top: 30px;
display: flex;
justify-content: center;
`


const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <FooterTop>
                    <FooterMainInfo>
                        <Quote>
                            <h1>Let's build <br/> a better future</h1>
                        </Quote>
                        <ContactInfo>
                            <p>Address: Abcdekatu 9, 01234, Kaupunki, Maa</p>
                            <p>Phone: (+123)-123-456-789</p>
                            <p>Email: contact@abc.com</p>
                        </ContactInfo>
                    </FooterMainInfo>
                    <FooterInfoWrap>
                        <FooterInfo>
                            <h4>Contact</h4>
                            <Link to="/developing">
                                FAQ
                            </Link>
                            <Link to="/developing">
                                Support
                            </Link>
                            <Link to="/developing">
                                Questions
                            </Link>
                        </FooterInfo>
                        <FooterInfo>
                            <h4>Privacy</h4>
                            <Link to="/developing">
                                Term & Conditions
                            </Link>
                            <Link to="/developing">
                                Clients' privacy
                            </Link>
                        </FooterInfo>
                        <FooterInfo>
                            <h4>Offices</h4>
                            <Link to="/developing">
                                Helsinki
                            </Link>
                            <Link to="/developing">
                                Tampere
                            </Link>
                            <Link to="/developing">
                                Oulu
                            </Link>
                        </FooterInfo>
                    </FooterInfoWrap>
                </FooterTop>
                <FooterBottom>
                    <SocialIconWrap>
                        <SocialIcons>
                            <a href="//www.facebook.com" 
                                rel="noopener noreferrer"
                                target="_blank">
                                    <Facebook />
                                </a>
                        </SocialIcons>
                        <SocialIcons>
                            <a href="//www.instagram.com" 
                                rel="noopener noreferrer"
                                target="_blank">
                                    <Instagram />
                                </a>
                        </SocialIcons>
                        <SocialIcons>
                            <a href="//www.twitter.com" 
                                rel="noopener noreferrer"
                                target="_blank">
                                    <Twitter />
                                </a>
                        </SocialIcons>
                        <SocialIcons>
                            <a href="//www.youtube.com" 
                                rel="noopener noreferrer"
                                target="_blank">
                                    <Youtube />
                                </a>
                        </SocialIcons>
                        <SocialIcons>
                            <a href="//www.linkedin.com" 
                                rel="noopener noreferrer"
                                target="_blank">
                                    <Linkedin />
                                </a>
                        </SocialIcons>
                    </SocialIconWrap>
                    <Contact>
                        <Button to="/contact" primary="true">
                            Let's contact <IoMdArrowForward 
                            css={`
                            margin-left: 5px;
                            `}/>
                        </Button>
                    </Contact>
                </FooterBottom>
                <CopyRight>
                    Copyright &copy;
                    {new Date().getFullYear()}&nbsp; | All Rights Reserved
                </CopyRight>
            </Container>
        </FooterSection>
    )
}

export default Footer
