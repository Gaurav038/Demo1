import React from 'react'
import styled from 'styled-components';
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'

export default function Middle() {
    return (
        <MiddleStyled>
            <div className="box-1">
                <div className="left-content">
                    <img src={img1} alt="logo img" />
                </div>
                <div className="right-content">
                    <h6> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h6>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                    <img src={img2} alt="logo img" />
                    <h4 className="font">Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h4>
                </div>
            </div>
            <div className="box-2">
                <h6 className="heading">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h6>
                <img src={img3} alt="logo img" />
                <h6>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h6>
                <hr className="line"></hr> 
                <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
                <h6> CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL </h6>
           </div>
            



        </MiddleStyled>
    )
}

const MiddleStyled = styled.nav`
    background-color: #ffefd5;
    .box-1{
    display: flex;
    align-items: center;
    justify-content: center;
        .left-content{
            flex: 2;
            justify-content: center;
            img{
                width: 35rem;
            }
        }
        .right-content{
            flex: 4;
            img{
                width: 65rem;
            }
            .font{
                font-weight: 100;
            }
        }
    }

    .box-2{
        text-align: center;
        img{
                width: 65rem;
            }
        .line{
            border-color: red;
            border-style: inset;
            line-height: 1.5px;
        }
    }
     @media screen and (max-width: 1490px){
         font-size: 90%;
        .box-1{
            display: block;
            text-align: center;
            .left-content{
                img{
                    width: 45%;
                }
            }
        }
      }
      @media screen and (max-width: 1100px){
        font-size: 70%;
        .box-1{
            display: block;
            text-align: center;
            .right-content{
                img{
                width: 100%;
              }
            }    
        }
        .box-2{
            display: block;
            text-align: center;
                img{
                width: 80%;
              }  
        }
      }
    
`;
