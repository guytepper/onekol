import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

function BalfurCheckIns({ checkIns }) {
  const [animations, setAnimations] = useState([]);
  const [animateDone, setAnimateDone] = useState(true);
  const slideDown = (index) => {
    animations[index] = 'slide-bottom';
    setTimeout(() => {
      animations[index] = ' ';
    }, 500);
  };

  useEffect(() => {
    setAnimateDone(false);
    if (checkIns[0] != undefined) {
      animations[0] = '';
      setAnimations(animations);
      setTimeout(() => {
        checkIns[0].display = '';
        animations[0] = 'slide-left-blue';
        setAnimations(animations);
      }, 100);
      setTimeout(() => {
        animations[0] = '';
      }, 600);

      checkIns.slice(1).forEach((checkIn, index) => slideDown(index + 1));
    }

    setTimeout(() => {
      setAnimations(animations);
      setAnimateDone(true);
    }, 500);
  }, [checkIns]);

  return (
    <CheckInsWrapper>
      <CheckInsList>
        {checkIns.map((checkIn, index) => (
          <CheckInEntry key={checkIn.createdAt} style={{ display: checkIn.display }} className={animations[index]}>
            <CheckInAvatar src={checkIn.profilePic} />
            <CheckInInfo>
              <CheckInName>{checkIn.firstName} עכשיו בבלפור</CheckInName>
              <CheckInComment>{checkIn.userMessage}</CheckInComment>
            </CheckInInfo>
          </CheckInEntry>
        ))}
      </CheckInsList>
    </CheckInsWrapper>
  );
}

export default BalfurCheckIns;

const CheckInsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 5px;
  overflow: hidden;
`;

const CheckInsList = styled.div`
  display: grid;
  grid-auto-rows: 60px;
  height: 500px;
`;

const CheckInEntry = styled.div`
  display: flex;
  max-width: 320px;
  align-items: center;
  margin: 0 12.5px;
`;

const CheckInAvatar = styled.img`
  width: 32.5px;
  height: 32.5px;
  margin-left: 10px;
  margin-bottom: 5px;
  flex-shrink: 0;
  border-radius: 50px;
  user-select: none;
`;

const CheckInInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckInName = styled.span`
  font-size: 15px;
`;

const CheckInComment = styled.span`
  font-size: 13px;
  color: #797676;
`;
