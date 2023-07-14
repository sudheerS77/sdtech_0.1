import React from "react";
import hhome from './hero.module.css'

const HomeHero = () => {
    return (
        <>
            <div className={hhome.hcontainer}>
                <div className={hhome.hhero}>
                    <div className={hhome.hleft}>
                        <h2>The Best Way To Learn Everything</h2>
                        <span>
                            <p className={hhome.hp}>Problem Solving: Divide a problem into sub statements to cover all the edge cases</p>
                            <p className={hhome.hp}>Creativity: Build programs, presentations, animations, and games.</p>
                        </span>
                        <button className={hhome.startbtn}>
                            start learning now !
                        </button>
                    </div>
                    <div className={hhome.hright}>
                        <img src="https://ftr.imgix.net/2FqWXTKJh6g8PxBeOWwL1s/3a171e98ef364e47b22d0b90ef259478/unexposed-internet-lamp-opt.png?auto=format%2Ccompress&cs=srgb&fit=max&q=60&w=720&s=3c0d1ff289a55e693e2d29506993c13b" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHero;