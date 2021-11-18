import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
background: ${({ primary}) => (primary ? '#01bf71' : '#000d1a')};
white-space: nowrap;
outline: none;
border: none;
width: ${({full}) => (full ? "100%" : "150px")};
min-width: 100px; 
cursor: pointer;
text-decoration: none;
transform: 0.3s;
display: flex;
justify-content: center;
align-items: center;
padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
color: ${({primary}) => (primary ? 'black' : 'white')};
font-size:  ${({big}) => (big ? '20px' : '14px')};
transition: 0.3s ease-in-out;

&:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in-out
}
`