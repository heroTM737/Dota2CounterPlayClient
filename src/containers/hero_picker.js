import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { showCounter } from '../actions/index';

class HeroPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: []
        }

        this.onImageClick = this.onImageClick.bind(this);
    }

    componentDidMount() {
        var self = this;
        axios.get("http://128.88.242.23:7000/api/heroes")
            .then(function (response) {
                self.setState({
                    heroes: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    onImageClick(name) {
        this.props.showCounter(name);
    }

    render() {
        var heroes = this.state.heroes.map((hero) => {
            var name = hero.name;
            return (
                <div className="ImageContainer">
                    <img key={name} src={hero.image} title={name} onClick={() => this.onImageClick(name)} />
                </div>
            );
        });

        var container_style = {
            width: "50%"
        }

        return (
            <div className="HeroPicker" style={container_style}>{heroes}</div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showCounter }, dispatch);
}

export default connect(null, mapDispatchToProps)(HeroPicker);