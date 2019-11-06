import React from 'react';
import withStorage from '../higher-order-components/withStorage';

class ComponentNeedingStorage extends React.Component {
  state = {
    username: '',
    favoriteMovie: '',
  }

  componentDidMount() {
    const username = this.props.load('username');
    console.log('username',username);
    const favoriteMovie = this.props.load('favoriteMovie');
    
    if (!username || !favoriteMovie) {
      // This will come from the parent component
      // and would be passed when we spread props {...this.props}
    //   this.props.reallyLongApiCall()
    //     .then((user) => {
    //       this.props.save('username', user.username) || '';
    //       this.props.save('favoriteMovie', user.favoriteMovie) || '';
    //       this.setState({
    //         username: user.username,
    //         favoriteMovie: user.favoriteMovie,
    //       });
        // }); 
        this.props.save('username', 'Sarjerao Ghadage');
        this.setState({
            username: 'Sarjerao',
            favoriteMovie: 'Gravity',
          });
    } else {
      this.setState({ username, favoriteMovie })
    }
  }

  render() {
    const { username, favoriteMovie } = this.state;
    
    if (!username || !favoriteMovie) {
      return <div>Loading...</div>; 
    }
    
    return (
      <div>
        My username is {username}, and I love to watch {favoriteMovie}.
      </div>
    )
  }
}

const WrappedComponent = withStorage(ComponentNeedingStorage);

export default WrappedComponent;