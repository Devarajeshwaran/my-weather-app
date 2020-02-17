import * as types from '../constants/actionTypes';
import initialState from './initialState';

const reducer = (state = initialState, action) => {

    switch (action.type){
        case types.GET_WEATHER_BY_CITY_ID: 
            return {...state, loading: true};
        case types.GET_WEATHER_BY_CITY_ID_SUCCESS:
            return {
                ...state, 
                coord: action.payload.coord,
                weather: action.payload.weather[0],
                base: action.payload.base,
                main: action.payload.main,
                wind: action.payload.wind,
                sys: action.payload.sys,
                name: action.payload.name,
                loading: false
            };
        case types.GET_WEATHER_BY_ZIP_CODE_SUCCESS:
            return {
                ...state, 
                coord: action.payload.coord,
                weather: action.payload.weather[0],
                base: action.payload.base,
                main: action.payload.main,
                wind: action.payload.wind,
                sys: action.payload.sys,
                name: action.payload.name,
                loading: false
            };
        case types.SET_UNIT:
            return {...initialState};
        case types.SET_UNIT_SUCCESS:
            return {...state, unit: action.payload.unit};
        default:
            return state;
    }
};

export default reducer;