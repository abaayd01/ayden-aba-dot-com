import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Media from "react-media";

import { Header, HeaderMobile } from '../components/Header';
import '../scss/style.scss';

const Content = ({children, className}) => {
	return (
		<div className='l-master__content' >
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

const Layout = ({ children, data }) => (
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
						<Header />
					) : (
						<HeaderMobile />
					)
			}
		</Media>
		<Content> 
			{children}
		</Content>
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
