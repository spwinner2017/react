import React, { Component } from 'react';
  import  {connect} from 'react-redux'
class SimpleRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div>

            <span>{this.props.age}</span>
            <button type="button" onClick={this.props.onAgeUp}>Add</button>
            <button type="button" onClick={this.props.onAgeDown}>Sub</button>
        </div>  );
    }


   
    }

    const mapDispatchToProps=(dispatch)=>{
        return {
            onAgeUp:()=>dispatch({type:"AGE_UP"}),
            onAgeDown:()=>dispatch({type:"AGE_DOWN"}),
        }
    }
    const mapStateToProps=(state)=>{
        return{
          age:state.age
        }
    }
 
export default connect(mapStateToProps,mapDispatchToProps)(SimpleRedux);