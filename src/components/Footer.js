import React from 'react'
import styled from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Footer() {
    return (
        <FooterStyled>
            <div className="box">
                <i> <CallIcon className="svg" /> </i>
                <h6>
                    Toll Free 1235456789
                </h6>
            </div>
            <div className="box">
                <i> <LanguageIcon className="svg" /> </i>
                <h6>
                    www.facebook.com
                </h6>
            </div>
            <div className="box">
                <i> <FacebookIcon className="svg" /> </i>
                <h6>
                    www.Group.com
                </h6>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.nav`
    padding-top: 2rem;
    height: 6%;
    color: white;
    background-color: #FF2E2E;
    display: flex;
    justify-content: space-around;
    .box{
         display: flex;
         .svg{
            transform: scale(1.8);
            padding-right: .5rem;
            }
    }
    @media screen and (max-width: 600px){
        font-size: 50%;
        display: block;
        .box{
            justify-content: center;
            .svg{
            transform: scale(1.3);
            padding-right: .5rem;
            }
        }
    }
`;