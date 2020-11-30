import React from 'react';
import styled from 'styled-components';
import ChooseDateItem from './ChooseDateItem';

const InnerFormDiv = styled.div`
  transform: translateX(0%);
  transition: transform 0.7s ease-in-out;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-x: scroll;
  margin-left: -4px;
  margin-right: -4px;
  margin-top: -8px;
  scroll-behavior: smooth;
  position: relative;
  flex: 0 0 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RightArrowDiv = styled.div`
  position: absolute;
  left: 29%;
  top: 37%;
  visibility: ${props => props.left === true ? null : 'hidden'};
`;

const LeftArrowDiv = styled.div`
  position: absolute;
  z-index: 1;
  left: 0.8%;
  top: 37%;
  visibility: ${props => props.left === true ? 'hidden' : null};
`;

const Button = styled.button`
  transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2s ease 0s, background-color 0.2s ease 0s;
  border-radius: 24px;
  padding: 1px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border: 1px solid rgb(232, 233, 234);
  background-color: rgb(255, 255, 255);
  outline: none;
`;

const Position = styled.div`
  position: relative;
`;

const Padding = styled.div`
  padding-top: 5px;
  padding-right: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  margin: -4px;
`;

class ChooseDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: true,
      week: null,
      date: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.makeDaysOfWeek = this.makeDaysOfWeek.bind(this);
  }

  handleClick(e) {
    const arrow = e.target.id;
    if (arrow === 'leftArrow') {
      this.setState({ left: true });
    } else {
      this.setState({ left: false });
    }
  }

  handleDate(e) {
    this.setState({date: e.target.value});
  }

  makeDaysOfWeek() {
    let week = [];
    for (let i = 0; i < 7; i++) {
      let curr = new Date(); //'2021-01-02T00:00:00'
      let currTime = curr.getHours();
      let add;
      currTime > 19 ? add = 1 : add = 0;
      let firstDay = new Date(curr.setDate(curr.getDate() + i + add));
      week.push(firstDay.toDateString());
    }
    return week;
  }

  render() {
    const daysOfWeek = this.makeDaysOfWeek();
    return (
      <div>
        <Position>
          <Padding>
            <InnerFormDiv id="container" left={this.state.left}>
              {
                daysOfWeek.map((day, i) => {
                  return (
                    <ChooseDateItem
                      day={day}
                      key={day}
                      id={i}
                      onclick={this.handleDate}
                    />
                  );
                })
              }
            </InnerFormDiv>
          </Padding>
        </Position>
        <LeftArrowDiv left={this.state.left}>
          <Button
            id="leftArrow"
            type="button"
            onClick={(e) => {
              this.handleClick(e);
              document.getElementById('container').scrollLeft -= 300;
            }}
          >
            <i className="fas fa-angle-left" />
          </Button>
        </LeftArrowDiv>
        <RightArrowDiv left={this.state.left}>
          <Button
            id="rightArrow"
            type="button"
            onClick={(e) => {
              this.handleClick(e);
              document.getElementById('container').scrollLeft += 300;
            }}
          >
            <i className="fas fa-angle-right" />
          </Button>
        </RightArrowDiv>
      </div>
    );
  }
}

export default ChooseDate;
