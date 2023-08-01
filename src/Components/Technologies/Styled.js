import { styled } from "styled-components";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiFigma, SiNodedotjs, SiJest, SiTypescript } from "react-icons/si";

export const ImgTechnologies = styled.img`
    width: 600px;
`;

export const SectionTechnologies = styled.section`
    margin-top: 132px; 
    width: 100%;
    height: 50vh;   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DivTechnologies = styled.div`
    display: flex;
    gap: 70px;
    margin-top: 30px;
    margin-bottom: 70px;
`

export const IconJavaScript = styled(SiJavascript)`
    font-size: 50px;
    color: #5B8DC9;
`; 

export const IconHtml = styled(SiHtml5)`
   font-size: 50px;
   color: #5B8DC9;
`; 

export const IconCss = styled(SiCss3)`
   font-size: 50px;
   color: #5B8DC9;
`; 

export const IconReact = styled(SiReact)`
    font-size: 50px;
    color: #5B8DC9;
`;

export const IconFigma = styled(SiFigma)`
    font-size: 50px;
    color: #5B8DC9;
`;

export const IconNode = styled(SiNodedotjs)`
    font-size: 50px;
    color: #5B8DC9;
`;

export const IconJest = styled(SiJest)`
    font-size: 50px;
    color: #5B8DC9;
`;

export const IconTypeScript = styled(SiTypescript)`
    font-size: 50px;
    color: #5B8DC9;
`;
