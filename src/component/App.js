// import { useState } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "styles/globalStyles";
import { lightTheme, darkTheme } from "styles/theme";
import { useDarkMode } from "hooks/themeToggele";
import { SharedLayout } from "./sharedLayout/SharedLayout";
import { Routes, Route } from "react-router-dom";
import { Home } from "pages/home/Home";
import { Projects } from "pages/projects/projects";
import { Contact } from "pages/contacts/Contact";
import { About } from "pages/about/About";


function App() {
  const [theme, themeToggler] = useDarkMode();
  
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout changeTheme={ {themeToggler, theme} }/>}>
          <Route index element={<Home changeTheme={ {theme} }/>} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </ThemeProvider>
    
  );
}

export default App;
