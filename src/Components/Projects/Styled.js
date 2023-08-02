import { styled } from "styled-components";

export const ImgProjects = styled.img`
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

export const SectionProjects = styled.section`
    margin-bottom: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DivCardProjects = styled.div`
    border-radius: 40px 20px;
    height: 300px;
    width: 300px;
    background-color: #5B8DC9;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 10px; /* Adiciona margem entre os cards */

    @media (max-width: 500px) {
        height: 250px;
        width: 250px;
    }

    @media (max-width: 400px) {
        height: 210px;
        width: 210px;
    }
`;

export const DivTotalCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

        @media (max-width: 1014px) {
        margin-left: 15px;
    }
`;

export const ProjectsImg = styled.img`
    width: 160px;
    height: 160px;
    margin-top: 20px;
    border: 4px solid #FFF4EB;
    border-radius: 100px;

    @media (max-width: 500px) {
        height: 130px;
        width: 130px;
    }

    @media (max-width: 400px) {
        height: 100px;
        width: 100px;
    }
    
`;

export const LinkProjects = styled.a`
    text-align: center;
    color: #5B8DC9;
    font-weight: bold;
    background-color: #FFFCF3;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
    text-decoration: underline;
    color: #5B8DC9;
    font-weight: 700;
    }

    @media (max-width: 500px) {
        padding: 0.5rem;
        font-size: 15px;
    }
`;

export const TextProjects = styled.p`
    color: #FFFCF3;
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 500px) {
        font-size: 16px;
    }
`;