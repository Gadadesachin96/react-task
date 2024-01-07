
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RoomIcon from '@mui/icons-material/Room';
import styled from "styled-components";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Container = styled.div`
  display: flex;
  padding: 42px 0;
  background: #1663a6;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #ffffff;
`;

const Image = styled.img`
  width: 40%;
font-family: "Poppins", sans-serif;
    font-size: 0.9375rem;
    color: #6B7280;
    line-height: 1.5;

  /* margin-left: -8.9rem; */
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: all 0.5s ease;
  cursor:pointer;
  &:hover {
      /* background-color: #e9f5f5; */
      transform: scale(1.2);
    }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  color: #ffffff;

`;

const Title = styled.h3`
  margin-bottom: 30px;
  margin-left: -250px;
  /* color: #ffffff; */
    font-size: 20px;
    font-weight: 700;
    /* margin: 0 0 30px; */
    text-transform: capitalize;

`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  /* display: flex; */
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  color: #ffffff;


`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;

  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
      <Image src="assets/img/logo.png" alt="" />
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        
        </SocialContainer>
      </Left>
      <Center>
        <Title>For Patients</Title>
        <List>
          <ListItem>Search for Doctors</ListItem>
          <ListItem>Login</ListItem>
          <ListItem>Register</ListItem>
          <ListItem>Booking</ListItem>
          <ListItem>Patient Dashboard</ListItem>
        
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <RoomIcon style={{marginRight:"10px"}}/>  556 Beech Street, San Francisco,
California, CA 94108
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{marginRight:"10px"}}/> 1 315 369 5943
        </ContactItem>
        <ContactItem>
          <MailOutlineOutlinedIcon style={{marginRight:"10px"}} /> [email protected]
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
      
    </Container>
    
  );
};

export default Footer;