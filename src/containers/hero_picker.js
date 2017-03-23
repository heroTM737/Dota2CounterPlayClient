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
        var key = this.props.hightlight_hero;
        key = key.trim().toLowerCase();

        var heroes = this.state.heroes.map((hero) => {
            var name = hero.name;
            var localized_name = hero.localized_name;
            var localized_name_lower_case = localized_name.toLowerCase();

            var hightlight_style = "";
            if (key && key != "") {
                (name.indexOf(key) >= 0 || localized_name_lower_case.indexOf(key) >= 0) ? hightlight_style = "Shine" : hightlight_style = "Faint";
            }

            return (
                <div key={name} className={"ImageContainer " + hightlight_style}>
                    <img key={name} src={hero.image} title={localized_name} onClick={() => this.onImageClick(name)} className="HeroIcon" />
                </div>
            );
        });

        return (
            <div className="HeroPicker">{heroes}</div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showCounter }, dispatch);
}

function mapStateToProps({hightlight_hero}) {
    return { hightlight_hero };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroPicker);