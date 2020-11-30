import React from 'react';
import styled from 'styled-components';

const InnerFormDiv = styled.div`
  padding: 4px 0px;
  display: inline-flex;
  width: 100%;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
`;

const Button = styled.div`
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 16px;
  box-shadow: none;
  margin: 0px;
  flex: 1 1 auto;
`;

const LeftButton = styled(Button)`
 border-top-right-radius: 0px;
 border-bottom-right-radius: 0px;
 color: rgb(255, 255, 255);
 background-color: rgb(0, 120, 130);
 border-color: transparent;
 border-right: 0px;
`;

const RightButton = styled(Button)`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  color: rgb(59, 65, 68);
  background-color: rgb(255, 255, 255);
  border-color: rgb(205, 209, 212);
  border-left-color: transparent;
`;

const Label = styled.label`
  color: rgb(134, 144, 153);
`;

class TourType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <InnerFormDiv>
          <Label>
            Tour Type&nbsp;&nbsp;
            <i className="far fa-question-circle" />
          </Label>
        </InnerFormDiv>
        <InnerFormDiv>
          <LeftButton>In-Person</LeftButton>
          <RightButton>Video Chat</RightButton>
        </InnerFormDiv>
      </div>
    );
  }
}

export default TourType;
