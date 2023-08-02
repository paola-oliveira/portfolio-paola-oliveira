import {
  DivCardProjects,
  DivTotalCards,
  ImgProjects,
  LinkProjects,
  ProjectsImg,
  SectionProjects,
  TextProjects,
} from "./Styled";

import projects from "../../images/projects.png";
import cipher from "../../images/cipher.png";
import datalovers from "../../images/datalovers.png";
import social from "../../images/social.png";
import mdlinks from "../../images/mdlinks.png";
import burguerqueen from "../../images/burguerqueen.png";
import organize from "../../images/organize.png";
import loggi from "../../images/loggi.png";
import finder from "../../images/finder.png";



function Projects() {
  return (
    <SectionProjects id="projetos">
      <ImgProjects src={projects} />
      <DivTotalCards>
        <DivCardProjects>
          <ProjectsImg src={cipher} />
          <TextProjects>Cifra de César</TextProjects>
          <LinkProjects
            href="https://github.com/paola-oliveira/SAP009-cipher"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confira o Projeto
          </LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={datalovers} />
          <TextProjects>Data Lovers</TextProjects>
          <LinkProjects  
            href="https://github.com/paola-oliveira/SAP009-data-lovers"
            target="_blank"
            rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={social} />
          <TextProjects>Social NetWork</TextProjects>
          <LinkProjects
          href="https://github.com/paola-oliveira/SAP009-social-network"
          target="_blank"
          rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={mdlinks} />
          <TextProjects>MdLinks</TextProjects>
          <LinkProjects
          href="https://github.com/paola-oliveira/SAP009-md-links"
          target="_blank"
          rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={burguerqueen} />
          <TextProjects>Burguer Queen</TextProjects>
          <LinkProjects
          href="https://github.com/paola-oliveira/Bobs-Burguer"
          target="_blank"
          rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={organize} />
          <TextProjects>Organizador de Roteiros</TextProjects>
          <LinkProjects
          href="https://github.com/paola-oliveira/Organizador-de-roteiros"
          target="_blank"
          rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={loggi} />
          <TextProjects>Desafio Loggi</TextProjects>
          <LinkProjects
          href="https://github.com/paola-oliveira/desafio-frontend"
          target="_blank"
          rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={finder} />
          <TextProjects>GitHub Finder</TextProjects>
          <LinkProjects
          href="https://github.com/paola-oliveira/GitHub-Finder"
          target="_blank"
          rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
      </DivTotalCards>
    </SectionProjects>
  );
}

export default Projects;
