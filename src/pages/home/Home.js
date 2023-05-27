import { Hero } from "component/hero/hero";
import { SliderSkills } from "component/slider/SliderSkills";

export const Home = ({changeTheme}) => {
    return (
        <main>
            <Hero changeTheme={ changeTheme } />
            <SliderSkills/>
        </main>
        
    );
}
 