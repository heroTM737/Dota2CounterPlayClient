import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { changeTurn } from '../actions/index';

class MatchPickView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDireTurn: true
        }

        this.changeTurn = this.changeTurn.bind(this);
        this.renderHero = this.renderHero.bind(this);
    }

    renderHero(name) {
        var hero = _.find(this.props.heroes, (o) => o.name == name)
        return (
            <div key={name} className="ImageContainer">
                <img src={hero.image} className="HeroIcon"/>
            </div>
        );
    }

    changeTurn(isDireTurn) {
        this.setState({ isDireTurn });
        this.props.changeTurn(isDireTurn);
    }

    render() {
        var dire = this.props.pick_hero.dire;
        var radiant = this.props.pick_hero.radiant;

        var dires = dire.map(this.renderHero);
        var radiants = radiant.map(this.renderHero);

        var dire_class_name = this.state.isDireTurn ? "active" : "";
        var radiant_class_name = this.state.isDireTurn ? "" : "active";

        return (
            <div className="MatchPickView">
                <div className="row">
                    <div>You</div>
                    <div>Side</div>
                </div>
                <div className={"row MatchPickViewSide " + dire_class_name} onClick={() => this.changeTurn(true)}>
                    <div key="dire_checkbox"><input type="checkbox" /></div>
                    <div key="dire">Dire</div>
                    {dires}
                </div>
                <div className={"row MatchPickViewSide " + radiant_class_name} onClick={() => this.changeTurn(false)}>
                    <div key="radiant_checkbox"><input type="checkbox" /></div>
                    <div key="radiant">Radiant</div>
                    {radiants}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeTurn }, dispatch);
}

function mapStateToProps({heroes, pick_hero}) {
    return { heroes, pick_hero };
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchPickView);