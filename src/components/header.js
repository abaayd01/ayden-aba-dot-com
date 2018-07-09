import React, {Component} from 'react'
import Link from 'gatsby-link'
import { TimelineLite, TweenLite } from 'gsap';

import navicon from '../img/navicon.svg';
import aaLogo  from '../img/aa_logo.png';

export const Header = ({ siteTitle }) => (
	<div className="l-master__header c-header">
		<HomeLogo />
		<NavList />
	</div>
);

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

export class MobileHeader extends Component{
	constructor(props){
		super(props);
	
		this.state = {
			open: false
		}

		this.timeline = new TimelineLite({
			paused: true,
		});

		this.onClick = this.onClick.bind(this);
	};

	componentDidMount(){
		const duration = 0.25;
		const t1 =  TweenLite.to("#c-navicon__top-rect", duration , {y: 6, transformOrigin: "center center"});
		const t2 = TweenLite.to("#c-navicon__bottom-rect", duration, {y: -6,  transformOrigin: "center center"});
		const t3 =  TweenLite.to("#c-navicon__top-rect", duration, {rotation: 45, transformOrigin: "center center"});
		const t4 =  TweenLite.to("#c-navicon__bottom-rect", duration, {rotation: -45, transformOrigin: "center center"});

		const t5 = TweenLite.to(".c-header--mobile__nav-list", duration, {height: "100px"});
		const t6 = TweenLite.to(".c-header--mobile__nav-list", duration, {display: 'flex', opacity: 1});
		const t7 = TweenLite.to(".l-master__content--mobile", duration, {top: "100px"});

		this.timeline.add(t1, 0);
		this.timeline.add(t2, 0);
		this.timeline.add(t3, duration*0.5);
		this.timeline.add(t4, duration*0.5);
		this.timeline.add(t5, duration);
		this.timeline.add(t6, duration);
		this.timeline.add(t7, duration);
	};
	
	onClick(){
		if(!this.state.open){
			this.timeline.play();
			this.setState({
				open: true
			});
		}
		else{
			this.timeline.reverse();
			this.setState({
				open: false
			});
		}
	};

	render(){
		return(
			<div className="l-master__header c-header--mobile">
				<div className="c-header--mobile__topbar">
					<div></div>
					<MobileHomeLogo />
					<MobileNavicon 
						onClick={this.onClick}
					/>
				</div>
				<MobileNavList 
					pathname={this.props.pathname}
				/>
			</div>
		)
	};
};

const MobileHomeLogo = ({}) => (
	<Link to='/'>
		<div className="c-header--mobile__home-logo">
			<img src={aaLogo} alt="Home Logo" />
		</div>
	</Link>
);

const MobileNavicon = ({onClick}) => (
	<div className="c-header--mobile__navicon" onClick={onClick}>
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

const MobileNavList = ({ pathname }) => {
	let 
		homeDynamicClasses,
		aboutDynamicClasses, 
		portfolioDynamicClasses, 
		contactDynamicClasses;

	switch(pathname){
		case '/':
			homeDynamicClasses = '--active';
			break;
		case '/about':
			aboutDynamicClasses= '--active';
			break;
		case '/portfolio':
			portfolioDynamicClasses = '--active';
			break;
		case '/contact':
			contactDynamicClasses = '--active';
			break;
	}

	return (
		<div className="c-header--mobile__nav-list">
			<ul>
				<Link activeClassName='nav__item--active' to='/about' className={"c-header--mobile__nav-list__nav-link " + aboutDynamicClasses }><li>About</li></Link>
				<Link activeClassName='nav__item--active' to='/portfolio' className={"c-header--mobile__nav-list__nav-link " + portfolioDynamicClasses }><li>Portfolio</li></Link>
				<Link activeClassName='nav__item--active' to='/contact' className={"c-header--mobile__nav-list__nav-link " + contactDynamicClasses }><li>Contact</li></Link>
			</ul>
		</div>
	);
}

