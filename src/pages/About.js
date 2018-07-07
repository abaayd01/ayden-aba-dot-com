import React from 'react';
import Link from 'gatsby-link';

const About = () => (
	<div>
		<section>
			<h5>Web Stuff:</h5>
			<p>Hi there! I’m a Freelance Web Devloper based in Adelaide, Australia.</p>
			<p>Mainly I specialise in React front-end development, however I like to think I’m knowledgeable across the full JavaScript MERN stack (MongoDB + Express + React + NodeJS) - so I can build front-ends with the “bigger picture” in mind.</p>
			<p>Outside of working with React, I have skills and experience in building blockchain applications, and how we can use React (and a raft of other tools) to build front-ends for them.</p>
			<p>
				Other skills and services I offer to do with the web include:
			</p>
			<ul>
				<li>custom static website builds</li>
				<li>custom Wordpress website builds</li>
				<li>custom Application Programming Interface integrations</li>
			</ul>
		</section>

		<section>
			<h5>Not Web Stuff:</h5>
			<p>
				Graduated from the University of Adelaide with a Bachelor of Engineering (Electrical & Electronic)(First Class Honours) with a Bachelor of Finance in 2018.
			</p>
			<p>
				Previously worked in the equity-crowdfunding space at Enable Funding, in a business analyst role.
			</p>
			<p>
				Wrote an honours thesis which sought to investigate the real (not “hype”) potential of blockchain technology in the context of equity-crowdfunding. Read it here.
			</p>
		</section>
	</div>
);

export default About;
