import { combineReducers } from 'redux';
import CounterReducer from './reducer_counter';
import HightlightHeroReducer from './reducer_hightlight_hero';

const rootReducer = combineReducers({
  counter: CounterReducer,
  hightlight_hero: HightlightHeroReducer
});

export default rootReducer;
