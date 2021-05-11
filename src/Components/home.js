import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {PageTransition} from './constants'
import ParticleBackground from './ParticleBackground'

export default function home() {
    return (
        <motion.div exit = {PageTransition.out} animate ={PageTransition.in} initial ={PageTransition.out} variants = {PageTransition} style={{background: "#120019"}} class="poop">
            {/* <ParticleBackground className="homer" style={{background: "purple", position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "1%"
        }}></ParticleBackground> */}
            <div class="home-section" id="home" style={{
            // position: "absolute",
            // top: 80,
            // left: 0,
            width: "100%",
            height: "100%",
          }}>
                <div class="home__container">
                    <h1 class="home__heading">Nickolas's <span>Portfolio</span></h1>
                    <p class="home__description">Future Full-Stack and<br></br>Software Developer</p>
                    <button class="main__btn"><a href="/about">Explore</a></button>
                </div>
            </div>
        </motion.div>
    )
}
