import webStudio from "./images/projects/WebStudio.jpg";
import iceCream from "./images/projects/IceCream.jpg";
import filmoteka from "./images/projects/Filmoteka.jpg";
import patly from "./images/projects/Patly.jpg";

export const projects = [
    {
        id:1,
        name: "WebStudio",
        description: "The website of the company that develops websites and applications. This is an individual project.Build project on github.Made a site layout with a responsive layout.",
        tech: "HTML, SASS, JS",
        url: "https://stasxxx.github.io/goit-markup-hw-08/index.html",
        gitUrl: "https://github.com/Stasxxx/goit-markup-hw-08",
        img: webStudio
    },
    {
        id:2,
        name: "IceCream",
        description: "Ice cream and shake website made from natural ingredients. Website with a responsive layout. This is a team project. I made a responsive layout of the ice-cream gallery section.",
        tech: "HTML, SASS, JS, Parcel",
        url: "https://stasxxx.github.io/IceCream/",
        gitUrl: "https://github.com/Stasxxx/IceCream",
        img: iceCream
    },
    {
        id:3,
        name: "Filmoteka",
        description: "Application for choosing a movie with the ability to create your own libraries of watched movies and movies to watch. This is a team project. I rendered the modal window and requested/responded to the backend information on the selected movie.",
        tech: "HTML, SASS, JS, REST API, AJAX, Parcel",
        url: "https://stasxxx.github.io/filmoteka/",
        gitUrl: "https://github.com/Stasxxx/filmoteka",
        img: filmoteka
    },
    {
        id:4,
        name: "Petly",
        description: "It is an application for finding information about pets and services with the ability to maintain your own account and add your favorite pets. This is a team project. I implemented news and friends pages.",
        tech: "Node, Express, Bcrypt, Cloudinary, MongoDB, Mongoose, CORS, Gravatar, Joi, Multer, Swagger-ui-express, React, Redux toolkit, Rreact-router-dom, Nanoid, React-icons, React-toastify, React-loader-spinner, Axios, Formik, yup, @emotion/styled",
        url: "https://team-project-react-petly.netlify.app/",
        gitUrl: "https://github.com/VeronikaSavluk/team-project-react-petly",
        img: patly
    }
]