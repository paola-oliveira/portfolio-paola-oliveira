import { styled } from "styled-components";

export const ImgThankYou = styled.img`
    width: 550px;
    margin-bottom: 30px;

    @media (max-width: 573px) {
        width: 500px;
  }

  @media (max-width: 500px) {
        width: 470px;
    }

    @media (max-width: 480px) {
        width: 390px;
    }

    @media (max-width: 400px) {
        width: 350px;
    }
`;

export const SectionThankYou = styled.section`
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;