import { Footer, Title, ContactsList, Item, Link, Img, Text } from "./ContactMe.styled";
import {img} from "../../images/contact"
export const ContactMe = () => {
    return ( 
        <Footer>
            <Title>Cuntact Me</Title>
            <ContactsList>
                <Item>
                    <Link href="https://github.com/Stasxxx" target="_blank" rel="noreferrer noopener">
                        <Img src={img.git} alt="Call me" width="46px" />
                        <Text>GitHub</Text>
                    </Link>
                </Item>
                <Item>
                    <Link href="https://www.facebook.com/stanislav.korobchenko.3" target="_blank" rel="noreferrer noopener">
                        <Img src={img.facebook} alt="Call me" width="46px" />
                        <Text>Facebook</Text>
                    </Link>
                </Item>
                <Item>
                    <Link href="https://www.linkedin.com/in/stanislav-korobchenko/" target="_blank" rel="noreferrer noopener">
                        <Img src={img.linkedin} alt="Call me" width="46px" />
                        <Text>LinkedIn</Text>
                    </Link>
                </Item>
                <Item>
                    <Link href="mailto:stanislav.govoruhin@gmail.com" target="_blank" rel="noreferrer noopener">
                        <Img src={img.mail} alt="Call me" width="46px" />
                        <Text>Mail</Text>
                    </Link>
                    </Item>
                <Item>
                    <Link href="tel:+380503272968" >
                        <Img src={img.call} alt="Call me" width="46px" />
                        <Text>Call me</Text>
                    </Link>
                </Item>
            </ContactsList>
        </Footer>
     );
}
 