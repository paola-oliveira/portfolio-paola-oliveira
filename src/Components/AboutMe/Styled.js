import { styled } from "styled-components";
import {MdLocationPin} from "react-icons/md";

export const SectionAboutMe = styled.section`
    margin-top: 132px;
    margin-bottom: 70px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #FFF4EB;
    align-items: center;

    @media (max-width: 877px) {
        display: flex;
        flex-direction: column;
        margin-top: 100px;
    }
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

    @media (max-width: 877px) {
        height: 400px;
        width: 400px;
    }

    @media (max-width: 573px) {
        height: 300px;
        width: 300px;
    }

    @media (max-width: 400px) {
        height: 260px;
        width: 260px;
    }
`; 

export const ImgProfile = styled.img`
    width: 250px;
    margin-top: 8px;

    @media (max-width: 877px) {
        width: 215px;
    }

    @media (max-width: 573px) {
        width: 150px;
    }

    @media (max-width: 400px) {
        width: 120px;
    }
`; 

export const StyledMdLocationPin = styled(MdLocationPin)`
  font-size: 24px;
  color: #FFF4EB;

  @media (max-width: 573px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
    }

`;

export const TextProfile = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #FFF4EB;
    margin-top: 8px;

    @media (max-width: 573px) {
    font-size: 16px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
    }
`;

export const ImgAboutMe = styled.img`
    width: 380px;

    @media (max-width: 1000px) {
        width: 350px;
    }

    @media (max-width: 918px) {
        padding: 8px;
    }

    @media (max-width: 820px) {
        margin-top: 15px;
        width: 380px;
    }

    @media (max-width: 573px) {
        width: 320px;
  }

  @media (max-width: 500px) {
        width: 300px;
    }

    @media (max-width: 400px) {
        width: 250px;
    }
    
`;

export const TextAboutMe = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #000;
    margin-top: 8px;
    text-align: justify;

    @media (max-width: 1000px) {
        font-size: 18px;
    }

    @media (max-width: 820px) {
        font-size: 20px;
    }

    @media (max-width: 500px) {
        font-size: 17px;
    }

    @media (max-width: 400px) {
        font-size: 15px;
    }
`;

export const DivRight = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 820px) {
        width: 45vw;
    }

    @media (max-width: 573px) {
        width: 55vw;
  }

    @media (max-width: 500px) {
        width: 60vw;
  }
`; 
