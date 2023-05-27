import React from "react";
import { Burger, NavMenu } from "./mobileNav.styled";

export const MobileNav = ({ children, open, setOpen }) => {
    const node = React.useRef();
    const body = document.body;
  if (open) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
    }
    return ( 
        <>
            <div ref={node}>
                <Burger open={open} onClick={() => setOpen(!open)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Burger>
                <NavMenu open={open}>{children}</NavMenu>
            </div>
        </>
     );
}
 
