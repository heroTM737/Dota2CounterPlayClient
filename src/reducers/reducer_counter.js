import { SHOW_COUNTER } from '../actions/index';

export default function(state = "", action) {
    switch (action.type) {
    case SHOW_COUNTER:
        return action.payload;
    }

    return state;
}