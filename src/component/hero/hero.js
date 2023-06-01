import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';
import { ContHero, TextCont, Text, TextHeroName,  Name, PhotoCont, ImgHero } from './hero.styled';
import hero from '../../images/hero.jpg'

export const Hero = ({changeTheme}) => {
    useEffect(() => {
        window.scroll({ top: 0 });
    }, []);

    return ( 
        <>
            <ContHero>
                <TextCont>
                    <Text>Hi there, my name is</Text>
                    <TextHeroName>Stanislav Korobchenko</TextHeroName>
                    <Text>I am &nbsp;
                        <Name changeTheme={changeTheme.theme}>
                        <Typewriter
                            cursor
                            cursorBlinking={false}
                            cursorStyle="!"
                            loop
                            typeSpeed={100}
                            deleteSpeed={70}
                            delaySpeed={1000}
                            words={["FRONT END DEVELOPER", "REACT JS DEVELOPER"]}
                        />
                        </Name>
                    </Text>
                </TextCont>
                <PhotoCont>
                    <ImgHero src={hero} alt='Me' width={250}/>
                </PhotoCont>
            </ContHero>
        </>
     );
}
 
