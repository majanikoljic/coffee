'use client';
import gsap from "gsap";
import {allCoffees} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import {useRef, useState} from "react";

const Menu = () => {

    const contentRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
        gsap.fromTo('#title', {opacity: 0}, {opacity : 1, duration: 1});
        gsap.fromTo('.coffee_img', {opacity: 0, xPercent: -100},{
            xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
        })
        gsap.fromTo('.details h2', {yPercent: 100, opacity: 0}, {
            yPercent: 0, opacity: 100, ease: 'power1.inOut'
        })
        gsap.fromTo('.details p', {yPercent: 100, opacity: 0}, {
            yPercent: 0, opacity: 100, ease: 'power1.inOut'
        })
    }, [currentIndex])

    const totalCoffees = allCoffees.length;

    const goToSlide = (index) => {
        const newIndex = (index + totalCoffees) % totalCoffees;

        setCurrentIndex(newIndex);
    }

    const getCoffeeAt = (indexOffSet) => {
        return allCoffees[(currentIndex + indexOffSet + totalCoffees) % totalCoffees]
    }

    const currentCoffee = getCoffeeAt(0);
    const prevCoffee = getCoffeeAt(-1);
    const nextCoffee = getCoffeeAt(1);

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf"/>
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf"/>

            <h2 id="menu-heading" className="sr-only">
                Coffee Menu
            </h2>

            <nav className="coffee-tabs" aria-label="coffee Navigation">
                {allCoffees.map((coffee,index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button key={coffee.id} className={`
                        ${isActive 
                            ? 'text-white border-white' 
                            : 'text-white/50 border-white/50'}`
                        } onClick={() => goToSlide(index)}

                        >
                            {coffee.name}
                        </button>
                    )
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCoffee.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />

                    </button>

                    <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCoffee.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />

                    </button>
                </div>

                <div className="coffee">
                    <img src={currentCoffee.image} className="object-contain"/>
                </div>

                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recipe for:</p>
                        <p id="title">{currentCoffee.name}</p>
                    </div>

                    <div className="details">
                        <h2>{currentCoffee.title}</h2>
                        <p>{currentCoffee.description}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Menu;