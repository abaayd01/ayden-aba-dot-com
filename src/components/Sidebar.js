import React from 'react'
import Link from 'gatsby-link'

import Nav from './Nav';

const HomeLogo = ({}) => (
	<Link to='/' className="home-link">
		<div className="home-logo">
			<h1>AA</h1>
		</div>
	</Link>
);

const Sidebar = ({ siteTitle }) => (
	<div id="sidebar" className="column col-3">
		<HomeLogo />
		<Nav />
	</div>
);

export default Sidebar;
