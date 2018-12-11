import React from 'react';
import Navbar from './Partials/Navbar';
import Footer from './Partials/Footer';
import Header from './Partials/Header';
import FeaturedPost from './FeaturedPost';
import Stories from './Stories';

export default class Index extends React.Component {

    render() {
        return (
            <React.Fragment>
<html lang="en">
<Header />
<body>

<Navbar />

<div className="container">
	<div className="mainheading">
		<h1 className="sitetitle">Mediumish</h1>
		<p className="lead">
			 Bootstrap theme, medium styles, simply perfect for bloggers
		</p>
	</div>


	<FeaturedPost />

	<Stories />
	<Footer />

</div>

<script src="assets/js/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>
            </React.Fragment>
        );
    }
}