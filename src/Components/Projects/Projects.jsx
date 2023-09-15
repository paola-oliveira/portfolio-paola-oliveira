import {
  DivCardProjects,
  DivLinks,
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
          <DivLinks>
          <LinkProjects
            href="https://github.com/paola-oliveira/SAP009-cipher"
            target="_blank"
            rel="noopener noreferrer">Repositório</LinkProjects>
          <LinkProjects
            href="https://paola-oliveira.github.io/SAP009-cipher/src/index.html"
            target="_blank"
            rel="noopener noreferrer">Website</LinkProjects>
            </DivLinks>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={datalovers} />
          <TextProjects>Data Lovers</TextProjects>
          <DivLinks>
          <LinkProjects  
            href="https://github.com/paola-oliveira/SAP009-data-lovers"
            target="_blank"
            rel="noopener noreferrer">Repositório</LinkProjects>
          <LinkProjects
            href="https://data-lovers-pokemon-mu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">Website</LinkProjects>
            </DivLinks>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={social} />
          <TextProjects>Social NetWork</TextProjects>
          <DivLinks>
          <LinkProjects
          href="https://github.com/paola-oliveira/SAP009-social-network"
          target="_blank"
          rel="noopener noreferrer">Repositório</LinkProjects>
          <LinkProjects
            href="https://dog-tips-2023.web.app/"
            target="_blank"
            rel="noopener noreferrer">Website</LinkProjects>
          </DivLinks>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={mdlinks} />
          <TextProjects>MdLinks</TextProjects>
          <DivLinks>
          <LinkProjects
          href="https://github.com/paola-oliveira/SAP009-md-links"
          target="_blank"
          rel="noopener noreferrer">Repositório</LinkProjects>
          <LinkProjects
            href="https://www.npmjs.com/package/sap009-md-links"
            target="_blank"
            rel="noopener noreferrer">Website</LinkProjects>
          </DivLinks>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={burguerqueen} />
          <TextProjects>Burguer Queen</TextProjects>
          <DivLinks>
          <LinkProjects
          href="https://github.com/paola-oliveira/Bobs-Burguer"
          target="_blank"
          rel="noopener noreferrer">Repositório</LinkProjects>
          <LinkProjects
            href="https://bobs-burguer.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">Website</LinkProjects>
            </DivLinks>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={organize} />
          <TextProjects>Organizador de Roteiros</TextProjects>
          <DivLinks>
          <LinkProjects
          href="https://github.com/paola-oliveira/Organizador-de-roteiros"
          target="_blank"
          rel="noopener noreferrer">Repositório</LinkProjects>
          <LinkProjects
            href="https://organizador-de-roteiros.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">Website</LinkProjects>
            </DivLinks>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={loggi} />
          <TextProjects>Desafio Loggi</TextProjects>
          <DivLinks>
          <LinkProjects
          href="https://github.com/paola-oliveira/desafio-frontend"
          target="_blank"
          rel="noopener noreferrer">Repositório</LinkProjects>
          <LinkProjects
            href="https://desafio-frontend-xi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">Website</LinkProjects>
          </DivLinks>
        </DivCardProjects>
        <DivCardProjects>
          <ProjectsImg src={finder} />
          <TextProjects>GitHub Finder</TextProjects>
          <DivLinks>
          <LinkProjects
          href="https://github.com/paola-oliveira/GitHub-Finder"
          target="_blank"
          rel="noopener noreferrer">Repositório</LinkProjects>
          <LinkProjects
            href="https://github-finder-theta-weld.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">Website</LinkProjects>
          </DivLinks>
        </DivCardProjects>
      </DivTotalCards>
    </SectionProjects>
  );
}

export default Projects;
