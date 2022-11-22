import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { SectionTitles } from './../../components/SectionTitle/Index';
import AboutimgUrl from '../../assets/illustrations/rocket_launch_.png';

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 900px;
`;

const AboutText = styled.p`
  font-size: 24px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 600px;
  height: 500px;
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
      <SectionTitles>More About Beema</SectionTitles>
      <AboutContainer>
        <AboutText>
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's {<br />} {<br />} standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it
          {<br />} {<br />}
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting.
        </AboutText>
        <AboutImg src={AboutimgUrl} />
      </AboutContainer>
    </MoreAboutContainer>
  );
}
