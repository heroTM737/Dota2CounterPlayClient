import { LOAD_HERO } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case LOAD_HERO:
            return action.payload.data;
    }

    return state;
}