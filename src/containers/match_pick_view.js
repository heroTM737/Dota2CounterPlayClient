import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { changeTurn } from '../actions/index';

import { sides } from '../data/data';

class MatchPickView extends Component {
    constructor(props) {
        super(props);

        this.changeTurn = this.changeTurn.bind(this);
        this.renderHero = this.renderHero.bind(this);
    }

    renderHero(name) {
        var hero = _.find(this.props.heroes, (o) => o.name == name)
        return (
            <div key={name} className="ImageContainer">
                <img src={hero.image} className="HeroIcon" />
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
            var side_class_name = self.props.pick_hero.turn == side ? "active" : "";

            return (
                <div key={side} className={"row MatchPickViewSide " + side_class_name} onClick={() => self.changeTurn(side)}>
                    <div key={`${side}_checkbox`}><input type="checkbox" /></div>
                    <div key={`${side}_name`}>{side}</div>
                    {side_render}
                </div>
            )
        });

        return (
            <div className="MatchPickView">
                <div className="row">
                    <div>You</div>
                    <div>Side</div>
                </div>
                {render_all}
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