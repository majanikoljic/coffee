import {ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
import gsap from 'gsap';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Coffees from "./components/coffees.jsx";
import About from "./components/About.jsx";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Coffees />
            <About/>
        </main>
    )
}
export default App;