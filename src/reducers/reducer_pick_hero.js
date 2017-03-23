import { PICK_HERO, CHANGE_TURN } from '../actions/index';
import _ from 'lodash';

var default_state = {
    isDireTurn: true,
    pick: "",
    dire: [],
    radiant: []
}

export default function (state = default_state, action) {
    var dire = state.dire;
    var radiant = state.radiant;

    var pick_hero = action.payload;
    var hero_exist = false;
    if (_.find(dire, (o) => o == pick_hero) || _.find(radiant, (o) => o == pick_hero)) {
        hero_exist = true;
    }

    if (!hero_exist) {
        if (state.isDireTurn) {
            if (state.dire.length < 5)
                dire = [...state.dire, action.payload];
        } else if (state.radiant.length < 5) {
            radiant = [...state.radiant, action.payload];
        }
    }


    switch (action.type) {
        case PICK_HERO:
            return {
                isDireTurn: state.isDireTurn,
                pick: action.payload,
                dire: dire,
                radiant: radiant
            };
        case CHANGE_TURN:
            return {
                isDireTurn: action.payload,
                pick: state.pick,
                dire: state.dire,
                radiant: state.radiant
            }
    }

    return state;
}