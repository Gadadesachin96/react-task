import React from 'react';
import styled from 'styled-components';

const CardImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 8px;
  order-radius: 4px;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -webkit-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
    -ms-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
    transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
    width: 100%;
  &:hover {
    transform: scale(1.2); 
  }
`;

const SliderCard = styled.div`
`
const CardBody = styled.div`

`

const CardTitle = styled.div`
`
const CardText = styled.div`
`

const CardButton =styled.button`
`

const Cards = ({ imgSrc, title, text }) => {
  return (
    <SliderCard>
      <CardImage src={imgSrc} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <CardButton href="#" className="btn btn-primary">
          Go somewhere
        </CardButton>
      </CardBody>
    </SliderCard>
  );
};

export default Cards;
