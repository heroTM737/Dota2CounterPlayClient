import axios from 'axios';
import { base_url } from '../config/service';

export const PICK_HERO = 'PICK_HERO';
export const UNPICK_HERO = 'UNPICK_HERO';
export const HIGHTLIGHT_HERO = 'HIGHTLIGHT_HERO';
export const CHANGE_TURN = 'CHANGE_TURN';
export const LOAD_HERO = 'LOAD_HERO';

const API_HEROES = base_url + "/service/dota2/heroes";

export function loadHero() {
    const request = axios.get(API_HEROES);

    return {
        type: LOAD_HERO,
        payload: request
    }
}

export function pickHero(name) {
    return {
        type: PICK_HERO,
        payload: name
    }
}

export function unpickHero(name) {
    return {
        type: UNPICK_HERO,
        payload: name
    }
}

export function hightlightHero(key) {
    return {
        type: HIGHTLIGHT_HERO,
        payload: key
    }
}

export function changeTurn(turn) {
    return {
        type: CHANGE_TURN,
        payload: turn
    }
}