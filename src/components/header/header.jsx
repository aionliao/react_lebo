import React from 'react';
import './header.less';

export default class Header extends React.Component {
	render() {
		return <header className="header">
					<h2>{this.props.title}</h2>
					{this.props.children}
				</header>
	}
}
