import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';
import React from 'react';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Marginer } from '../../components/marginer';
import { ReviewCard } from '../../components/ReviewCard/Index';
import { SectionTitles } from './../../components/SectionTitle/Index';

import 'pure-react-carousel/dist/react-carousel.es.css';

const ReviewContainer = styled(Element)`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;
`;

const StyledSlide = styled(Slide)`
.carousel__inner-slide {
  display: flex;
  justify-content: center;
}
`;

const StyleDotGroup = styled(DotGroup)`
  button {
    width: 10px;
    height: 10px;
    border:none;
    outline: none;
    border-radius: 50%;
    background-color: #e4e4e4;
    &:not(::last-of-type) {
      margin-right: 3px;
    }
  }
  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;


export function ReviewSection(props) {
  return (
    <ReviewContainer>
      <SectionTitles>What others are saying about us</SectionTitles>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={250}
        totalSlides={4}
        visibleSlides={2}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard />
          </StyledSlide>
        </Slider>
        <StyleDotGroup />
      </StyledCarouselProvider>
    </ReviewContainer>
  );
}
