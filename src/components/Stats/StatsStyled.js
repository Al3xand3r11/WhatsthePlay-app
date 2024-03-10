import styled from "styled-components";

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 1100px;
  position: relative;
  flex-direction: column;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const StatsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 100px;
  padding: 0 100px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const StatsContent = styled.div`
  position: absolute;
`;

export const StatsH1 = styled.h1`
  color: white;
`
