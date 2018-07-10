import React from 'react'
import Link from 'gatsby-link'
import linkedInLogo from '../img/linkedin-logo.svg';

const IndexPage = () => (
	<div>
		<div>
			<h1 className="c-front-page__nametitle">Ayden Aba</h1>
			<h4 className="c-front-page__subtitle">Web Developer</h4>
			<div>
				<p>Web developer based in Adelaide, Australia.</p>
				<p>
					I have a passion for working with startups and early stage ventures - basically projects using cool technology to build cool things.</p> 
				<p>
				My experience ranges from designing full-stack Javascript web applications, to working on blockchain applications, however I feel most at home working in front-end. As well as this I have experience building and maintaining Wordpress and static sites.
				</p>
			</div>
		</div>
		<div className="c-front-page__get-in-touch">
			<small>Get in touch! <a href="mailto:hello@ayden-aba.com">hello@ayden-aba.com</a></small>
		</div>
		<div className="c-front-page__linkedin-logo">
			<a href="https://www.linkedin.com/in/ayden-aba-138985100/" target="_blank">
				<img src={linkedInLogo} />
			</a>
		</div>
	</div>
);

export default IndexPage
