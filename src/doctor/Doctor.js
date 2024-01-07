import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  background-color: #f8f9fa;
    padding: 80px 0;
`;

const Heading = styled.h1`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #272b41;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px; 
`;

const DoctorImageContainer = styled.div`
  width: 300px; 
  margin: 10px 0; 
  position: relative; 
  overflow: hidden; 
`;

const DoctorImage = styled.img`
  width: 100%;
  transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.2); 
  }
`;

const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Button = styled.button`
  border: 2px solid #0de0fe;
  padding:  8px 16px;
  border-radius:8px;
  background-color: #0DE0FE;
  font-weight: 500;
  text-align: center;
  color:#ffffff;
  margin: 16px 0 16px;
  cursor: pointer;
  font-weight: 600;
`;

const doctorImg = [
  {
    id: 1,
    img: "assets/img/doctors/doctor-07.jpg",
    title: "Doctor1"
  },
  {
    id: 2,
    img: "assets/img/img-pharmacy1.jpg",
    title: "Doctor2"
  },
  {
    id: 3,
    img: "assets/img/lab-image.jpg",
    title: "Doctor3"
  },
];

const Doctor = () => {
  return (
    <Container>
      <Heading>What are you looking for?</Heading>
      <ImagesContainer>
        {doctorImg.map((item) => (
          <DoctorImageContainer key={item.id}>
            <DoctorImage src={item.img} alt={item.title} />
            <Info>
              <Button>BOOK NOW</Button>
            </Info>
          </DoctorImageContainer>
        ))}
      </ImagesContainer>
    </Container>
  );
}

export default Doctor;
