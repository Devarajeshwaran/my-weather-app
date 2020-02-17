import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUnit } from '../actions';
import { Button, ButtonGroup } from 'react-bootstrap';

class UnitContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const unit = event.target.value;
    this.props.setUnit({ unit });
  }

  render() {
    const { unit } = this.props;
    return (
        <React.Fragment>
            Select Unit: 
            <div style={{display: 'inline-flex'}}>
                <ButtonGroup>
                    <Button variant="primary" style={{backgroundColor: unit === 'F' ? 'Grey' : ''}} value="F" onClick={this.handleClick}><sup>o</sup>F</Button>
                    <Button variant="primary" style={{backgroundColor: unit === 'C' ? 'Grey' : ''}} value="C" onClick={this.handleClick}><sup>o</sup>C</Button>
                </ButtonGroup>
            </div>
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
    unit: state.unit,
});

function mapDispatchToProps(dispatch) {
    return {
      setUnit: unit => dispatch(setUnit(unit))
    };
  }

const Unit = connect(
    mapStateToProps,
  mapDispatchToProps
)(UnitContainer);

export default Unit;