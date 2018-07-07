import React from 'react'
import Link from 'gatsby-link'

import navicon from '../img/navicon.svg';
import aaLogo  from '../img/aa_logo.png';

const HomeLogo = ({}) => (
	<Link to='/'>
		<div className="c-header__home-logo">
			<h1>AA</h1>
		</div>
	</Link>
);

const NavList = ({}) => (
	<div className="c-header__nav-list">
		<ul>
			<Link activeClassName='nav__item--active' to='/about' className="nav__item"><li>About</li></Link>
			<Link activeClassName='nav__item--active' to='/portfolio' className="nav__item"><li>Portfolio</li></Link>
			<Link activeClassName='nav__item--active' to='/contact' className="nav__item"><li>Contact</li></Link>
		</ul>
	</div>
);

export const Header = ({ siteTitle }) => (
	<div className="l-master__header c-header">
		<HomeLogo />
		<NavList />
	</div>
)

const HomeLogoMobile = ({}) => (
	<Link to='/'>
		<div className="c-header--mobile__home-logo">
			<img src={aaLogo} alt="Home Logo" />
		</div>
	</Link>
);

export const HeaderMobile = ({ siteTitle }) => {
	return (
		<div className="l-master__header c-header--mobile">
			<div></div>
			<HomeLogoMobile />
			<div className="c-header--mobile__navicon">
				<img src={navicon} alt="navicon" />
			</div>
		</div>
	);
}
