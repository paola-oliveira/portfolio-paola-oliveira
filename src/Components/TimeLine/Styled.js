import { styled } from 'styled-components';

export const DivCircle = styled.div`
    border: 8px solid #5B8DC9;
    border-radius: 100%;
    background-color: transparent;

    @media (max-width: 400px) {
        border: 7px solid #5B8DC9;
    }
`;

export const DivExperience = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const ImgExperience = styled.img`
    width: 550px;
    margin-bottom: 30px;

    @media (max-width: 573px) {
        width: 500px;
  }

  @media (max-width: 500px) {
        width: 460px;
    }

    @media (max-width: 480px) {
        width: 380px;
    }

    @media (max-width: 400px) {
        width: 340px;
    }
`;

export const ImgEducation = styled.img`
    width: 520px;
    margin-bottom: 30px;
    margin-top: -20px;

    @media (max-width: 573px) {
        width: 470px;
  }

    @media (max-width: 500px) {
        width: 440px;
    }

    @media (max-width: 480px) {
        width: 370px;
    }

    @media (max-width: 400px) {
        width: 350px;
    }
`;

export const SectionExperienceEducation = styled.section`
    margin-top: 40px;
    margin-bottom: 70px;
    width: 100%;
    display: flex;
    justify-content: space-around;
        @media (max-width: 1216px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .ant-timeline-item-head.ant-timeline-item-head-custom {
            background-color: transparent;
        }
`;

export const TextTimeline = styled.p`
    font-size: 17px;
    font-weight: 500;
    color: #000;
    font-family: 'Quicksand', sans-serif;

    @media (max-width: 573px) {
        font-size: 15px;
  }

  @media (max-width: 500px) {
        font-size: 14px;
  }

  @media (max-width: 480px) {
        font-size: 12px;
    }

`;
