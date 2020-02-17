import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { getWeatherByCityId } from '../actions';

class SearchByCityIdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cityId: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { cityId } = this.state;
    this.props.getWeatherByCityId({ cityId });
    this.setState({ cityId: "" });
  }

  render() {
    const { cityId } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="city">Search By City Id: </label>
          <input
            type="text"
            id="cityId"
            value={cityId}
            onChange={this.handleChange}
          />
            <Button type="submit">SUBMIT</Button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
      getWeatherByCityId: cityId => dispatch(getWeatherByCityId(cityId))
    };
  }

const SearchByCityId = connect(
  null,
  mapDispatchToProps
)(SearchByCityIdForm);

export default SearchByCityId;