import { styled } from "styled-components";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SiLinkedin, SiGithub  } from "react-icons/si";


function Contats () {
    return (
        <SectionContats id="contatos">
            <ImgContats src="../../../public/Images/contats.png"/>
            <DivEmail>
                <IconEmail/>
                <TextEmail>paolanatalia_oliveira@outlook.com</TextEmail>
            </DivEmail>
            <DivNets>
                <a href="https://www.linkedin.com/in/paola-natalia-oliveira/" target="_blank" rel="noopener noreferrer">
                    <IconLinkedin />
                </a>
                <a href="https://www.linkedin.com/in/paola-natalia-oliveira/" target="_blank" rel="noopener noreferrer">
                    <IconGitHub />
                </a>
            </DivNets>
        </SectionContats>
    )
}

export default Contats; 

export const SectionContats = styled.section`
    width: 100%;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
`; 

export const ImgContats = styled.img`
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

export const IconEmail = styled(MdOutlineMarkEmailUnread)`
    color: #5B8DC9;
    font-size: 40px;
    
    @media (max-width: 500px) {
        font-size: 33px;
    }
`;

export const TextEmail = styled.span`
    font-size: 25px;

    @media (max-width: 500px) {
        font-size: 18px;
    }
`;

export const DivEmail = styled.div`
    display: flex;
    gap: 8px;
`;

export const DivNets = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 8px;
`;

export const IconLinkedin = styled(SiLinkedin)`
    color: #5B8DC9;
    font-size: 40px;

    @media (max-width: 500px) {
        font-size: 33px;
    }
`;

export const IconGitHub = styled(SiGithub)`
    color: #5B8DC9;
    font-size: 40px;

    @media (max-width: 500px) {
        font-size: 33px;
    }
`;