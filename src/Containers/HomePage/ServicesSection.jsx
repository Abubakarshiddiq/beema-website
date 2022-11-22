import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Marginer } from '../../components/marginer';
import { OurService } from '../../components/OurService/Index';
import { SectionTitles } from '../../components/SectionTitle/Index';

import Services1Img from '../../assets/illustrations/web_development_.png';
import Services2Img from '../../assets/illustrations/mobile_phone.png';
import Services3Img from '../../assets/illustrations/bug_fixed.png';


const ServiceContainer = styled(Element)`
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
`;

export function ServicesSection(props) {
  return (
    <ServiceContainer name="serviceSection">
      <SectionTitles>Best Quality Software</SectionTitles>
      <Marginer direction="vertical" margin="3em" />
      <OurService
        title="Fully Integrated Services"
        description="We Build and Deliver fully integrated webapps with customized control panel that fit your company needs "
        imgUrl={Services1Img}
      />

      <OurService
        title="Fully Integrated Services"
        description="We Build and Deliver fully integrated webapps with customized control panel that fit your company needs "
        imgUrl={Services2Img}
        isReversed
      />

      <OurService
        title="Fully Integrated Services"
        description="We Build and Deliver fully integrated webapps with customized control panel that fit your company needs "
        imgUrl={Services3Img}
      />
    </ServiceContainer>
  );
}
