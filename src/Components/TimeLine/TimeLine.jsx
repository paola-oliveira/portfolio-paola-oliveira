import { Timeline } from 'antd';
import { DivCircle, DivExperience, ImgEducation, ImgExperience, SectionExperienceEducation, TextTimeline } from './Styled';
import experience from "../../images/experience.png";
import education from "../../images/education.png"


const TimeLine = () => (
<SectionExperienceEducation id="experiencia-escolaridade">
    <DivExperience>
    <ImgExperience src={experience}/>
    <Timeline
        items={[
        {
            children: <TextTimeline>2017 / 2018 - Colégio Faat - Estagiária</TextTimeline>,
            dot: <DivCircle />
        },
        {
            children: <TextTimeline>2018 / 2021 - Colégio Inspira - Estagiária</TextTimeline>,
            dot: <DivCircle />
        },
        {
            children: <TextTimeline>2021 / 2022 - Colégio Inspira - Projeto de Vida e Inteligência Emocional</TextTimeline>,
            dot: <DivCircle />
        },
        {
            children: <TextTimeline>2021 / 2022 - Colégio Inspira - Coordenadora Pedagógica</TextTimeline>,
            dot: <DivCircle />
        },
        ]}
    />
    </DivExperience>
    <div>
    <ImgEducation src={education}/>
    <Timeline
        items={[
        {
            children: <TextTimeline> 2023 - Laboratória - Desenvolvimento Web</TextTimeline>,
            dot: <DivCircle />
        },
        {
            children: <TextTimeline> 2021 - UNIFAAT - Psicologia</TextTimeline>,
            dot: <DivCircle />
        },
        ]}
    /> 
    </div>
</SectionExperienceEducation>
);

export default TimeLine;

