import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { theme } from './../../Theme';

const ArrowContainer = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: rgba(113, 113, 113, 0.43);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 200ms ease-in-out;

  &:hover {
    border: 2px solid ${theme.primary};
  }
`;

const ArrowIcon = styled.div`
  margin-top: 3px;
  color: #fff;
  font-size: 26px;
`;

export function DownArrow(props) {
  return (
    <ArrowContainer>
      <ArrowIcon>
        <FontAwesomeIcon icon={faAngleDown} />
      </ArrowIcon>
    </ArrowContainer>
  );
}
