import { put, takeLatest, all, select, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import * as selectors from './selectors';
import axios from 'axios';
import * as keys from './keys';

function* getWeatherbyCityId({cityId}){
    let formattedUnit = '';
    const unit = yield select(selectors.unit);
    if(unit === 'C') {
        formattedUnit = 'metric';
    } else {
        formattedUnit = 'imperial';
    }
    const json = yield fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId.cityId}&units=${formattedUnit}&appid=${keys.API_KEY}`)
        .then(response => response.json(), );    
    yield put({ type: types.GET_WEATHER_BY_CITY_ID_SUCCESS, payload: json, });
}

function* getWeatherByZipCode({zipCode}){
    let formattedUnit = '';
    const unit = yield select(selectors.unit);
    if(unit === 'C') {
        formattedUnit = 'metric';
    } else {
        formattedUnit = 'imperial';
    }
    const json = yield axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.zipCode}&units=${formattedUnit}&appid=${keys.API_KEY}`);
    yield put({ type: types.GET_WEATHER_BY_ZIP_CODE_SUCCESS, payload: json.data, });
}


function* setUnit({unit}) {
    yield put({ type: types.SET_UNIT_SUCCESS, payload: unit, });
}

function* actionWatcher() {
    yield takeLatest(types.GET_WEATHER_BY_CITY_ID, getWeatherbyCityId);
    yield takeLatest(types.GET_WEATHER_BY_ZIP_CODE, getWeatherByZipCode);
    yield takeLatest(types.SET_UNIT, setUnit);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
 }

 