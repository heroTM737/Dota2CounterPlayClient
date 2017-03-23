import { combineReducers } from 'redux';
import PickHeroReducer from './reducer_pick_hero';
import HightlightHeroReducer from './reducer_hightlight_hero';
import LoadHeroReducer from './reducer_load_hero';

const rootReducer = combineReducers({
  heroes: LoadHeroReducer,
  pick_hero: PickHeroReducer,
  hightlight_hero: HightlightHeroReducer
});

export default rootReducer;
