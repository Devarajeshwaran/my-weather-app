import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getWeatherByZipCode } from '../actions';

class SearchByZipCodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        zipCode: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { zipCode } = this.state;
    this.props.getWeatherByZipCode({ zipCode });
    this.setState({ zipCode: "" });
  }

  render() {
    const { zipCode } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="zipCode">Search By Zip Code: </label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
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
      getWeatherByZipCode: zipCode => dispatch(getWeatherByZipCode(zipCode))
    };
  }

const SearchByZipCode = connect(
  null,
  mapDispatchToProps
)(SearchByZipCodeForm);

export default SearchByZipCode;