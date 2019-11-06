import React from 'react';

const withStorage = (WrappedComponent) => {
  class HOC extends React.Component {
    state = {
      localStorageAvailable: false, 
    };
  
    componentDidMount() {
       this.checkLocalStorageExists();
    }
  
    checkLocalStorageExists() {
      const testKey = 'test';

      try {
          localStorage.setItem(testKey, testKey);
          localStorage.removeItem(testKey);
          this.setState({ localStorageAvailable: true });
      } catch(e) {
          this.setState({ localStorageAvailable: false });
      } 
    }
  
    load = (key) => {
      if (this.state.localStorageAvailable) {
        return localStorage.getItem(key); 
      }
      
      return null;
    }
    
    save = (key, data) => {
      console.log('save fucntion executed');
      if (this.state.localStorageAvailable) {
        localStorage.setItem(key, data);
      }
    }
    
    remove = (key) => {
      if (this.state.localStorageAvailable) {
        localStorage.removeItem(key);
      }
    }
    
    render() {
      return (
        <WrappedComponent
          load={this.load}
          save={this.save}
          remove={this.remove}
          {...this.props}
        />
      );
    }
  }
    
  return HOC; 
}

export default withStorage;