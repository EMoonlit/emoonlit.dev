import About from "./components/AboutInfo";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
