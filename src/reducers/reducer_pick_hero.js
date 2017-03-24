import _ from 'lodash';

import { PICK_HERO, CHANGE_TURN } from '../actions/index';
import { sides } from '../data/data.js';

var default_state = {
    turn: sides[0],
    pick: ""
}

sides.map((side) => default_state[side] = []);

function createPickHeroState(state, action) {
    var pick_hero = action.payload;
    var turn = state.turn;

    var hero_exist = false;
    for (var i = 0; i < sides.length; i++) {
        if (_.find(state[sides[i]], (o) => o == pick_hero)) {
            hero_exist = true;
            break;
        }
    }

    var new_state = _.clone(state);
    new_state.pick = pick_hero;

    if (!hero_exist && state[turn].length < 5) {
        new_state[turn] = [...state[turn], pick_hero];
    }

    return new_state;
}

export default function (state = default_state, action) {
    switch (action.type) {
        case PICK_HERO:
            return createPickHeroState(state, action);
        case CHANGE_TURN:
            var new_state = _.clone(state);
            new_state.turn = action.payload;
            return new_state;
    }

    return state;
}