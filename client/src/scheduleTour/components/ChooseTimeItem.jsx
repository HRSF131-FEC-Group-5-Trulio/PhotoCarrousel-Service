import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  appearance: none;
  font-size: 16px;
  line-height: 1.5;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  align-items: center;
  white-space: pre;
  -webkit-rtl-ordering: logical;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  margin: 0em;
  font: 400 13.3333px Arial;
  border-radius: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;

  $:not(:-internal-list-box) {
    overflow: visible !important;
  }
`;

const Option = styled.option`
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0px 2px 1px;
`;


const ChooseTimeItem = (props) => (
  <Option value={props.time}>{props.time}</Option>
  // <Option value={props.time}>{props.time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</Option>
);

export default ChooseTimeItem;