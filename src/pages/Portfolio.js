import React from 'react';
import Link from 'gatsby-link';

const PortfolioItem = () => {
	return(
		<div> 
			<div>
				<img />
			</div>	
			<div>
				<h3>Title</h3>
				<h4>Subtitle</h4>
			</div>
		</div>
	);
};

const Portfolio = () => (
  <div>
		<PortfolioItem />
		<PortfolioItem />
		<PortfolioItem />
		<PortfolioItem />
  </div>
);

export default Portfolio;
