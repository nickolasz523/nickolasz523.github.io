import React from 'react'
import {motion} from 'framer-motion'
import {PageTransition} from './constants'

const transistion = {duration: .6, ease:[0.6, 0.01, -0.05, 0.9]}

export default function about() {
    return (
        <motion.div exit = {PageTransition.out} animate ={PageTransition.in} initial ={PageTransition.out} variants = {PageTransition}>
            <div class="main" id="about">
				<div class="main__container">
					<div class="main__img--container">
						<motion.div whileHover= {{scale: 1.1}} transition ={transistion} class="main__img--card">
							<div class="pic-of-me">
							</div>
						</motion.div>
					</div>
					<div class="main__content">			
						<h1>WHO I AM</h1>
						<p>I am Nickolas Zamachnoi, a grade 12 student at the Ottawa-Carleton Virtual Secondary School. 
							I'm an aspiring software developer and am going into my 1st year at Carleton University for a Bachelor of Computer Science. 
							I love coding and want to make it my job in the future. I work on my skills every day to become the best I can be.</p>
						<br></br>
						<h1>WHY I'M HERE</h1>
						<p>I love working with my brain and solving problems.
							I challenge myself everyday to at least 1 coding problem so that I keep improving and never stagnate.
							Making beautiful looking websites has always been a goal of mine. I want my projects to be functional but also look pretty.
							The languages which I am comfortable with right now are:<br></br>
							<ul>
								<li>Java</li>
								<li>Python</li>
								<li>C</li>
								<li>CSS</li>
								<li>HTML</li>
								<li>JavaScript</li>
							</ul>
							</p>
						<br></br>
						<h1>WHERE I'M GOING</h1>
						<p>In the future I hope</p>
						<button class="main__btn"><a href="/contact" id="contact">Contact</a></button>
					</div>
				</div>
			</div>
        </motion.div>
    )
}
