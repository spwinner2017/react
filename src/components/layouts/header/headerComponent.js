import React, { Component } from 'react';
class HeaderComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="row">
				<nav className="navbar navbar-default topbar" style={{ marginBottom: 0 }}>
					<div className="container-fluid">
						<div className="navbar-header brandicon">
							<a href="#menu-toggle" id="menu-toggle" class="navbar-brand">
								<i class="fa fa-align-justify" style={{ fontSize: 18, margin: 2 }} />
							</a>
							<a className="navbar-brand" href="#">
								{' '}
								Test Application
							</a>
						</div>
						<ul className="nav navbar-nav  navbar-right">
							<li class="dropdown">
								<a class="dropdown-toggle  waves-effect waves-light" data-toggle="dropdown" href="#">
									<i class="fa fa-user-circle topicon" aria-hidden="true" />
								</a>
								<ul class="dropdown-menu dropdown">
									<li>
										<a href="#">Profile </a>
									</li>
									<li>
										<a href="#">Change Password</a>
									</li>
									<li>
										<a href="#">Logout</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default HeaderComponent;
