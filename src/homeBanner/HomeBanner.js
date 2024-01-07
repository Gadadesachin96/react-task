import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  background: #f9f9f9 url(/assets/img/search-bg.png) no-repeat bottom center;
    /* min-height: 230px; */
    background-size: 100% auto;
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 140px 0 80px 0;
`;
const Wrapper = styled.div`
margin-top: -50px;
margin-bottom: 155px;
`

const Heading1 = styled.h1`
   font-size: 40px;
    font-weight: 700;
      margin: 0 0 10px;
    color:#272b41;
    `

const Heading2 = styled.h2`
color: lightgray;
`
const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background:#ffffff url(assets/img/location.png) no-repeat 10px center ;
text-align: center;
`;

const DoctorInput= styled.input`
 padding: 10px;
  margin: 5px;
  width: 20vw;
  border-radius: 5px;
  font-size: 16px;
  background:#ffffff url(assets/img/Search.png) no-repeat 10px center ;
text-align: center;
border: 1px solid #cccccc;
    padding-left: 35px;
    -webkit-box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075);
    -moz-box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.075);
`
const Button =styled.button`
width: 46px;
    -ms-flex: 0 0 46px;
    flex: 0 0 46px;
    height: 46px;
padding: 6px 12px;
color:#ffffff;
font-weight: 900;
background: #09E5AB;
border: none;
border-radius: 8px;

`

const HomeBanner = () => {
  return (
    <Container>
    <Wrapper>

      <Heading1>
        Search Doctor, Make an Appointment
      </Heading1>
      <Heading2>
        Discover the best doctors, clinic & hospital in the city nearest to you.
      </Heading2>
      <Input type="text" placeholder="Search location..." />
      {/* <span> Based on your Location</span> */}
      <DoctorInput type="text" placeholder="Search, Doctors, Clinics and Hospitals..." />
     {/* <span>Ex : Dental or Sugar Check up etc</span> */}
     <Button> <i class="fa fa-search" aria-hidden="true"></i>
</Button>
    </Wrapper>

    </Container>
  );
}

export default HomeBanner;
