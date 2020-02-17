import React from 'react';
// import Button from '../containers/Button';
import SearchByCityId from '../containers/SearchByCityId';
import SearchByZipCode from '../containers/SearchByZipCode';
import CityWeather from '../containers/CityWeather';
import Loading from '../containers/Loading';
import Unit from '../containers/Unit';

function App() {
  return (
    <React.Fragment>
      <Unit />
      <SearchByCityId />
      <SearchByZipCode />
      <Loading />
      <CityWeather />
    </React.Fragment>
  );
}

export default App;
