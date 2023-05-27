
import { CardCont, PhotoProj, Name } from "./ProjectsItem.styled";


export const ProjectsItem = ({ project, cont, getProject }) => {    
    const moveBackground = (e) => {
        const classList = e.target.classList[1];
        cont(classList);
    };    

    return ( 
        <>
            <CardCont onClick={() => {getProject(project)}}>
                    <PhotoProj img={project.img || ""} onMouseOver={moveBackground}></PhotoProj>
                    <Name>{project.name}</Name>
            </CardCont>
        </>
     );
}