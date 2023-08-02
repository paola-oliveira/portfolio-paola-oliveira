import { DivTechnologies, IconCss, IconFigma, IconHtml, IconJavaScript, IconJest, IconNode, IconReact, IconTypeScript, ImgTechnologies, SectionTechnologies } from "./Styled";
import technologies from "../../images/Technologies.png"

function Technologies () {
    return (
        <SectionTechnologies id="tecnologias">
            <ImgTechnologies src={technologies}/>
            <DivTechnologies>
                <IconJavaScript />
                <IconHtml />
                <IconCss />
                <IconReact />
                <IconFigma />
                <IconNode />
                <IconJest />
                <IconTypeScript />
            </DivTechnologies>
        </SectionTechnologies>
    )
}

export default Technologies; 

