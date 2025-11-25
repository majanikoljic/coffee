import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import {useRef, useEffect} from "react";
import {useMediaQuery} from "react-responsive";


const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth: 767});

    // Initialize video in paused state
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }, []);


    useGSAP(() => {
        const heroSplit = new SplitText('.title', {type: 'chars words'});
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        });
        gsap.to(['#hero', '.video'], {
            opacity: 0,
            scrollTrigger: {
                trigger: '#hero',
                start: 'bottom bottom',
                end: '+=200',
                scrub: true
            }
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        // Video animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,

            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }

    }, []);

    return (
        <>
            <section id="hero" className="noisy">
            <h1 className="title">Tapioca Macchiato</h1>
                <img
                src="/images/hero-left-leaf.png"
                alt ="left-leaf"
                className="left-leaf"
                />
                <img
                src="/images/hero-right-leaf.png"
                alt ="right-leaf"
                className="right-leaf"
                />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic.</p>
                            <p className="subtitle">
                                Sip the Spirit <br/> of Summer
                            </p>
                        </div>
                        <div className="view-coffee">
                            <p className="subtitle">
                            At Maison de Café, every cup is crafted with care and passion. From the bold and rich Macchiato to the creamy smoothness of a Cappuccino, our coffees bring warmth and elegance to your day. Sip, savor, and enjoy the art of perfect coffee.
                            </p>
                            <a href="#coffee">View Coffees</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="video absolute inset-0">
                <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                src="videos/output.mp4"
                />
            </div>
        </>
    )
}
export default Hero;
