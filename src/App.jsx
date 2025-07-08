import {ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
import gsap from 'gsap';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <div className="h-dvh bg-[#D8CAB8]"></div>
        </main>
    )
}
export default App;