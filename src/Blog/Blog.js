import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f8f9fa;
  padding: 80px 0;
  margin-bottom: 160px;
`;

const Wrapper = styled.div`
  opacity: 1;
  transform: translateZ(0);
  max-width: 1200px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin: 0;
`;

const Heading2 = styled.h2`
  color: #757575;
  font-size: 16px;
  max-width: 600px;
  margin: 15px auto 0;
`;

const CardContainer = styled.div`
 display: flex;
  margin-top: 30px;
  margin-left: 10px;
 
`;

const Card = styled.div`
align-items: center;
  width: 18rem;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  &:hover {
    transform: scale(1.2); 
  }
`;

const CardBody = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
`;

const CardButton = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
`;

const Button1 = styled.button`
    margin-top: 20px 0 0;
    font-size: 16px;
    font-weight: 700;
    padding: 12px 30px;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font: 16px Popins,sans-serif;
    background-color: #09A5AB;
`

const Blog = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Card title 1',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonLabel: 'Go Somewhere 1',
      imageSrc: 'assets/img/blog/blog-01.jpg',
    },
    {
      id: 2,
      title: 'Card title 2',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonLabel: 'Go Somewhere 2',
      imageSrc: 'assets/img/blog/blog-02.jpg',
    },
    {
      id: 3,
      title: 'Card title 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonLabel: 'Go Somewhere 3',
      imageSrc: 'assets/img/blog/blog-03.jpg',
    },
    {
      id: 4,
      title: 'Card title 4',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      buttonLabel: 'Go Somewhere 4',
      imageSrc: 'assets/img/blog/blog-04.jpg',
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Heading>Blogs and News</Heading>
        <Heading2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Heading2>
        <CardContainer>
          {cardsData.map((card) => (
            <Card key={card.id}>
              <CardImage src={card.imageSrc} alt={card.title} className="card-img-top" />
              <CardBody>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
                
              </CardBody>
            </Card>
          ))}
        </CardContainer>
        <Button1> View All</Button1>
      </Wrapper>
    </Container>
  );
};

export default Blog;
