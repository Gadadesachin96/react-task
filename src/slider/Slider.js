import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSpecialityItem = styled.div`
  text-align: center;
  
`;

const StyledSectionHeader = styled.div`
  text-align: center;
  margin-bottom: 20px; /* Adjust as needed */
`;

const StyledSubTitle = styled.p`
  margin-top: 10px; /* Adjust as needed */
`;


const StyledSpecialityImg = styled.div`
    height: 100px;
    border-radius: 100%;
    width: 100px;
    background: #ffffff;
    display: block;
    margin:  auto;
    position: relative;
    top:0;
    left: 0;

    -webkit-box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.1);
    box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.1);
  img {
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    margin: 0 auto;
    

  }
`;

  const sliderItems = [
    { id: 1, imgSrc: 'assets/img/specialities/specialities-01.png' },
    { id: 2, imgSrc: 'assets/img/specialities/specialities-02.png' },
    { id: 3, imgSrc: 'assets/img/specialities/specialities-03.png' },
    { id: 4, imgSrc: 'assets/img/specialities/specialities-04.png' },
    { id: 5, imgSrc: 'assets/img/specialities/specialities-05.png' },
  ];

const SpecialitiesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <section className="section section-specialities">
      <div className="container-fluid">
        <div className="section-header text-center aos" data-aos="fade-up">
        </div>
        <div className="row justify-content-center">
          <div className="col-md-9 aos" data-aos="fade-up">
            <Slider {...settings}>
              {sliderItems.map((item) => (
                <StyledSpecialityItem key={item.id}>
                  <StyledSpecialityImg>
                    <img src={item.imgSrc} className="img-fluid" alt={`Speciality ${item.id}`} />
                  </StyledSpecialityImg>
                  
                </StyledSpecialityItem>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesSlider;
