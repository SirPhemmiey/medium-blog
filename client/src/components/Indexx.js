import React from 'react';
import Header from './Partials/Header';
import Navbar from './Partials/Navbar';
import Footer from './Partials/Footer';
import FeaturedPost from './FeaturedPost';
import Stories from './Stories';

export default class Index extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Header />
            <Navbar />
            <div classNameName="container">
                <div className="mainheading">
		<h1 className="sitetitle">Mediumish</h1>
		<p className="lead">
			 Bootstrap theme, medium style, simply perfect for bloggers
		</p>
	</div>
            </div>
            <FeaturedPost />
            <Stories />
            <Footer />
            </React.Fragment>
        );
    }
}