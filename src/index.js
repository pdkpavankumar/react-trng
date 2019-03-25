/**import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail author="sam" timeAgo="Today at 4.00PM" bodyText="hello afsdfdsfdsf" imageSrc={faker.image.avatar()} />
            <CommentDetail author="pam" timeAgo="Today at 2.00AM" bodyText="hai afsdfdsfdsf" imageSrc={faker.image.avatar()} />
            <CommentDetail author="nam" timeAgo="Yesterday at 6.00PM" bodyText="how afsdfdsfdsf" imageSrc={faker.image.avatar()} />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root')); **/

import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, errMsg: '' };
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ latitude: position.coords.latitude });
    }, (error) => {
      this.setState({ errMsg: error.message });
    });
  }
  render() {
    if (this.state.errMsg && !this.state.latitude) {
      return (<div>Error: {this.state.errMsg} </div>);
    }
    if (!this.state.errMsg && this.state.latitude) {
      return (<div>Latitude: {this.state.latitude}</div>)
    }
    return (<div>Loading...</div>);
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
