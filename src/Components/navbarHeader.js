import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {PageTransition} from './constants'

export default function NavbarHeader() {
    return (
        <motion.div exit = {PageTransition.out} animate ={PageTransition.in} initial ={PageTransition.out} variants = {PageTransition}>
           <nav class="navbar">
		<div class="navbar__container">
			<a href="/"id="navbar__logo">NICKOLAS ZAMACHNOI</a>
			<div class="navbar__toggle" id="mobile-menu">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</div>
			<ul class="navbar__menu">
				<li class="navbar__item">
					<a href="/joemama" class="navbar__links" id="home-page">Home</a>
				</li>
				<li class="navbar__item">
					<a href="/joemama/about" class="navbar__links" id="about-page">About</a>
				</li>
				<li class="navbar__item">
					<a href="/joemama/work" class="navbar__links" id="work-page">Work</a>
				</li>
				<li class="navbar__btn">
					<a href="/joemama/contact" class="button" id="contact">Contact</a>
				</li>
			</ul>
		</div>
	</nav>
        </motion.div>
    )
}
