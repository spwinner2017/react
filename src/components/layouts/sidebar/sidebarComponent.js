import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
class SideBarComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		$('.active a.clickable').on('click', function(e) {
			if ($(this).hasClass('panel-collapsed')) {
				// expand the panel
				$(this).parents('.active').find('.collapsein').slideDown();
				$(this).removeClass('panel-collapsed');
				$(this).find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
			} else {
				// collapse the panel
				$(this).parents('.active').find('.collapsein').slideUp();
				$(this).addClass('panel-collapsed');
				$(this).find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
			}
		});
	}
	render() {
		return (
			<div>
				<div id="sidebar-wrapper">
					<ul className="sidebar-nav">
						<li className="sidebar-brand" style={{ color: 'white' }}>
							Test Application.
						</li>
						<li>
							<Link exact to="/">
								Dashboard
							</Link>
						</li>
						<li>
							<Link exact to="/about">
								Patinet
							</Link>
						</li>
						<li>
							<Link exact to="/user">
								User
							</Link>
						</li>
						<li>
							<Link exact to="/login">
								Register
							</Link>
						</li>
						{/* <li>
            <Link exact to="/redux">redux</Link>
            </li> */}
						{/* <li>
            <Link exact to="/hoc">HOC</Link>
            </li> */}
						<li>{/* <Link exact to="/auth">Login</Link> */}</li>
						<li className="active">
							<a href="javascript:void(0)" className="padding-right clickable panel-collapsed">
								Dropdown Menu<span className="pull-right">
									<i className="glyphicon glyphicon-chevron-down" />
								</span>
							</a>
							<ul className="collapsein pointer">
								<li className="pointer white">
									<label className="pointer white">
										<Link to="/employee/profile">Link 1</Link>
									</label>
								</li>
								<li className="pointer white">
									<label className="pointer white">
										<Link to="/employee/salary">Link 2</Link>
									</label>
								</li>
								<li className="pointer white">
									<label className="pointer white">
										<Link to="/employee/leave">Link 3</Link>
									</label>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default SideBarComponent;
