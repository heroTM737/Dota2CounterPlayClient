import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pickHero, loadHero } from '../actions/index';

class HeroPicker extends Component {
    constructor(props) {
        super(props);

        this.onImageClick = this.onImageClick.bind(this);
    }

    componentDidMount() {
        this.props.loadHero();
    }

    onImageClick(name) {
        this.props.pickHero(name);
    }

    render() {
        var key = this.props.hightlight_hero;
        key = key.trim().toLowerCase();

        var heroes = this.props.heroes.map((hero) => {
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
    return bindActionCreators({ pickHero, loadHero }, dispatch);
}

function mapStateToProps({heroes, hightlight_hero}) {
    return { heroes, hightlight_hero };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroPicker);