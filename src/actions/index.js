import * as types from '../constants/actionTypes';

export const getWeatherByCityId = (cityId) => ({
    type: types.GET_WEATHER_BY_CITY_ID,
    cityId: cityId,
});

export const getWeatherByZipCode = (zipCode) => ({
    type: types.GET_WEATHER_BY_ZIP_CODE,
    zipCode: zipCode,
});

export const setUnit = (unit) => ({
    type: types.SET_UNIT,
    unit: unit,
});