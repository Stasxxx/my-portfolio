import { AboutMe } from "component/aboutMe/AboutMe";
import { SliderSkills } from "component/slider/SliderSkills";

export const About = ({changeTheme}) => {
    return ( 
        <main>
            <AboutMe changeTheme={ changeTheme.theme }/>
            <SliderSkills/>
            
        </main>
     );
}
 
