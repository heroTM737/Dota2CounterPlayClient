import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pickHero, loadHero } from '../actions/index';
import { sides } from '../data/data';

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
        let { heroes, activeHeroes, disabledHeroes } = this.props;

        heroes = heroes.map((hero) => {
            let name = hero.name;
            let localized_name = hero.localized_name;

            let hightlight_style = "";
            (activeHeroes.indexOf(name) >= 0) ? hightlight_style = "Shine" : hightlight_style = "Faint";
            (disabledHeroes.indexOf(hero.name) >= 0) ? hightlight_style += " Disabled" : null ;

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

function mapStateToProps({ heroes, pick_hero, hightlight_hero }) {
    //heroes which are picked or banned
    let disabledHeroes = [];
    sides.map((side) => {
        pick_hero[side].map((name) => disabledHeroes.push(name));
    });

    //heroes which are matched filter
    let activeHeroes = [];
    var key = hightlight_hero.trim().toLowerCase();
    heroes.map((hero) => {
        let name = hero.name;
        if (key && key != "") {
            let localized_name = hero.localized_name;
            let localized_name_lower_case = localized_name.toLowerCase();
            if (name.indexOf(key) >= 0 || localized_name_lower_case.indexOf(key) >= 0) {
                activeHeroes.push(name);
            }
        } else {
            activeHeroes.push(name);
        }
    });

    return { heroes, activeHeroes, disabledHeroes };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroPicker);