import styled from "styled-components";
import ContactBackground from '../../images/ContactBackground.webp';

export const ContactContainer = styled.div`
background-image: url(${ContactBackground});
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;
