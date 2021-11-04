import styled from "styled-components";

export const ButtonWhiteContent = styled.button`
  width: 185px;
  height: 60px;
  border-style: none;
  border-radius: 5px;

  font-weight: bold;
  font-size: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30;
  margin-right: 15px;

  svg {
    font-size: 48px;
  }

  :hover {
    cursor: pointer;
    background: #c9c6c3;
  }
`;

export const ButtonDarkContent = styled.button`
  width: 286px;
  height: 58px;
  border-radius: 5px;
  border-style: none;

  background: rgba(109, 109, 110, 0.7);
  color: white;

  font-weight: bold;
  font-size: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 30;
  margin-right: 15px;

  svg {
    font-size: 36px;
    color: white;
    margin-right: 10px;
  }

  :hover {
    cursor: pointer;
    background: rgba(109, 109, 110, 0.5);
  }
`;

/* @font-face {
  font-family: 'Netflix Sans';
  font-weight: 100;
  font-display: optional;
  src: url("https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff2) format('woff2'),url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff) format('woff')")
} */
