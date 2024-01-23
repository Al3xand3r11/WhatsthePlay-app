import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1100px;

`;

export const SideWrapper = styled.div`
  align-items: center;
  grid-area: sidebar;
  position: absolute;

`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`


export const SideImage = styled.img`
height: 100px;
width: 100px;
`
export const HeroContent = styled.div`
  max-width: 2200px;
  position: absolute;
  display: grid;
  align-items: center;
  grid-template-rows: 0.2fr 0.5fr 0.5fr 0.5fr;
  grid-template-areas: 
  "sidebar main main main"
  "sidebar main main main"
  "sidebar main main main"
  "sidebar main main main";
`;

export const HeroMain = styled.div`
  grid-area: main;
  padding: 25rem;

`

export const HeroH1 = styled.h1`
  color: white;
  font-size: 100px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroColor = styled.span`
color: #119af5;
display: inline;
`
export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;