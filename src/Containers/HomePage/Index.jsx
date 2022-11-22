import React from 'react';
import styled from 'styled-components';
import { ServicesSection } from './ServicesSection';
import { TopSection } from './TopSection';
import { ReviewSection } from './ReviewSection';
import { MoreAboutSection } from './MoreAboutSection';
import { Marginer } from '../../components/marginer';
import { Footer } from './../../components/Footer/Index';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;


export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection />
      <ServicesSection />
     
      <MoreAboutSection />
      <Marginer direction="vertical" margin="9em" />
      <Footer /> 
    </PageContainer>
  );
}
