import { BrowserRouter, Routes as ReactRouter, Route, Navigate } from "react-router-dom";
import About from "../components/AboutInfo";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import SocialLinks from "../components/SocialLinks";
import ErrorPage from "../pages/NotFound";


import NavBar from "../components/NavBar";
import Home from "../components/Home";

export default function Routes() {
    return (
      <BrowserRouter>
        <NavBar />
        <SocialLinks />
        <ReactRouter>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Experience" element={<Experience/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="*" element={<ErrorPage/>} />
        </ReactRouter>
      </BrowserRouter>
    );
  }