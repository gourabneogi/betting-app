import { motion } from "framer-motion";
import React, {useState} from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { NavMenu } from "./navMenu";


const HamburgerMenuContainer = styled.div`
display:none;
@media (max-width: 768px) {
  display: flex;
}

`;

const MenuContainer = styled(motion.div)`
min-width: 105%;
width: 100%;
max-width: 44%;
height: 100%;
box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
z-index: 90;
position: fixed;
top: 0;
right: 0;
transform: translateX(4em);
user-select: none;
padding: 1em 2.5em;
background-color: #47388c;



@media (max-width: 768px) {
  
}
`;

const TopContainer = styled.div`
display: flex;
  width: 100%;
  `;
  
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  `;
  
  const menuVariants = {
    open: {
      transform: "translateX(3%)",
    },
    closed: {
      transform: "translateX(103%)",
    },
  };

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

const commonVariants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.01,
    },
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

const commonTransition = { type: "spring", duration: 0.05 };

export function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);
  const [reverseColor, setReversecolor] = useState("#000");
  
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
    
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
    
      <MenuContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <TopContainer>
         
        </TopContainer>
        <ContentContainer>
          <NavMenu isOpen={isOpen} />
        </ContentContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  );
}
