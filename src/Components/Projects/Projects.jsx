import {
  DivCardProjects,
  DivTotalCards,
  ImgProjects,
  LinkProjects,
  ProjectsImg,
  SectionProjects,
  TextProjects,
} from "./Styled";

function Projects() {
  return (
    <SectionProjects id="projetos">
      <ImgProjects src="../../../public/Images/projects.png" />
      <DivTotalCards>
        <DivCardProjects>
          <ProjectsImg src="../../../public/Images/cipher.png" />
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
          <ProjectsImg src="../../../public/Images/datalovers.png" />
          <TextProjects>Data Lovers</TextProjects>
          <LinkProjects  
            href="https://github.com/paola-oliveira/SAP009-data-lovers"
            target="_blank"
            rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src="../../../public/Images/social.png" />
          <TextProjects>Social NetWork</TextProjects>
          <LinkProjects
          href="https://github.com/paola-oliveira/SAP009-social-network"
          target="_blank"
          rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src="../../../public/Images/mdlinks.png" />
          <TextProjects>MdLinks</TextProjects>
          <LinkProjects
          href="https://github.com/paola-oliveira/SAP009-md-links"
          target="_blank"
          rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src="../../../public/Images/burguerqueen.png" />
          <TextProjects>Burguer Queen</TextProjects>
          <LinkProjects
          href="https://github.com/paola-oliveira/Bobs-Burguer"
          target="_blank"
          rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src="../../../public/Images/organize.png" />
          <TextProjects>Organizador de Roteiros</TextProjects>
          <LinkProjects
          href="https://github.com/paola-oliveira/Organizador-de-roteiros"
          target="_blank"
          rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src="../../../public/Images/loggi.png" />
          <TextProjects>Desafio Loggi</TextProjects>
          <LinkProjects
          href="https://github.com/paola-oliveira/desafio-frontend"
          target="_blank"
          rel="noopener noreferrer">Confira o Projeto</LinkProjects>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src="../../../public/Images/finder.png" />
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
