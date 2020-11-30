import React from 'react';
import styled from 'styled-components';
import PersonalInput from './PersonalInput';

const Partition = styled.div`
  display: inline-block;
  width: 100%;
  vertical-align: top;

  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.1px;

  padding-top: 4px;
  padding-right: 16px;
  padding-bottom: 4px;
  padding-left: 0px;

  margin-bottom: 0px;

  box-sizing: border-box;
`;

const Padding = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
`;

const TextArea = styled.textarea`
  height: 78px;
  width: 100%;
  line-height: 1.5;
  resize: none;
  outline: none;

  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  font: 400 13.3333px Arial;

  transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;

  text-align: start;
  appearance: textarea;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  -webkit-rtl-ordering: logical;
  flex-direction: column;

  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;

  border-radius: 8px;
  border: 1px solid rgb(205, 209, 212);
  padding: 8px;
  font-size: 16px;
  width: 100%;
  display: inline-block;
  outline: none;
  transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;

  &:focus {
    border-color: rgb(0, 173, 187);
    box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px;
  }
`;

const RequestInput = () => (
  <div>
    <PersonalInput />
    <Partition>
      <Padding>
        <TextArea placeholder="I am interested in 5350 Sobrante Ave, El Sobrante, CA 94803" />
      </Padding>
    </Partition>
  </div>
);

export default RequestInput;
