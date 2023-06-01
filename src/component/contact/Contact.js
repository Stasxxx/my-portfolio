import { useRef } from "react";
import { Section, Title, Text, LeftCont, TitleForm, Form, Label,  Input, Textarea } from "./Contact.styled";
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ey6jnam', 'template_hzj9clh', form.current, 'a_UECpUeiA4wdB1uP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset()
  };
    
    return ( 
        <Section>
            <Title>Contact details</Title>
            <Text>I am currently looking for a front end developer role.
                If you can offer me a job, my inbox is always open. Or
                you have additional questions or just want to say hello,
                I will do my best to get back to you!
            </Text>
            <LeftCont>
                <TitleForm>Contact me:</TitleForm>
                <Form ref={form} onSubmit={sendEmail}>
                    
                    <Label >
                        Name
                        <Input type="text" placeholder="Your name" name="name" required/>
                    </Label>
                    <Label >
                        Email
                        <Input type="email" placeholder="Your email" name="email" required/>
                    </Label>
                    <Label>
                        Message
                        <Textarea placeholder="Type your message" rows={10} name="message"/>
                    </Label>
                    <button type="submit">Send</button>
                </Form>
            </LeftCont>
            <div>
                <h2>
                    Contact details
                </h2>
                <ul>
                    <li>
                        Sumy, Ukrain
                    </li>
                    <li>
                        <a href="mailto:stanislav.govoruhin@gmail.com" target="_blank" rel="noreferrer noopener">
                            <p>stanislav.govoruhim@gmail.com</p>
                        </a>
                    </li>
                    
                    <li>
                        <a href="tel:+380503272968" >
                            <p>My tell: +380503272968</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/stanislav-korobchenko/" target="_blank" rel="noreferrer noopener">
                            <p>My LinkedIn</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Stasxxx" target="_blank" rel="noreferrer noopener">
                            <p>My GitHub</p>
                        </a>
                    </li>
                </ul>
            </div>
            {/* <a href="mailto:stanislav.govoruhim@gmail.com" target="_blank" rel="noreferrer">
                <button type="button">Say Hello!</button>
            </a> */}
        </Section>
     );
}