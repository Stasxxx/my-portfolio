import { useState, useEffect } from "react";
import { projects } from "../../../projects";
import { ProjectsItem } from "../ProjectsItem/ProjectsItem";
import { Cont, Title, List } from "./ProjectsList.styled";
import { useBreakpoint } from "hooks/useBreakpoint";
import { ModalProject } from "component/Modal/Modal";



export const ProjectsList = () => {
    const [container, setContainer] = useState(null);
    const { isMobileScreen } = useBreakpoint();
    const [showModal, setShowModal] = useState(false);
    const [projectInfo, setProjectInfo] = useState({});
    
    useEffect(() => {
        window.scroll({ top: 0 });
    }, []);

    useEffect(() => {
        const card = document.querySelector(`.${container}`);

        if (card !== null && !isMobileScreen) {
            card.addEventListener("mousemove", function (e) {
                card.style.backgroundPositionX = -e.offsetX * 0.695 + "px";
                card.style.backgroundPositionY = -e.offsetY * 0.485 + "px";
            });

            card.addEventListener("mouseleave", function () {
                card.style.backgroundPosition = "-120px 0px";
            });
        };
    });
    
    const getProject = (proj) => {
        setProjectInfo(proj);
    };

    const toggleModal = () => {
        setShowModal(showModal => !showModal );
  }

    return (
        <Cont>
            <Title> My projects</Title>
            <List onClick={toggleModal}>
                {projects.map(item => <ProjectsItem key={item.id} project={item} cont={setContainer} getProject={getProject} />)}
            </List>
            <ModalProject onClose={toggleModal} active={showModal} project={projectInfo}/>
            {/* {showModal && <ModalProject onClose={toggleModal} active={showModal} project={projectInfo}/>} */}
        </Cont>
    );
};
 
