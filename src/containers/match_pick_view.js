import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { changeTurn, unpickHero } from '../actions/index';

import { sides } from '../data/data';

class MatchPickView extends Component {
    constructor(props) {
        super(props);

        this.changeTurn = this.changeTurn.bind(this);
        this.renderHero = this.renderHero.bind(this);
    }

    renderHero(name) {
        var hero = _.find(this.props.heroes, (o) => o.name == name);
        var self = this;
        return (
            <div key={name} className="ImageContainer">
                <img src={hero.image} className="HeroIcon" onClick={() => self.props.unpickHero(name)} />
            </div>
        );
    }

    changeTurn(turn) {
        this.setState({ turn });
        this.props.changeTurn(turn);
    }

    render() {
        var self = this;
        var render_all = sides.map((side) => {
            var side_data = self.props.pick_hero[side];
            var side_render = side_data.map(self.renderHero);
            var active_class_name = self.props.pick_hero.turn == side ? "active" : "";
            var side_class_name = "MatchPickViewSide" + side.charAt(0).toUpperCase() + side.slice(1);
            var className = "MatchPickViewSide " + side_class_name + " " + active_class_name;

            return (
                <div key={side} className={className} onClick={() => self.changeTurn(side)}>
                    <div key={`${side}_name`}>{side}</div>
                    {side_render}
                </div>
            )
        });

        return (
            <div className="MatchPickView">
            <div className="MatchPickViewPick">
                <div className="MatchPickViewPickRadiant">{render_all[0]}</div>
                <div className="MatchPickViewPickDire">{render_all[1]}</div>
            </div>
            <div className="MatchPickViewBan">{render_all[2]}</div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeTurn, unpickHero }, dispatch);
}

function mapStateToProps({ heroes, pick_hero }) {
    return { heroes, pick_hero };
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchPickView);