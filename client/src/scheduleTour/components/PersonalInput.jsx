import React from 'react';
import styled from 'styled-components';

const Partition = styled.div`
  display: inline-block;
  width: 50%;
  vertical-align: top;
  height: 36px;

  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.1px;

  padding-top: 4px;
  padding-right: 16px;
  padding-bottom: 4px;
  padding-left: 0px;

  margin-bottom: 8px;

  box-sizing: border-box;
`;

const Padding = styled.div`
  display: block;
  box-sizing: border-box;
`;

const InputDiv = styled.input`
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

const PartitionPhone = styled(Partition)`
  padding-left: 8px;
`;

const PartitionFull = styled(Partition)`
  width: 100%;
`;

class PersonalInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Partition>
          <Padding>
            <InputDiv type="text" placeholder="namsoo lee" />
          </Padding>
        </Partition>
        <PartitionPhone>
          <Padding>
            <InputDiv type="text" placeholder="(111) 222-333" />
          </Padding>
        </PartitionPhone>
        <PartitionFull>
          <Padding>
            <InputDiv type="text" placeholder="hrsf-fec@gmail.com" />
          </Padding>
        </PartitionFull>
      </div>
    );
  }
}

export default PersonalInput;
