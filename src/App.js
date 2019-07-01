import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
// import ResultComponent from './components/ResultComponent';
// import KeyPadComponent from "./components/KeyPadComponent";
import ContentComponent  from './components/layouts/content/contentComponent'
import SideBarComponent from './components/layouts/sidebar/sidebarComponent';

// import  UserComponent  from './components/user'
 class App extends Component{
    componentDidMount() {
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
      }
    render (){
         return(
         <div>
       
     <div id="wrapper">
    <SideBarComponent/>
    <ContentComponent/>
</div>
    </div>
         )
     }
 }

export default App;
