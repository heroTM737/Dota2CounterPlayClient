import axios from 'axios';

export const SHOW_COUNTER = 'SHOW_COUNTER';
export const HIGHTLIGHT_HERO = 'HIGHTLIGHT_HERO';

export function showCounter(name) {
    return {
        type: SHOW_COUNTER,
        payload: name
    }
}

export function hightlightHero(key) {
    return {
        type: HIGHTLIGHT_HERO,
        payload: key
    }
}