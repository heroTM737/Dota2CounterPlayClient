import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class CounterView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var self = this;
        var name = this.props.counter;
        axios.get("http://128.88.242.23:7000/api/counter?name=" + name)
            .then(function (response) {
                self.setState({
                    heroes: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        return (
            <div className="" >{this.props.counter}</div>
        );
    }
}

function mapStateToProps({counter}) {
    return {counter};
}

export default connect(mapStateToProps)(CounterView);