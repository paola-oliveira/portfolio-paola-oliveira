import { styled } from "styled-components";

function Projects () {
    return (
        <SectionProjects>
                <ImgProjects src="../../../public/Images/projects.png"/>
                <DivTotalCards>
                    <DivCardProjects>
                        <ProjectsImg src="../../../public/Images/cipher.png"/>
                        <TextProjects>Cifra de César</TextProjects>
                        <LinkProjects>Confira o Projeto</LinkProjects>
                    </DivCardProjects>
                    <DivCardProjects>
                        <ProjectsImg src="../../../public/Images/datalovers.png"/>
                        <TextProjects>Data Lovers</TextProjects>
                        <LinkProjects>Confira o Projeto</LinkProjects>
                    </DivCardProjects>
                    <DivCardProjects>
                        <ProjectsImg src="../../../public/Images/social.png"/>
                        <TextProjects>Social NetWork</TextProjects>
                        <LinkProjects>Confira o Projeto</LinkProjects>
                    </DivCardProjects>
                    <DivCardProjects>
                        <ProjectsImg src="../../../public/Images/burguerqueen.png"/>
                        <TextProjects>Burguer Queen</TextProjects>
                        <LinkProjects>Confira o Projeto</LinkProjects>
                    </DivCardProjects>
                    <DivCardProjects>
                        <ProjectsImg src="../../../public/Images/organize.png"/>
                        <TextProjects>Organizador de Roteiros</TextProjects>
                        <LinkProjects>Confira o Projeto</LinkProjects>
                    </DivCardProjects>
                    <DivCardProjects>
                        <ProjectsImg src="../../../public/Images/loggi.png"/>
                        <TextProjects>Desafio Loggi</TextProjects>
                        <LinkProjects>Confira o Projeto</LinkProjects>
                    </DivCardProjects>
                    <DivCardProjects>
                        <ProjectsImg src="../../../public/Images/finder.png"/>
                        <TextProjects>GitHub Finder</TextProjects>
                        <LinkProjects>Confira o Projeto</LinkProjects>
                    </DivCardProjects>
                </DivTotalCards>
        </SectionProjects>
    )
}

export default Projects;

export const ImgProjects = styled.img`
    width: 550px;
    margin-bottom: 30px;
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
`;

export const DivTotalCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ProjectsImg = styled.img`
    width: 160px;
    height: 160px;
    margin-top: 20px;
    border: 4px solid #FFF4EB;
    border-radius: 100px;
`;

export const LinkProjects = styled.a`
    text-align: center;
    color: #5B8DC9;
    font-weight: bold;
    background-color: #FFFCF3;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
`;

export const TextProjects = styled.p`
    color: #FFFCF3;
    font-size: 18px;
    font-weight: 600;
`;
