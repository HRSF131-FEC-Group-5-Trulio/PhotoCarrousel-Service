import React, { useState } from 'react';
import styled from 'styled-components';

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.div`
  cursor: pointer;
  opacity: 0;
  position: absolute;

  &:checked + Label::before {
    content: '';
    background-color: rgb(0, 120, 130);
    box-shadow: rgb(0, 120, 130) 0px 0px 2px;
    transition: background-color 0.2s, box-shadow 0.3s;
  }
`;

const Label = styled.div`
  cursor: pointer;
  display: flex;
  color: rgb(134, 144, 153);
  font-size: 12px;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;

  &::before {
    content: '';
    height: 14px;
    width: 14px;
    border-radius: 3px;
    margin-right: .5em;
    border: .05em solid lightgrey;
  }

  &:hover::before {
    border: 1px solid black;
    box-shadow: black 0px 0px 2px;
    transition: border-color 0.2s, box-shadow 0.3s;
  }
`;

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(event) {
    this.setState({
      checked: event.target.checked
    });
    console.log(this.state.checked);
  }

  render() {

    let msg = '';
    if (this.state.checked === false) {
      msg = 'I want to talk about financing';
    } else {
      msg = 'A licensed lender will call you soon';
    }

    return (
      <CheckBoxContainer>
        <Input
          type="checkbox"
          id="checkbox"
          onChange={e => {
            this.handleCheckboxChange(e);
          }}
        />
        <Label htmlfor="checkbox">{msg}</Label>
      </CheckBoxContainer>
    );
  }
}

export default CheckBox;