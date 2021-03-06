import React, {Component} from 'react'
import Link from 'gatsby-link'
import { TimelineLite, TweenLite } from 'gsap';

import navicon from '../img/navicon.svg';
import aaLogo  from '../img/aa_logo.png';

const HomeLogo = ({}) => (
	<div className="c-header__home-logo">
		<img src={aaLogo} alt="Home Logo" />
	</div>
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

export const HeaderConstruction = ({ siteTitle }) => (
	<div className="l-master__header_contruction c-header">
		<HomeLogo />
	</div>
);

const MobileHomeLogo = ({}) => (
	<Link to='/'>
		<div className="c-header--mobile__home-logo">
			<img src={aaLogo} alt="Home Logo" />
		</div>
	</Link>
);

class MobileNavicon extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
		this.timeline = new TimelineLite({
			paused: true,
		});
	
		this.state = {
			active: false 
		}
	}

	componentDidMount(){
	}

	onClick(){
	}

	render() {
		return (
			<div className="c-header--mobile__navicon" onClick={this.props.onClick}>
				<svg width="31px" height="31px" viewBox="0 0 31 14" version="1.1">
					<g id="Page-1" stroke="none" fill="none">
						<g id="Mobile" transform="translate(-278.000000, -28.000000)" fill="#9D9D9D">
							<g id="Group" transform="translate(278.000000, 28.000000)">
								<rect id="c-navicon__top-rect" x="0" y="0" width="31" height="2" rx="1"></rect>
								<rect id="c-navicon__bottom-rect" x="0" y="12" width="31" height="2" rx="1"></rect>
							</g>
						</g>
					</g>
				</svg>
			</div>
		);
	}
}

class MobileNavList extends Component{
	constructor(props){
		super(props);
	}

	onClick(){
	}

	render(){
		return (
			<div className="c-header--mobile__nav-list">
				<ul>
					<Link activeClassName='nav__item--active' to='/about' className="nav__item"><li>About</li></Link>
					<Link activeClassName='nav__item--active' to='/portfolio' className="nav__item"><li>Portfolio</li></Link>
					<Link activeClassName='nav__item--active' to='/contact' className="nav__item"><li>Contact</li></Link>
				</ul>
			</div>
		)
	};
}

export class MobileHeaderConstruction extends Component{
	constructor(props){
		super(props);
	
	};

	componentDidMount(){
	};
	
	onClick(){
	};

	render(){
		return(
			<div className="l-master__header c-header--mobile">
				<div></div>
				<MobileHomeLogo />
				<div></div>
			</div>
		)
	};
};
