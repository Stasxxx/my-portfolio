import { Section, Title, Cont, TextCont, Link, DownloadBtn, Text, Img } from "./AboutMe.styled";
import it from "../../images/aboutMe/IT-technolojy.jpg"
import itLight from "../../images/aboutMe/IT-technology-light.jpg"
import cv from "./Stanislav Korobchenko-junior frontend developer.pdf"

export const AboutMe = ({ changeTheme }) => {
    const changeImg = changeTheme === "dark" ? it : itLight;

    return ( 
        <Section>
            <Title>About Me</Title>
            <Cont>
                <TextCont>
                    <Text>I am a Front-End developer looking for a full-time position. I have practical experience of HTML,
                        CSS, JavaScript, React and Node. I have experience in using the Agile/Scrum methodology
                        while working in a team. I have good communication skills, stress-resistant, looking for
                        constant development and am ready to work.
                    </Text>
                    <Link href={cv} download>
                        <DownloadBtn changeTheme={changeTheme} type="button">Download CV</DownloadBtn>
                    </Link>
                    
                </TextCont>
                
                <Img src={changeImg} alt='IT technology' changeTheme={changeTheme} />
            </Cont>
            
        </Section>
     );
}
