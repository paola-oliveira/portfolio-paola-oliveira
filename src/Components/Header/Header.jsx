import { LinkHeader, SectionHeader } from "./Styled";

function Header() {
    return (
     <SectionHeader>
        <LinkHeader href="#sobre-mim">Sobre Mim</LinkHeader>
        <LinkHeader href="#tecnologias">Tecnologias</LinkHeader>
        <LinkHeader href="#experiencia-escolaridade">Minhas Experiências</LinkHeader>
        <LinkHeader href="#projetos">Projetos</LinkHeader>
        <LinkHeader href="#contatos">Contato</LinkHeader>
     </SectionHeader>
    );
  }

  export default Header;
