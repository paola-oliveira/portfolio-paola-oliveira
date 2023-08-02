import { DivCard, DivLeft, DivRight, ImgAboutMe, ImgProfile, SectionAboutMe, StyledMdLocationPin, TextAboutMe, TextProfile } from "./Styled";

function AboutMe () {
    return (
        <SectionAboutMe id="sobre-mim">
            <DivLeft>
                <DivCard>
                    <ImgProfile src="../../../public/Images/profile.png"/>
                    <TextProfile>
                        <StyledMdLocationPin/>
                        <span>Piracaia, SP</span>
                    </TextProfile>
                    <TextProfile>25 anos</TextProfile>
                    <TextProfile>Desenvolvedora Web Front-end</TextProfile>
                </DivCard>
            </DivLeft>
            <DivRight>
                <ImgAboutMe src="../../../public/Images/AboutMe.png" />
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

