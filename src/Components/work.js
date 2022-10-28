import React from 'react'
import javafx from './images/Javafx.PNG'
import {AnimatePresence, motion} from 'framer-motion'
import {PageTransition} from './constants'
import sudoku from './images/sudoku.png'

export default function work() {
    return (
        <motion.div exit = {PageTransition.out} animate ={PageTransition.in} initial ={PageTransition.out} variants = {PageTransition}>
            <div className="work" id="work">
		<h1>My Work</h1>
		<div className="work__wrapper">
			<div className="work__java">
				<h2>Java</h2>
				<div className="photos">
					<img src={javafx} alt="" id="javafx"></img>
					<img src="/images/dog.png" alt="" id="dog"></img>
				</div>
			</div>
			<br></br>
			<div className="work__javascript">
				<h2>JavaScript</h2>
				<div className="photos">
					<a href="https://nickz-sudoku-solver.herokuapp.com/" target="_blank" rel="noopener noreferrer">
					<img src={sudoku} alt="" id="sudoku"></img>
					</a>
				</div>
			</div>
		</div>
	</div>
        </motion.div>
    )
}
