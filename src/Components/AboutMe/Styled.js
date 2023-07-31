import { styled } from "styled-components";
import {MdLocationPin} from "react-icons/md";

export const SectionAboutMe = styled.section`
    margin-top: 132px;
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: space-around;
    background-color: #FFF4EB;
`; 

export const DivLeft = styled.div`
    display: flex;
`; 

export const DivCard = styled.div`
    border-radius: 40px 20px;
    height: 450px;
    width: 450px;
    background-color: #5B8DC9;
    display: flex;
    flex-direction: column;
    align-items: center;
`; 

export const ImgProfile = styled.img`
    width: 250px;
    margin-top: 8px;
`; 

export const StyledMdLocationPin = styled(MdLocationPin)`
  font-size: 24px;
  color: #FFF4EB;
`;

export const TextProfile = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #FFF4EB;
    margin-top: 8px;
`;

export const ImgAboutMe = styled.img`
    width: 380px;
`;

export const TextAboutMe = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #000;
    margin-top: 8px;
    text-align: justify
`;

export const DivRight = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`; 
