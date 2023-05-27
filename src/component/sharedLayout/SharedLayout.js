import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ContactMe } from "component/contactMe/ContactMe";
import { Toggle } from "component/toggleTheme/Toggle";
import { Header,Cont, LogoCont, Nav, NavButton } from "./SharedLayout.styled";
import logo from "./icons8-резюме-64.png"
import { MobileNav } from "component/mobileNav/mobileNav";
import { useBreakpoint } from "hooks/useBreakpoint";
// import { ParticleBackground } from "component/particleBackground/ParticleBackground";

export const SharedLayout = ({ changeTheme }) => {
    const [show, setShow] = useState(true)
    const [open, setOpen] = useState(false)
    const { isMobileScreen } = useBreakpoint();
    
    // console.log(changeTheme.theme)
    return ( 
        <>
            <Header>
                <Cont >
                    <LogoCont to="/" end onClick={()=> setShow(true)} changetheme={changeTheme.theme}>
                    <img src={logo}  alt="Logo" width="24px"/>
                    <p>My portfolio</p>
                    </LogoCont>
                
                <Nav>
                    {isMobileScreen ? 
                        <MobileNav open={open} setOpen={setOpen}>
                            <NavButton to="/" end onClick={() => { setShow(true); setOpen(false)}} changetheme={changeTheme.theme}>Home</NavButton>
                            <NavButton to="/projects"onClick={()=> { setShow(true); setOpen(false)}} changetheme={changeTheme.theme}>Projects</NavButton>
                            <NavButton to="/about"onClick={()=> { setShow(true); setOpen(false)}} changetheme={changeTheme.theme}>About Me</NavButton>
                            <NavButton to="/contact" onClick={()=> { setShow(false); setOpen(false)}} changetheme={changeTheme.theme}>Contact</NavButton>
                        </MobileNav> :
                        <>
                        <NavButton to="/" end onClick={()=> setShow(true)} changetheme={changeTheme.theme}>Home</NavButton>
                        <NavButton to="/projects"onClick={()=> setShow(true)} changetheme={changeTheme.theme}>Projects</NavButton>
                        <NavButton to="/about"onClick={()=> setShow(true)} changetheme={changeTheme.theme}>About Me</NavButton>
                        <NavButton to="/contact" onClick={()=> setShow(false)} changetheme={changeTheme.theme}>Contact</NavButton>
                        </>
                    }
                    {/* <MobileNav open={open} setOpen={setOpen}>
                        <NavButton to="/" end onClick={()=> setShow(true)}>Home</NavButton>
                        <NavButton to="/projects"onClick={()=> setShow(true)}>Projects</NavButton>
                        <NavButton to="/about"onClick={()=> setShow(true)}>About Me</NavButton>
                        <NavButton to="/contact" onClick={()=> setShow(false)}>Contact</NavButton>
                    </MobileNav> */}
                    {/* <NavButton to="/" end onClick={()=> setShow(true)}>Home</NavButton>
                    <NavButton to="/projects"onClick={()=> setShow(true)}>Projects</NavButton>
                    <NavButton to="/about"onClick={()=> setShow(true)}>About Me</NavButton>
                    <NavButton to="/contact" onClick={()=> setShow(false)}>Contact</NavButton> */}
                    </Nav>
                    
                    <Toggle changeTheme={changeTheme} />
                </Cont>
            </Header>
            {/* <ParticleBackground/> */}
            <Outlet />
            {show && <ContactMe/>}
        </>
      );
}
 