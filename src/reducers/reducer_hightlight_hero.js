import { HIGHTLIGHT_HERO } from '../actions/index';

export default function (state = "", action) {
    switch (action.type) {
        case HIGHTLIGHT_HERO:
            return action.payload;
    }

    return state;
}