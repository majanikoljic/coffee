import {navLinks} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'

            }
        });
        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#F6EEE3cc',
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        });
    })
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" className="w-10 h-10 object-contain"/>
                    <p>Maison de Café</p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;