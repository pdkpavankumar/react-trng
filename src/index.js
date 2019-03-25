import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {
    state = { latitude: null, errMsg: '' };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({ latitude: position.coords.latitude });
        }, (error) => {
            this.setState({ errMsg: error.message });
        });
    }

    renderContent() {
        if (this.state.errMsg && !this.state.latitude) {
            return (<div>Error: {this.state.errMsg} </div>);
        }
        if (!this.state.errMsg && this.state.latitude) {
            return (
                <SeasonDisplay latitude={this.state.latitude} />
            );
        }
        return <Spinner message="Please give some input" />;
    }

    render() {
        return (<div>
            {this.renderContent()}
        </div>);
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
