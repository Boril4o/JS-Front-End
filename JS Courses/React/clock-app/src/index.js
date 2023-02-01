import React from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
             1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return <h1>{this.state.date.toLocaleTimeString()}</h1>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);