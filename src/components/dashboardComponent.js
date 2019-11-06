import React, { Component } from 'react';
class DashboardComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-6">
					<div className="panel">
						<div className="panel-heading">
							<i className="icon icon-chevron-up chevron" />
							<i className="icon icon-wrench pull-right" /> Test Application
						</div>
						<div className="panel-content">
							<div className="btn-group btn-group-justified">
								<a href="#" className="btn btn-primary col-sm-3">
									<i className="glyphicon glyphicon-plus" />
									<p>Doctors</p>
								</a>
								<a href="#" className="btn btn-primary col-sm-3">
									<i className="glyphicon glyphicon-user" />
									<p>Patients</p>
								</a>
								<a href="#" className="btn btn-primary col-sm-3">
									<i className="glyphicon glyphicon-cog" />
									<p>Equipments</p>
								</a>
								<a href="#" className="btn btn-primary col-sm-3">
									<i className="glyphicon glyphicon-question-sign" />
									<p>Emergency</p>
								</a>
							</div>
						</div>
					</div>

					<div className="panel">
						<div className="panel-heading">
							<i className="icon icon-chevron-up chevron" />
							<i className="icon icon-wrench pull-right" /> Patinet Reports
						</div>
						<div className="panel-content">
							<div className="table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>Visits</th>
											<th>ROI</th>
											<th>Source</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>45</td>
											<td>2.45%</td>
											<td>Direct</td>
										</tr>
										<tr>
											<td>289</td>
											<td>56.2%</td>
											<td>Referral</td>
										</tr>
										<tr>
											<td>98</td>
											<td>25%</td>
											<td>Type</td>
										</tr>
										<tr>
											<td>..</td>
											<td>..</td>
											<td>..</td>
										</tr>
										<tr>
											<td>..</td>
											<td>..</td>
											<td>..</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="well">
						Inbox Messages{' '}
						<span className="badge pull-right" style={{ background: 'green' }}>
							3
						</span>
					</div>
					<div className="panel panel-default">
						<div className="panel-heading">Alerts</div>
						<div className="panel-body">
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DashboardComponent;
