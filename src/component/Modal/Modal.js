import { useEffect } from "react";
// import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import { Overlay, Modal, ContBtn, ContClose, LeftRight, RightLeft, Img, Title, DiscriptionCont, Text, TechTitle, Technology, LinkCont, Link } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root')

export const ModalProject = ({ onClose, active,  project }) => {
    // console.log(project)

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        // 
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            };
        };
        window.addEventListener('keydown', handleKeyDown);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, active]);


    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose()
        }
    };    
        
        return createPortal(
            <Overlay className={active ? "active" : null} onClick={handleBackdropClick}>
                <Modal className={active ? "activeModal" : null}>
                    <ContBtn onClick={() => onClose()}>
                        <ContClose >
                            <LeftRight></LeftRight>
                            <RightLeft></RightLeft>
                        </ContClose>
                    </ContBtn>
                    <Title>{project.name}</Title>
                    <DiscriptionCont>
                        <Img src={project.img} alt={project.name} />
                        <div>
                            <Text>{project.description}</Text>
                            <TechTitle>Technology used</TechTitle>
                            <Technology>[{project.tech}]</Technology>
                            <LinkCont>
                                <Link href={project.url} target="_blank" rel="noreferrer noopener">See the project</Link>
                                <Link href={project.gitUrl} target="_blank" rel="noreferrer noopener">See the code</Link>
                            </LinkCont>
                        </div>
                    </DiscriptionCont>
                    
                   
                </Modal>
            </Overlay>, modalRoot,
        )
    
}

// ModalProject.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     imageURL: PropTypes.string.isRequired,
//     }