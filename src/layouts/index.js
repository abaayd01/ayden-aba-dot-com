import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Media from "react-media";

import { Header, MobileHeader } from '../components/header';
import '../scss/style.scss';

const Content = ({children, className}) => {
	return (
		<div className='l-master__content' >
			{children()}
		</div>
	);
}

const MobileContent = ({children, className}) => {
	return (
		<div className='l-master__content--mobile' >
			{children()}
		</div>
	);
}

const Footer = ({className}) => {
	return (
		<div className='l-master__footer' >
			<small>This is the footer</small>	
		</div>
	);
}

const Layout = ({ children, data, location }) => (
  <div className='l-master'>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
		<Media query="(min-width: 992px)">
			{matches =>
					matches ? (
						<Header pathname={location.pathname}/>
					) : (
						<MobileHeader pathname={location.pathname}/>
					)
			}
		</Media>
		<Media query="(min-width: 992px)">
			{matches =>
					matches ? (
						<Content> 
							{children}
						</Content>
					) : (
						<MobileContent> 
							{children}
						</MobileContent>
					)
			}
		</Media>
		<Footer />
  </div>
)

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
