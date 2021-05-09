import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {PageTransition} from './constants'

export default function home() {
    return (
        <motion.div initial= {PageTransition.out} animate={PageTransition.in} exit= {PageTransition.out}>
            <div class="home-section" id="home">
                <div class="home__container">
                    <h1 class="home__heading">Nickolas's <span>Portfolio</span></h1>
                    <p class="home__description">Future Full-Stack and<br></br>Software Developer</p>
                    <button class="main__btn"><a href="/about">Explore</a></button>
                </div>
            </div>
        </motion.div>
    )
}
