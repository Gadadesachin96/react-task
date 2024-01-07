import React from 'react';
import styled from 'styled-components';
import SpecialitiesSlider from '../slider/Slider';

const Container = styled.div`
    padding: 0 20px;
    background-color: #ffffff;
    padding: 80px 0;

`

const Wrapper = styled.div`
display: flex;
margin-top:20px;
overflow-x: hidden;  
`
const Image = styled.img`
max-width: 100%;
height: auto;
flex: 1;
`

const Heading = styled.h1`
    font-size: 36px;
    font-weight: 500;
    margin: 0;
`
const Heading2 = styled.h4`
 color: #757575;
    font-size: 16px;
    margin: 15px 0 0 0;
    

`
const Info = styled.div`
    margin-bottom: 60px;
flex: 2;
`



const Features = () => {
  return (
    <Container>
      <Wrapper>
        <Image src='assets/img/features/feature.png' alt='feature-img'/>
        <Info>
            
        <Heading>Availabe Features in Our Clinic</Heading>
        <Heading2>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Heading2>
        </Info>

      </Wrapper>
    </Container>
  );
}

export default Features;
