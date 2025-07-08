import {ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
import gsap from 'gsap';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Coffees from "./components/Coffees.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Coffees />
            <About/>
            <Art/>
        </main>
    )
}
export default App;