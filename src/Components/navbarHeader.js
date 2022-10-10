import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {PageTransition, activeStyle} from './constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'


export default function NavbarHeader() {
	const [showMenu, setShowMenu] = useState(false)
    return (
        <motion.div exit = {PageTransition.out} animate ={PageTransition.in}
		 initial ={PageTransition.out} variants = {PageTransition}>
        	<nav class="navbar">
				<div class="navbar__container">
					<a href="/home"id="navbar__logo">NICKOLAS ZAMACHNOI</a>
					<div class="navbar__toggle" id="mobile-menu">
						<span id="thing">
							<FontAwesomeIcon icon={faBars}
							 onClick={() => setShowMenu(!showMenu)}/>
						</span>
					</div>
					{showMenu ? 
					<ul class="navbar__menu" >
						<li class="navbar__item">
							<a href="/home" class="navbar__links" id="home-page">Home</a>
						</li>
						<li class="navbar__item">
							 cl<a href="/about" class="navbar__links" id="about-page">About</a>
						</li>
						<li class="navbar__item">
							<a href="/work" class="navbar__links" id="work-page">Work</a>
						</li>
						<li class="navbar__btn">
							<a href="/contact" class="button" id="contact">Contact</a>
						</li>
					</ul>:
					<ul class="navbar__menu" style={{top: -1000}}>
						<li class="navbar__item">
							<a href="/home" class="navbar__links" id="home-page">Home</a>
						</li>
						<li class="navbar__item">
							<a href="/about" class="navbar__links" id="about-page">About</a>
						</li>
						<li class="navbar__item">
							<a href="/work" class="navbar__links" id="work-page">Work</a>
						</li>
						<li class="navbar__btn">
							<a href="/contact" class="button" id="contact">Contact</a>
						</li>
					</ul>
					
					}
				</div>
			</nav>
        </motion.div>
    )
}
