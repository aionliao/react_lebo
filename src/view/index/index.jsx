import React from 'react';
import {Link} from 'react-router';
import Headers from '../../components/header/header.jsx';
import './index.less';

export default class Index extends React.Component {
	render () {
		return <Headers>
					<img className="logo" src={require('../../assets/img/logo.jpg')} />
		            <Link to="/download" className="download">
		                <span className="head_text">下载客户端</span>
		            </Link>
				</Headers>
	}
}
