// import { useState } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "styles/globalStyles";
import { lightTheme, darkTheme } from "styles/theme";
import { useDarkMode } from "hooks/themeToggele";
import { SharedLayout } from "./sharedLayout/SharedLayout";
import { Routes, Route } from "react-router-dom";
import { Home } from "pages/homePage/Home";
import { Projects } from "pages/projectsPage/projects";
import { ContactPage } from "pages/contactPage/ContactPage";
import { About } from "pages/aboutPage/About";


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
          <Route path="about" element={<About changeTheme={ {theme} }/>} />
          <Route path="contact" element={<ContactPage/>} />
        </Route>
      </Routes>
    </ThemeProvider>
    
  );
}

export default App;
