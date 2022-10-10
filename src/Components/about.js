import React from 'react'
import {motion} from 'framer-motion'
import {PageTransition} from './constants'
import ProgressiveImage from 'react-progressive-image'
import Picture from "./images/IMG_5284.JPG"
import Placeholder from "./images/placeholder1.jpg"

const transistion = {duration: .6, ease:[0.6, 0.01, -0.05, 0.9]}

export default function about() {
    return (
        <motion.div initial= {PageTransition.out} animate={PageTransition.in} exit= {PageTransition.out}>
            <div class="main" id="about">
				<div class="main__container">
					<div class="main__img--container">
						<div whileHover= {{scale: 1.1}} transition ={transistion} class="main__img--card">
							<div class="pic-of-me">
								<motion.div whileHover= {{scale: 1.1}} transition ={transistion}  class ="image--container">
								<ProgressiveImage delay={3000} src={Picture} placeholder={Placeholder}>
  									{src => <img src={src} alt="" />}
								</ProgressiveImage>
								</motion.div>
							</div>
						</div>
					</div>
					<div class="main__content">			
						<h1>WHO I AM</h1>
						<p>Having worked as an Information Technology User Support Assistant at the City of Ottawa, I have experience in the tech industry and knowledge of how to complete deliverables so that a project can be executed to its fullest potential. 
						In my free time, I have created a handful of projects and learned languages on my own such as React.js to enhance my skills and the look of my portfolio website. 
						Also, having worked at Camp Smitty as a Senior Counsellor has helped me develop my interpersonal, leadership, and communication skills. 
						As a Senior Counsellor it was my job to collaborate with my Junior Counsellor, and my superiors to identify problems and implement solutions as a team, and an individual.</p>
						<br></br>
						<h1>Highlights of Qualifications</h1>
						<p>
							<ul>
								<li>Excelled at meeting targets, and consistently surpassed them over an 8-month period at VF Corporation.</li><br></br>
								<li>Leadership skills gained as a Senior Counselor at Camp Smitty by mentoring youth and Junior counsellors.</li><br></br>
								<li>Sound judgement demonstrated by experiencing high intensity and dynamic situations and consistently provided key solutions to problems at Camp Smitty.</li><br></br>
								<li>Fluent in French and Russian: oral, written, and reading </li><br></br>
								<li>Fostered a positive workplace environment for my colleagues – helping improve morale and keeping focused on tasks.</li>
							</ul>
							</p>
						<br></br>
						<button class="main__btn"><a href="/contact" id="contact">Contact</a></button>
					</div>
				</div>
			</div>
        </motion.div>
    )
}
