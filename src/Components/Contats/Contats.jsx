

import contats from "../../images/contats.png"
import { DivEmail, DivNets, IconEmail, IconGitHub, IconLinkedin, ImgContats, SectionContats, TextEmail } from "./Styled";


function Contats () {
    return (
        <SectionContats id="contatos">
            <ImgContats src={contats}/>
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

