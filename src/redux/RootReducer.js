import {combineReducers} from 'redux';
import countriesReducer from './slices/countriesSlice';
import currenciesReducer from './slices/currenciesSlice';

const rootRuducer = combineReducers({
  countries: countriesReducer,
  currencies: currenciesReducer,
});

export default rootRuducer;
