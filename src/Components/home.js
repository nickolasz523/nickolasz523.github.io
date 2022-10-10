import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {PageTransition} from './constants'
import ParticleBackground from './ParticleBackground'

export default function home() {
    return (
        <motion.div exit = {PageTransition.out} animate ={PageTransition.in} initial ={PageTransition.out} variants = {PageTransition} style={{background: "#120019"}} class="homepage">
            <div class="home-section" id="home">
                <div class="home__container">
                    <h1 class="home__heading">Nickolas <span>Z</span></h1>
                    <p class="home__description">Full-Stack and<br></br>Software Developer</p>
                    <button class="main__btn"><a href="/about">Explore</a></button>
                </div>
            </div>
        </motion.div>
    )
}