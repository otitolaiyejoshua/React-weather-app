import { combineReducers } from 'redux';
import WeatherRuducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherRuducer
});

export default rootReducer;
