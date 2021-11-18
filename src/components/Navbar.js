import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import {menuData} from '../data/MenuData'
import { Button } from './Button'
import Bars from '../images/bars.svg'
import { Link as LinkScroll } from 'react-scroll'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Nav = styled.div`
height: 60px;
/* background: ${({scrollNav}) => (scrollNav ? '#455A64' : 'transparent') }; */
/* background-color: black; */
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index: 99;
position: fixed;
width: 100%;
transition: 0.5s ease-in-out;
`

// create reusable design mor multiple components
const NavLinks = css`
color: white;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`

const Logo = styled(Link)`
${NavLinks}
font-style: italic;
`


const MenuBars = styled.i`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
    /* background-color: white; */
}
`


const NavMenu = styled.i`
display: flex;
align-items: center;
margin-right: -48px;
/* background-color: orange; */

@media screen and (max-width: 768px) {
    display: none;
}
`


const NavMenuLinks = styled(Link)`
color: white;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
    display: none;
}
` 

const Navbar = ({toggle}) => {

    const [nav, setNav] = useState(false)
    
    const location = useLocation()
 
    const changeBackground = () => {
        if (window.pageYOffset >= 60) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener ('scroll', changeBackground)
        }

        watchScroll();

        return () => {
            window.removeEventListener('scroll', changeBackground)
        }
    }, []);


    let style = {
        backgroundColor: nav || location.pathname !== "/ABC_green_tech" ? '#455A64' : 'transparent',
        transition: '0.5s'
    }

    // const[scrollNav, setScrollNav] = useState(false)

    // const changeNav = () => {
    //     if(window.scrollY >= 80){
    //         setScrollNav(true)
    //     } else {
    //         setScrollNav(false)
    //     } 
    // } 

    // useEffect (() => {
    //     window.addEventListener('scroll', changeNav)
    // }, [])
 

    return (
        <Nav style={style}>
        {/* <Nav scrollNav={scrollNav}> */}
            <Logo to='/ABC_green_tech'> 
                ABC GreenTech
            </Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks key={index}
                                to={item.link}
                                smooth={true}
                                duration={1000}
                                spy={true}
                                exact='true' offset={-80}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
           <NavBtn>
               <Button to='/contact' >
                   Contact
               </Button>
           </NavBtn>
        </Nav>
    )
}

export default Navbar
