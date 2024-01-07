import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { Link, BrowserRouter as Router } from 'react-router-dom';

const Container = styled.div`
  height: 20px;
  margin-top: 30px;
  @media (max-width: 968px){
    display: block;
  }
  
`;

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 1366px) {
   display: block;
   
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  @media (max-width: 1366px){
    display: block;
  }
`;

const Right = styled.div`
  flex: 1;
  @media (max-width: 1366px){
    display: block;
  }
`;

const Button = styled.button`
  text-align: center;
  font-size: 13px;
  color: #ffffff;
  text-transform: uppercase;
  padding: 10px;
  background: #1c5b91;
  box-shadow: 0px 4px 4px rgba(189, 189, 189, 0.25);
  border-radius: 47px;
  border: 0;
  cursor: pointer;
 
`;

const Image = styled.img`
  width: 40%;
  margin-left: -8.9rem;
  @media (max-width: 1366px){
    height: auto;
    max-width: 100%;

margin-left: 50px;

  }
`;

const ListItemWithDoctorsDropdown = styled.li`
  position: relative;
  padding-right: 34px;

  &:hover {
    color: #91efa5;
    font-weight: bold;
  }
`;

const ArrowIcon = styled(KeyboardArrowDownIcon)`
  position: absolute;
  right: 1;
`;

const GridContainer = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: 150px 150px 150px 150px 150px 150px;
  grid-template-rows: 150px 150px;
  gap: 20px;
  background-color: #fff;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: none;
  padding: 50px;
  margin-top: 50px;
  overflow: hidden;
  left: 0;
  margin-left: -300px;
  @media (max-width: 1366px){
    display: block;
  }

`;

const GridItem = styled.img`
  width: 100%;
  margin-top: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  -webkit-transition: ease all 0.5s;
  -ms-transition: ease all 0.5s;
  transition: transform 0.5s ease;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
  }
`;

const ListItemWithDoctorsDropdownWithDropdown = styled(ListItemWithDoctorsDropdown)`

  &:hover ${GridContainer} {
    display: grid;
    z-index:111;
  }
`
// doctor
const DoctorsDropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 10px;
  display: none;
  box-shadow: 0px 14px 14px rgba(0, 0, 0, 0.1);
  
  transition: transform 0.5s ease;
  object-fit: cover;

  background-color: #fff;
  
  
`;

const DoctorsDropdownItem = styled.div`
  padding: 5px;
  
  &:hover {
    background-color: #f2f2f2;
    cursor: pointer;

    z-index: 1111111;
  }
`;

const ListItemWithDoctorsDropdownWithDoctorsDropdown = styled(ListItemWithDoctorsDropdown)`
  position: relative;
  cursor: pointer;

  &:hover {
    z-index: 2;
  }

  &:hover ${DoctorsDropdownContainer} {
    display: block;
    color: #1E0D0D;
    white-space: nowrap;
    z-index: 1;

  }
`;




const SubDoctorsDropdownContainer = styled(DoctorsDropdownContainer)`
  left: 100%;
  top: 0;
  
`;
const SubDoctorsDropdownItem = styled(DoctorsDropdownItem)`
  /* Add styles for submenu items if needed */
`;

const SubDoctorsDropdownWrapper = styled.div`
    position: relative;

`

const ListItemWithDoctorsDropdownWithSubDoctorsDropdown = styled(ListItemWithDoctorsDropdown)`
  white-space: nowrap;

  &:hover ${SubDoctorsDropdownContainer} {
    display: block;
  }
`;
const HomeImages = () => (
  <GridContainer>
    <GridItem to="/" src="assets/img/home-01.jpg" alt="home-01" />
    <GridItem to="/" src="assets/img/home-02.jpg" alt="home-02" />
    <GridItem to="/" src="assets/img/home-03.jpg" alt="home-03" />
    <GridItem to="/" src="assets/img/home-04.jpg" alt="home-04" />
    <GridItem to="/" src="assets/img/home-05.jpg" alt="home-05" />
    <GridItem to="/" src="assets/img/home-06.jpg" alt="home-06" />
    <GridItem to="/" src="assets/img/home-07.jpg" alt="home-07" />
    <GridItem to="/" src="assets/img/home-08.jpg" alt="home-08" />
    <GridItem to="/" src="assets/img/home-09.jpg" alt="home-09" />
    <GridItem to="/" src="assets/img/home-10.jpg" alt="home-10" />
    <GridItem to="/" src="assets/img/home-11.jpg" alt="home-11" />
  </GridContainer>
);

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDoctorsDropdownVisible, setIsDoctorsDropdownVisible] = useState(false);
  const [isBlogSubmenuVisible, setIsBlogSubmenuVisible] = useState(false);
  const blogRef = useRef(null);


  const handleImageClick = (path) => {
    console.log(`Clicked on image. Navigating to: ${path}`);
  };

  const handleDoctorClick = (path) => {
    console.log(`Clicked on Doctor dropdown. Navigating to: ${path}`);
  };

  const handleBlogItemClick = (path) => {
    setIsBlogSubmenuVisible(!isBlogSubmenuVisible);
    console.log(`Clicked on Blog. Navigating to: ${path}`);
  };

  const handleBlogSubmenuClick = (path) => {
    console.log(`Clicked on Blog submenu. Navigating to: ${path}`);
  };




  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src="assets/img/logo.png" alt="" />
        </Left>
        <Center>
          <ListItemWithDoctorsDropdownWithDropdown
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            Home <ArrowIcon />
            {isDropdownVisible && <HomeImages />}
          </ListItemWithDoctorsDropdownWithDropdown>



          <ListItemWithDoctorsDropdownWithDoctorsDropdown
            onMouseEnter={() => setIsDoctorsDropdownVisible(true)}
            onMouseLeave={() => setIsDoctorsDropdownVisible(false)}
          >
            Doctors <ArrowIcon />
            <DoctorsDropdownContainer
              onMouseEnter={() => setIsDoctorsDropdownVisible(true)}
              onMouseLeave={() => setIsDoctorsDropdownVisible(false)}
            >
              <DoctorsDropdownItem>Doctor Dashboard</DoctorsDropdownItem>
              <DoctorsDropdownItem>Appointments</DoctorsDropdownItem>
              <DoctorsDropdownItem>Schedule Timing</DoctorsDropdownItem>
              <DoctorsDropdownItem>Patients List</DoctorsDropdownItem>
              <DoctorsDropdownItem>Patients Profile</DoctorsDropdownItem>
              <DoctorsDropdownItem>Chat</DoctorsDropdownItem>
              <DoctorsDropdownItem>Invoices</DoctorsDropdownItem>
              <DoctorsDropdownItem>Profile Settings</DoctorsDropdownItem>
              <DoctorsDropdownItem>Reviews</DoctorsDropdownItem>
              <DoctorsDropdownItem>Doctor Register</DoctorsDropdownItem>

              <ListItemWithDoctorsDropdown
                onClick={() => handleBlogItemClick("/blog")}
              >
                Blog
              </ListItemWithDoctorsDropdown>
              {isBlogSubmenuVisible && (
                <SubDoctorsDropdownContainer>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/blog")}>
                    Blog
                  </DoctorsDropdownItem>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/blog-view")}>
                    Blog View
                  </DoctorsDropdownItem>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/add-blog")}>
                    Add Blog
                  </DoctorsDropdownItem>
                </SubDoctorsDropdownContainer>
              )}

            </DoctorsDropdownContainer>
          </ListItemWithDoctorsDropdownWithDoctorsDropdown>



          <ListItemWithDoctorsDropdownWithDoctorsDropdown
            onMouseEnter={() => setIsDoctorsDropdownVisible(true)}
            onMouseLeave={() => setIsDoctorsDropdownVisible(false)}
          >
            Patients <ArrowIcon />
            <DoctorsDropdownContainer
              onMouseEnter={() => setIsDoctorsDropdownVisible(true)}
              onMouseLeave={() => setIsDoctorsDropdownVisible(false)}
            >
              <DoctorsDropdownItem>Doctor Dashboard</DoctorsDropdownItem>
              <DoctorsDropdownItem>Appointments</DoctorsDropdownItem>
              <DoctorsDropdownItem>Schedule Timing</DoctorsDropdownItem>
              <DoctorsDropdownItem>Patients List</DoctorsDropdownItem>
              <DoctorsDropdownItem>Patients Profile</DoctorsDropdownItem>
              <DoctorsDropdownItem>Chat</DoctorsDropdownItem>
              <DoctorsDropdownItem>Invoices</DoctorsDropdownItem>
              <DoctorsDropdownItem>Profile Settings</DoctorsDropdownItem>
              <DoctorsDropdownItem>Reviews</DoctorsDropdownItem>
              <DoctorsDropdownItem>Doctor Register</DoctorsDropdownItem>

              <ListItemWithDoctorsDropdown
                onClick={() => handleBlogItemClick("/blog")}
              >
                Blog
              </ListItemWithDoctorsDropdown>
              {isBlogSubmenuVisible && (
                <SubDoctorsDropdownContainer>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/blog")}>
                    Blog
                  </DoctorsDropdownItem>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/blog-view")}>
                    Blog View
                  </DoctorsDropdownItem>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/add-blog")}>
                    Add Blog
                  </DoctorsDropdownItem>
                </SubDoctorsDropdownContainer>
              )}

            </DoctorsDropdownContainer>
          </ListItemWithDoctorsDropdownWithDoctorsDropdown>

          <ListItemWithDoctorsDropdownWithDoctorsDropdown
            onMouseEnter={() => setIsDoctorsDropdownVisible(true)}
            onMouseLeave={() => setIsDoctorsDropdownVisible(false)}
          >
            Pages <ArrowIcon />
            <DoctorsDropdownContainer
              onMouseEnter={() => setIsDoctorsDropdownVisible(true)}
              onMouseLeave={() => setIsDoctorsDropdownVisible(false)}
            >
              <DoctorsDropdownItem>Doctor Dashboard</DoctorsDropdownItem>
              <DoctorsDropdownItem>Appointments</DoctorsDropdownItem>
              <DoctorsDropdownItem>Schedule Timing</DoctorsDropdownItem>
              <DoctorsDropdownItem>Patients List</DoctorsDropdownItem>
              <DoctorsDropdownItem>Patients Profile</DoctorsDropdownItem>
              <DoctorsDropdownItem>Chat</DoctorsDropdownItem>
              <DoctorsDropdownItem>Invoices</DoctorsDropdownItem>
              <DoctorsDropdownItem>Profile Settings</DoctorsDropdownItem>
              <DoctorsDropdownItem>Reviews</DoctorsDropdownItem>
              <DoctorsDropdownItem>Doctor Register</DoctorsDropdownItem>

              <ListItemWithDoctorsDropdown
                onClick={() => handleBlogItemClick("/blog")}
              >
                Blog
              </ListItemWithDoctorsDropdown>
              {isBlogSubmenuVisible && (
                <SubDoctorsDropdownContainer>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/blog")}>
                    Blog
                  </DoctorsDropdownItem>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/blog-view")}>
                    Blog View
                  </DoctorsDropdownItem>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/add-blog")}>
                    Add Blog
                  </DoctorsDropdownItem>
                </SubDoctorsDropdownContainer>
              )}

            </DoctorsDropdownContainer>
          </ListItemWithDoctorsDropdownWithDoctorsDropdown>

          <ListItemWithDoctorsDropdownWithDoctorsDropdown
            onMouseEnter={() => setIsDoctorsDropdownVisible(true)}
            onMouseLeave={() => setIsDoctorsDropdownVisible(false)}
          >
            Blog <ArrowIcon />
            <DoctorsDropdownContainer
              onMouseEnter={() => setIsDoctorsDropdownVisible(true)}
              onMouseLeave={() => setIsDoctorsDropdownVisible(false)}
            >
              <DoctorsDropdownItem>Doctor Dashboard</DoctorsDropdownItem>
              <DoctorsDropdownItem>Appointments</DoctorsDropdownItem>
              <DoctorsDropdownItem>Schedule Timing</DoctorsDropdownItem>
              <DoctorsDropdownItem>Patients List</DoctorsDropdownItem>
              <DoctorsDropdownItem>Patients Profile</DoctorsDropdownItem>
              <DoctorsDropdownItem>Chat</DoctorsDropdownItem>
              <DoctorsDropdownItem>Invoices</DoctorsDropdownItem>
              <DoctorsDropdownItem>Profile Settings</DoctorsDropdownItem>
              <DoctorsDropdownItem>Reviews</DoctorsDropdownItem>
              <DoctorsDropdownItem>Doctor Register</DoctorsDropdownItem>

              <ListItemWithDoctorsDropdown
                onClick={() => handleBlogItemClick("/blog")}
              >
                Blog
              </ListItemWithDoctorsDropdown>
              {isBlogSubmenuVisible && (
                <SubDoctorsDropdownContainer>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/blog")}>
                    Blog
                  </DoctorsDropdownItem>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/blog-view")}>
                    Blog View
                  </DoctorsDropdownItem>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/add-blog")}>
                    Add Blog
                  </DoctorsDropdownItem>
                </SubDoctorsDropdownContainer>
              )}

            </DoctorsDropdownContainer>
          </ListItemWithDoctorsDropdownWithDoctorsDropdown>

          <ListItemWithDoctorsDropdownWithDoctorsDropdown
            onMouseEnter={() => setIsDoctorsDropdownVisible(true)}
            onMouseLeave={() => setIsDoctorsDropdownVisible(false)}
          >
            Admin <ArrowIcon />
            <DoctorsDropdownContainer
              onMouseEnter={() => setIsDoctorsDropdownVisible(true)}
              onMouseLeave={() => setIsDoctorsDropdownVisible(false)}
            >
              <DoctorsDropdownItem>Doctor Dashboard</DoctorsDropdownItem>
              <DoctorsDropdownItem>Appointments</DoctorsDropdownItem>
              <DoctorsDropdownItem>Schedule Timing</DoctorsDropdownItem>
              <DoctorsDropdownItem>Patients List</DoctorsDropdownItem>
              <DoctorsDropdownItem>Patients Profile</DoctorsDropdownItem>
              <DoctorsDropdownItem>Chat</DoctorsDropdownItem>
              <DoctorsDropdownItem>Invoices</DoctorsDropdownItem>
              <DoctorsDropdownItem>Profile Settings</DoctorsDropdownItem>
              <DoctorsDropdownItem>Reviews</DoctorsDropdownItem>
              <DoctorsDropdownItem>Doctor Register</DoctorsDropdownItem>

              <ListItemWithDoctorsDropdown
                onClick={() => handleBlogItemClick("/blog")}
              >
                Blog
              </ListItemWithDoctorsDropdown>
              {isBlogSubmenuVisible && (
                <SubDoctorsDropdownContainer>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/blog")}>
                    Blog
                  </DoctorsDropdownItem>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/blog-view")}>
                    Blog View
                  </DoctorsDropdownItem>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/add-blog")}>
                    Add Blog
                  </DoctorsDropdownItem>
                </SubDoctorsDropdownContainer>
              )}

            </DoctorsDropdownContainer>
          </ListItemWithDoctorsDropdownWithDoctorsDropdown>

          <ListItemWithDoctorsDropdownWithDoctorsDropdown
            onMouseEnter={() => setIsDoctorsDropdownVisible(true)}
            onMouseLeave={() => setIsDoctorsDropdownVisible(false)}
          >
            Pharmacy <ArrowIcon />
            <DoctorsDropdownContainer
              onMouseEnter={() => setIsDoctorsDropdownVisible(true)}
              onMouseLeave={() => setIsDoctorsDropdownVisible(false)}
            >
              <DoctorsDropdownItem>Doctor Dashboard</DoctorsDropdownItem>
              <DoctorsDropdownItem>Appointments</DoctorsDropdownItem>
              <DoctorsDropdownItem>Schedule Timing</DoctorsDropdownItem>
              <DoctorsDropdownItem>Patients List</DoctorsDropdownItem>
              <DoctorsDropdownItem>Patients Profile</DoctorsDropdownItem>
              <DoctorsDropdownItem>Chat</DoctorsDropdownItem>
              <DoctorsDropdownItem>Invoices</DoctorsDropdownItem>
              <DoctorsDropdownItem>Profile Settings</DoctorsDropdownItem>
              <DoctorsDropdownItem>Reviews</DoctorsDropdownItem>
              <DoctorsDropdownItem>Doctor Register</DoctorsDropdownItem>

              <ListItemWithDoctorsDropdown
                onClick={() => handleBlogItemClick("/blog")}
              >
                Blog
              </ListItemWithDoctorsDropdown>
              {isBlogSubmenuVisible && (
                <SubDoctorsDropdownContainer>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/blog")}>
                    Blog
                  </DoctorsDropdownItem>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/blog-view")}>
                    Blog View
                  </DoctorsDropdownItem>
                  <DoctorsDropdownItem onClick={() => handleBlogSubmenuClick("/add-blog")}>
                    Add Blog
                  </DoctorsDropdownItem>
                </SubDoctorsDropdownContainer>
              )}

            </DoctorsDropdownContainer>
          </ListItemWithDoctorsDropdownWithDoctorsDropdown>      
            </Center>
        <Right>
          <Button>login/signup</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
