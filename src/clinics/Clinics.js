import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin-top: 30px;
  background-color: #f8f9fa;
    padding: 80px 0;
  

`
        
const Wrapper = styled.div`
`

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #272b41;
`;
const Heading2 = styled.div`

`
const Clinics = () => {
  return (
    <Container>
      <Wrapper>
 <Heading>Clinic and Specialities
</Heading>
 <Heading2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Heading2>
      </Wrapper>
    </Container>
  );
}

export default Clinics;
