import React  from "react";
import styled from "styled-components";
import { HamburgerMenu } from "../hamburgerMenu/index";



const NavbarContainer = styled.div`
  width: auto;
  height: 71px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5em;
  background-color: #47388c;
`;
const Wrapper = styled.div`
width: 100vw;
height: 52px;
display: flex;
align-items:center;
justify-content: center;
`
const Left =styled.div`
flex: 1;
display: flex;
align-items: center;
`

const About = styled.div`
margin-top: 0px;
    padding-top: 0px;
    display: inline-block;
`
const Image = styled.img`
height: 45px;
width: 45px;
`
const Textone = styled.span`
font-size: 16px;
color: #FFFF;
margin: 4px 0px 0px;
width: 113px;
height: 20px;
margin-left: 10px;
font-weight: 500;
line-height: 20px;
`
const Texttwo = styled.span`
font-size: 16px;
color: #FFFF;
margin: 4px 0px 0px;
width: 113px;
height: 20px;
margin-left: 10px;
font-weight: 500;
line-height: 20px;

`
const Right = styled.div`
flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: "Roboto", "sans-serif" !important;
`
const Button = styled.div`
font-weight: 600;
font-size: 16px !important;
position: relative;
letter-spacing: 2px;
display: block;
padding: 0.8em;
transition: color 0.1s;
margin-right: 12px;
background-color: #FFFFFF ;
color: #8388b0;
border: none;
border-radius: 3px;
cursor: pointer;
@media (max-width: 768px) {
  display:none;
}
`

const Div = styled.ul`
height: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type:none;
`
const Main = styled.li`

`
const Navbar = (props) => {
  
  return (
    <NavbarContainer>
      <Wrapper>
        <Left>
          <Image src="http://nice1010.fun/images/heroic_logo.png"/>
        
        <About>
          <Textone>
            BS60503 (Demo)
          </Textone>
          <br/>
          <Texttwo>
          Coins:883.0
          </Texttwo>
        </About>
        </Left>

       <Right>
          <Div>
            <Main>
            <Button  to="/about">
                HOME
            </Button>  
              
            </Main>
            <Main>
              <Button  to="/about">SCHEDULE</Button>
            </Main>
            <Main>
              <Button  to="/service">LOGOUT</Button>
            </Main>
          </Div>
        </Right>
      </Wrapper>
      <HamburgerMenu />
    </NavbarContainer>
  );
}

export default Navbar;
