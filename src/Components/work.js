import React from 'react'
import javafx from './images/Javafx.PNG'
import {AnimatePresence, motion} from 'framer-motion'
import {PageTransition} from './constants'

export default function work() {
    return (
        <motion.div exit = {PageTransition.out} animate ={PageTransition.in} initial ={PageTransition.out} variants = {PageTransition}>
            <div class="work" id="work">
		<h1>My Work</h1>
		<div class="work__wrapper">
			<div class="work__photography">
				<h2>Java</h2>
				<br></br>
				<div class="photos">
					<img src={javafx} alt="" id="javafx"></img>
					<img src="/images/dog.png" alt="" id="dog"></img>
				</div>
			</div>
			<div class="work__videography">
				<h2>Videos</h2>
				<div class="videos">
					<iframe src="https://www.youtube.com/embed/ZsKfX81GF1c" frameborder="0"
					 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
		</div>
	</div>
        </motion.div>
    )
}
