import React from 'react';
import styled from 'styled-components';

import BackgroundImg from '../../assets/pictures/company_team.jpg';
import { Button } from '../../components/Button/Index';
import { DownArrow } from '../../components/DownArrow/Index';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/Navbar/Index';
import { Logo } from './../../components/Logo/Logo';
import { Element, scroller } from 'react-scroll';

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: bold;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {

  const scrollToNextSection =() => {
    scroller.scrollTo('serviceSection', {smooth: true, duration: 1500});
  }
  return (
    <Element name='topSection'>
      <TopContainer>
        <BackgroundFilter>
          <Navbar />
          <Marginer direction="vertical" margin="8em" />
          <Logo />
          <Marginer direction="vertical" margin="3em" />
          <MotivationalText>Software Development</MotivationalText>
          <MotivationalText>From the best in the Industry</MotivationalText>
          <Marginer direction="vertical" margin="2em" />
          <Button>Start Your Project</Button>
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer>
        </BackgroundFilter>
      </TopContainer>
    </Element>
  );
}
