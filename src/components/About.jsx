import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
import {useGSAP} from "@gsap/react";


const About = () => {
    useGSAP(() =>{
        const titleSplit = SplitText.create('#about h2',{
            type:'words'
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
            }
        })

        scrollTimeline.from(titleSplit.words, {
            opacity: 0,
            duration: 1,
            yPercent: 100,
            ease: 'expo.out',
            stagger: 0.02
        })
            .from('.top-grid div, .bottom-grid div', {
                opacity: 0,
                duration: 1,
                ease: 'power1.inOut',
                stagger: 0.04,
            }, '-=0.5');
    })

    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Coffees</p>
                        <h2>
                            Crafted with Love<span>—</span>from the First Pour to the Final Sip
                        </h2>
                    </div>

                    <div className="sub-content">
                        <p>
                            At Maison de Café, our coffees are more than just drinks — they're a daily ritual, a moment of calm, and a touch of artistry. We carefully source the finest beans and craft each cup with precision, care, and a passion for flavor. Whether you prefer a bold espresso, a silky macchiato, or something iced and refreshing, every sip is designed to comfort, awaken, and inspire. Because to us, coffee isn’t just brewed — it’s beautifully made.
                        </p>
                        <div>
                            <p className="md-text-3xl text-xl font-bold">
                                <span>4.8</span>/5
                            </p>
                            <p className="text-sm text-black-100">
                                More than +1000 costumers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy"/>
                    <img src="/images/abt1.png" alt="grid-img-1"/>
                </div>

                <div className="md:col-span-6">
                    <div className="noisy"/>
                    <img src="/images/abt2.png" alt="grid-img-2"/>
                </div>

                <div className="md:col-span-3">
                    <div className="noisy"/>
                    <img src="/images/abt5.png" alt="grid-img-5"/>
                </div>
            </div>
            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy"/>
                    <img src="/images/abt3.png" alt="grid-img-3"/>
                </div>

                <div className="md:col-span-4">
                    <div className="noisy"/>
                    <img src="/images/abt4.png" alt="grid-img-4"/>
                </div>
            </div>
        </div>
    )
}
export default About;