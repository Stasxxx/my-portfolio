import { Cont, Button, Icon } from "./Toggle.styled"
// sfc
import sun from './sun.svg';
import moon from './moon.svg';

export const Toggle = ({ changeTheme: { theme, themeToggler } }) => {
    
    return (
    <Cont >
        <Button onClick={themeToggler} theme={theme}>
			<Icon src={sun} alt="Light mode" className="dark-mode-btn__icon" />
			<Icon src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
		</Button>
    </Cont>
    )
}