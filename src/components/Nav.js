import React from 'react';
import Link from 'gatsby-link'

const Nav = ({}) => (
	<div className="nav">
		<ul>
			<Link activeClassName='nav__item--active' to='/about' className="nav__item"><li>About</li></Link>
			<Link activeClassName='nav__item--active' to='/portfolio' className="nav__item"><li>Portfolio</li></Link>
			<Link activeClassName='nav__item--active' to='/contact' className="nav__item"><li>Contact</li></Link>
		</ul>
	</div>
);

export default Nav;
