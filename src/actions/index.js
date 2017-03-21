import axios from 'axios';

export const SHOW_COUNTER = 'SHOW_COUNTER';

export function showCounter(name) {
    return {
        type: SHOW_COUNTER,
        payload: name
    }
}