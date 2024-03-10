import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  position: relative;
  z-index: 1;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const ContactContent = styled.div`
  max-width: 1200px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContactH1 = styled.h1`
  color: white;
`

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minimax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
