import axios from 'axios';

const COUNTER_URL = "http://128.88.242.23:7000/api/counter";

export const SHOW_COUNTER = 'SHOW_COUNTER';

export function showCounter(name) {
    console.log(name);
    const url = `${COUNTER_URL}?name=${name}`;
    const request = axios.get(url);

    return {
        type: SHOW_COUNTER,
        payload: name
    }
}