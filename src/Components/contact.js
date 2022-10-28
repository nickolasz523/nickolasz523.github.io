import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {PageTransition} from './constants'

export default function contact() {
    return (
        <motion.div exit = {PageTransition.out} animate ={PageTransition.in} initial ={PageTransition.out} variants = {PageTransition}>
            <div className="contact" id="contact">
                <h1>Coming soon...</h1>
            </div>
        </motion.div>
    )
}
