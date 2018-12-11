import React from 'react';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
		<p className="pull-left">
			 Copyright &copy; 2017 Your Website Name
		</p>
		<p className="pull-right">
			 Mediumish Theme by <a target="_blank" href="https://www.wowthemes.net">WowThemes.net</a>
		</p>
		<div className="clearfix">
		</div>
	</div>
        );
    }
}