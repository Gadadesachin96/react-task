import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Cards from '../cads/Cards';

const Container = styled.div`
  margin-top: 250px;
  display: flex;
  padding: 0 12px;
  background-color: #f8f9fa;
  padding: 80px 0;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 100%;
  width: 100%;
  max-width: 100%;
  margin-left: 15px;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  color: #272b41;
  height: 50px;
`;

const Heading2 = styled.h2`
  color: #757575;
  height: 40px;
  font-size: 16px;
  margin: 15px 0 10px 0;
`;

const Para1 = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  margin: 10;
  color: #6B7280;
  margin-top: 10px;
`;

const Para2 = styled.p`
  font-size: 16px;
  max-width: 100%;
  font-weight: 400;
  line-height: 26px;
  
  margin: 0;
  color: #6B7280;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #0de0fe;
  color: #ffffff;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  min-width: 150px;
  margin: 30px 0 0;
  padding: 15px 20px;
  text-align: center;
  border-radius: 4px;
  border: none;
`;

const CardWrapper = styled.div`
  flex: 4;
  margin: 20px;
  overflow: hidden;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SliderContent = styled(animated.div)`
  display: flex;
  transition: transform 0.5s;
`;

const SliderCard = styled.div`
  flex: 0 0 18rem;
  margin-right: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const NavigationButton = styled.button`
/* font-size: 0; */
    line-height: 0;
    display: block;
    width: 40px;
    height: 40px;
    background: #ffffff;
    cursor: pointer;
    border: none;
    outline: none;
    background: #ffffff;
    -webkit-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    transition: all 0.4s ease;
    position: absolute;
    top: 50%;
    padding: 0;
    transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -webkit-box-shadow: 1px 6px 14px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 1px 6px 14px rgba(0, 0, 0, 0.2);
    box-shadow: 1px 6px 14px rgba(0, 0, 0, 0.2);
    border-radius: 100%;
  &.active {
    background-color: #0DE0FE; 
  }
  &hover{
    background-color: #0de0fe;
    color: #ffffff;
    opacity: 1;
    outline: none;
    -webkit-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }
`;



const BookDoc = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = React.useRef(null);
  const [slideIndex, setSlideIndex] = React.useState(0);

  const { transform } = useSpring({
    transform: `translateX(-${slideIndex * (18 * 16 + 20)}px)`,
  });



  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 6 ? 0 : prevIndex + 1));
  };

const handlePrev = () => {
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 6 : prevIndex - 1));
  };
  const handleNext = () => {
    const maxSlides = cardsData.length; // Use the actual length of your data
    setSlideIndex((prev) => (prev === maxSlides - 4 ? 0 : Math.min(prev + 1, maxSlides - 4)));
  };

  const cardsData = [
    {
        id: 1,
      title: 'Ruby Perrin',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonLabel: 'Go Somewhere',
      imageSrc: 'assets/img/doctors/doctor-01.jpg',
    },
    {
        id: 2,
      title: 'Ruby Perrin',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonLabel: 'Go Somewhere',
      imageSrc: 'assets/img/doctors/doctor-02.jpg',
    },
    {
        id: 3,
      title: 'Ruby Perrin',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonLabel: 'Go Somewhere',
      imageSrc: 'assets/img/doctors/doctor-03.jpg',
    },
    {
        id: 4,
      title: 'Ruby Perrin',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonLabel: 'Go Somewhere',
      imageSrc: 'assets/img/doctors/doctor-04.jpg',
    },
    {
        id: 5,
      title: 'Ruby Perrin',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonLabel: 'Go Somewhere',
      imageSrc: 'assets/img/doctors/doctor-05.jpg',
    },
    {
        id: 6,
      title: 'Ruby Perrin',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonLabel: 'Go Somewhere',
      imageSrc: 'assets/img/doctors/doctor-06.jpg',
    },
    {
        id: 7,
      title: 'Ruby Perrin',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonLabel: 'Go Somewhere',
      imageSrc: 'assets/img/doctors/doctor-07.jpg',
    },
  ];
  




  return (
    <Container>
      <Wrapper>
        <Heading>Book Our Doctor</Heading>
        <Heading2>Lorem Ipsum is simply dummy text</Heading2>
        <Para1>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
        </Para1>
        <Para2>
          Web page editors now use Lorem Ipsum as their default model text, and a search for 'Lorem Ipsum' will uncover many web sites still in their infancy.
        </Para2>
        <Button>Read More...</Button>
      </Wrapper>
      <CardWrapper>
        <SliderWrapper>
          <SliderContent style={{ transform: `translateX(-${slideIndex * 18.5}rem)` }}>
            {cardsData.map((card) => (
              <SliderCard key={card.id}>
                <Cards imgSrc={card.imageSrc} title={card.title} text={card.text} />
              </SliderCard>
            ))}
          </SliderContent>

          {slideIndex > 0 && (
            <NavigationButton onClick={handlePrev} style={{ left: 0 }} className={slideIndex === 0 ? '' : 'active'}>
              <ArrowBackIosIcon />
            </NavigationButton>
          )}
          {slideIndex < 4 && (
            <NavigationButton onClick={handleNext} style={{ right: 0 }} className={slideIndex === 4 ? '' : 'active'}>
              <ArrowForwardIosIcon />
            </NavigationButton>
          )}
        </SliderWrapper>
      </CardWrapper>
    </Container>
  );
};

export default BookDoc;
