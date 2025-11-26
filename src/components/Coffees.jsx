import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {hotDrinks, icedDrinks} from "../../constants/index.js";


const Coffees = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#coffee',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        parallaxTimeline
            .from('#c-left-leaf', {
                x: -100, y: 100
            })
            .from('#c-right-leaf', {
                x: 100, y: 100
            })
    })

    return (
        <section id="coffee" className="noisy">
            <img src="/images/coffee-left-leaf.png" alt="l-leaf" id="c-left-leaf"/>
            <img src="/images/coffee-right-leaf.png" alt="r-leaf" id="c-right-leaf"/>

            <div className="list">
                <div className="hot md:mr-20">
                    <h2>Hot Coffees:</h2>

                    <ul>
                        {hotDrinks.map(({name, origin, detail, price}) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{origin} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="iced md:ml-20">
                    <h2>Iced Coffees:</h2>

                    <ul>
                        {icedDrinks.map(({name, origin, detail, price}) => (
                            <li key={name}>
                                <span>- {price}</span>
                                <div className="md:ms-28">
                                    <h3>{name}</h3>
                                    <p>{origin} | {detail}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    )
}
export default Coffees;
