import { DivCard, DivLeft, DivRight, ImgAboutMe, ImgProfile, SectionAboutMe, StyledMdLocationPin, TextAboutMe, TextProfile } from "./Styled";
import profile from "../../images/profile.png";
import AboutMeImg from "../../images/AboutMe.png"

function AboutMe () {
    return (
        <SectionAboutMe id="sobre-mim">
            <DivLeft>
                <DivCard>
                    <ImgProfile src={profile}/>
                    <TextProfile>
                        <StyledMdLocationPin/>
                        <span>Piracaia, SP</span>
                    </TextProfile>
                    <TextProfile>26 anos</TextProfile>
                    <TextProfile>Desenvolvedora Web Front-end</TextProfile>
                </DivCard>
            </DivLeft>
            <DivRight>
                <ImgAboutMe src={AboutMeImg} />
                    <TextAboutMe>
                        Sou formada em psicologia e atualmente estou em
                        transição de carreira para a área de tecnologia.
                        Tenho habilidades em gestão de tempo, resolução
                        de problemas, trabalho em equipe e comunicação,
                        além de experiência em lidar com diferentes
                        pessoas e situações. Recentemente, concluí um
                        bootcamp de desenvolvimento web Front-End,
                        pela Laboratória. 
                    </TextAboutMe>
            </DivRight>
        </SectionAboutMe>
    )
}

export default AboutMe;

