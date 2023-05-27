import { Div, Img } from "./TechSkills.styled";

export const TechSkill = ({ skill}) => {
    // console.log(skill)
    return (
        <>
            <Div >
                <Img src={skill.img} alt="img" />
                {/* src={require(`../../image/images/${car.image}.jpg`)} */}
                <p style={{textAlign: 'center'}}>
                    {skill.title}
                </p>
            </Div>
        </>
    );
};
 