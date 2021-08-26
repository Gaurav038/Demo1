import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo.png'

export default function Navbar() {
    return (
        <NavbarStyled>
              <div className="logo">
                <img src={logo} alt="" />
            </div>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.nav`
   display: flex;
   text-align: center;
   justify-content: center;
   .logo{
       img{
           width: 35rem;
       }
       @media screen and (max-width: 1300px){
        img{
            width: 60%;
        }
      }
   }
`;