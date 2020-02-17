import * as types from '../constants/actionTypes';
import initialState from './initialState';

const homeReducer = (state = initialState, action) => {

    switch (action.type){
        case types.GET_WEATHER: 
            return {...state, loading: true};
        case types.GET_WEATHER_SUCCESS:
            return {...state, news: action.weather.description, loading: false};
        default:
            return state;
    }
};

export default homeReducer;