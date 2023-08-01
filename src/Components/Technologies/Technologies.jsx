import { DivTechnologies, IconCss, IconFigma, IconHtml, IconJavaScript, IconJest, IconNode, IconReact, IconTypeScript, ImgTechnologies, SectionTechnologies } from "./Styled";

function Technologies () {
    return (
        <SectionTechnologies>
            <ImgTechnologies src="../../../public/Images/Technologies.png"/>
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

