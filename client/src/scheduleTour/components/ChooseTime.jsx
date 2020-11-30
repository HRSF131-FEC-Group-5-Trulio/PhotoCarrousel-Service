import React from 'react';
import styled from 'styled-components';
import ChooseTimeItem from './ChooseTimeItem';

const SelectDiv = styled.div`
  width: 100%;
  display: inline-block;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  font-weight: bold;
  border: 1px solid rgb(205, 209, 212);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  padding-top: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;

  &:focus, focus-within {
    border-color: rgb(0, 173, 187);
    box-shadow: rgb(0, 120, 130) 0px 0px 0px 2px;
  }
`;

const Padding = styled.div`
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
`;

const InnerSelectDiv = styled.div`
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  display: flex;

  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.1px;
`;

const Select = styled.select`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
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

const AlignDiv = styled.div`
  margin-left: 0px;
  flex: 1 1 0px;
  width: 100%;
  margin: 0px 8px;
`;

class ChooseTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    console.log(e.target.value);
    this.setState({time: e.target.value});
  }

  makeTimesOfDay() {
    let day = [];
    let add;

    const curr = new Date();
    let currHour = curr.getHours();

    if (currHour > 19 && currHour < 24) {
      add = 1;
      currHour = 6;
    } else if (currHour > 0 && currHour < 6) {
      add = 0;
      currHour = 6;
    } else {
      add = 0;
    }

    let firstDay = new Date(curr.setDate(curr.getDate() + add));

    const dateString = firstDay.toDateString();
    const date = new Date(dateString);

    let futureHour = currHour;

    let i = 0;
    while (futureHour < 19) {
      const futureDate = new Date(date.getTime() + ((currHour + 3) * 60 * 60000) + (30 * 60000) * i);

      var amPm = new Date(futureDate);
      var options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      var timeString = amPm.toLocaleString('en-US', options);
      day.push(timeString);
      futureHour = futureDate.getHours();
      i++;
    }
    return day;
  }

  render() {

    const timesOfDay = this.makeTimesOfDay();
    const initialTime = this.state.time;

    return (
      <Padding>
        <SelectDiv>
          <InnerSelectDiv>
            <AlignDiv>
              { initialTime === null ? 'Choose a time' : initialTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }
            </AlignDiv>
            <div>
              <i className="fas fa-angle-down"></i>
            </div>
            <Select onChange={e => this.handleSelect(e)}>
              {
                timesOfDay.map((time, i) => <ChooseTimeItem
                  key={i}
                  time={time}
                />)
              }
            </Select>
          </InnerSelectDiv>
        </SelectDiv>
      </Padding>
    );
  }
}

export default ChooseTime;

