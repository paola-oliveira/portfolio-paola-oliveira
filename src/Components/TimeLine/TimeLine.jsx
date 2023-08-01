import { Timeline } from 'antd';
import { styled } from 'styled-components';

const TimeLine = () => (
<SectionExperienceEducation>
    <div>
    <ImgExperience src="../../../public/Images/experience.png"/>
    <Timeline
        items={[
        {
            color: "#5B8DC9",
            children: <TextTimeline>2017 / 2018 - Colégio Faat - Estagiária</TextTimeline>,
            dot: <DivCircle />
        },
        {
            color: "#5B8DC9",
            children: <TextTimeline>2018 / 2021 - Colégio Inspira - Estagiária</TextTimeline>,
            dot: <DivCircle />
        },
        {
            color: "#5B8DC9",
            children: <TextTimeline>2021 / 2022 - Colégio Inspira - Projeto de Vida e Inteligência Emocional</TextTimeline>,
            dot: <DivCircle />
        },
        {
            color: "#5B8DC9",
            children: <TextTimeline>2021 / 2022 - Colégio Inspira - Coordenadora Pedagógica</TextTimeline>,
            dot: <DivCircle />
        },
        ]}
    />
    </div>
    <div>
    <ImgEducation src="../../../public/Images/education.png"/>
    <Timeline
        items={[
        {
            color: "#5B8DC9",
            children: <TextTimeline> 2023 - Laboratória - Desenvolvimento Web</TextTimeline>,
            dot: <DivCircle />
        },
        {
            color: "#5B8DC9",
            children: <TextTimeline> 2021 - UNIFAAT - Psicologia</TextTimeline>,
            dot: <DivCircle />
        },
        ]}
    /> 
    </div>
</SectionExperienceEducation>
);

export default TimeLine;

export const DivCircle = styled.div`
    background-color: #FFF4EB;
    border: 8px solid #5B8DC9;
    border-radius: 100%;
`;

export const ImgExperience = styled.img`
    width: 550px;
    margin-bottom: 30px;
`;

export const ImgEducation = styled.img`
    width: 520px;
    margin-bottom: 30px;
    margin-top: -20px;
`;

export const SectionExperienceEducation = styled.section`
    margin-top: 110px;
    margin-bottom: 70px;
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const TextTimeline = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #000;
    font-family: 'Quicksand', sans-serif;
`;
