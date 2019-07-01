import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import $ from 'jquery';
class SideBarComponent extends  Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
    $('.active a.clickable').on("click", function (e) {
        if ($(this).hasClass('panel-collapsed')) {
            // expand the panel
            $(this).parents('.active').find('.collapsein').slideDown();
            $(this).removeClass('panel-collapsed');
            $(this).find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
        }
        else {
            // collapse the panel
            $(this).parents('.active').find('.collapsein').slideUp();
            $(this).addClass('panel-collapsed');
            $(this).find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
        }
    });
}
    render() { 
        return ( 
        <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
            <li className="sidebar-brand">
             React Geek
            </li>
            <li>
             <Link exact to="/">Dashboard</Link>
            </li>
            <li>
            <Link exact to="/about">About</Link>
            </li>
            <li>
            <Link exact to="/user">User</Link>
            </li>
            <li className="active">
           <a href="/#" className="clickable panel-collapsed">Employee<span className="pull-right"><i className="glyphicon glyphicon-chevron-down"></i></span></a>
                <ul className="collapsein pointer">
                    <li className="pointer white"><label className="pointer white"><Link to="/employee/profile">Profile</Link></label></li>
                    <li className="pointer white"><label className="pointer white"><Link to="/employee/salary">Salary</Link></label></li>        
                    <li className="pointer white"><label className="pointer white"><Link to="/employee/leave">Leave</Link></label></li>                         
                </ul>
</li>
            
        </ul>
    </div> );
    }
}
 
export default SideBarComponent;