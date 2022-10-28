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
        	<nav className="navbar">
				<div className="navbar__container">
					<a href="/home"id="navbar__logo">NICKOLAS ZAMACHNOI</a>
					<div className="navbar__toggle" id="mobile-menu">
						<span id="thing">
							<FontAwesomeIcon className= "navIcon" icon={faBars}
							 onClick={() => setShowMenu(!showMenu)}/>
						</span>
					</div>
					{showMenu ? 
					<ul className="navbar__menu" >
						<li className="navbar__item">
							<a href="/home" className="navbar__links" id="home-page">Home</a>
						</li>
						<li className="navbar__item">
							<a href="/about" className="navbar__links" id="about-page">About</a>
						</li>
						<li className="navbar__item">
							<a href="/work" className="navbar__links" id="work-page">Work</a>
						</li>
						<li className="navbar__btn">
							<a href="/contact" className="button" id="contact">Contact</a>
						</li>
					</ul>:
					<ul className="navbar__menu" style={{top: -1000}}>
						<li className="navbar__item">
							<a href="/home" className="navbar__links" id="home-page">Home</a>
						</li>
						<li className="navbar__item">
							<a href="/about" className="navbar__links" id="about-page">About</a>
						</li>
						<li className="navbar__item">
							<a href="/work" className="navbar__links" id="work-page">Work</a>
						</li>
						<li className="navbar__btn">
							<a href="/contact" className="button" id="contact">Contact</a>
						</li>
					</ul>
					
					}
				</div>
			</nav>
        </motion.div>
    )
}
