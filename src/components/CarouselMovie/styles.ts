import styled from "styled-components";

export const CarouselContent = styled.div`
  position: absolute;
  margin-top: -20vh;

  width: 100%;

  .MuiTypography-root {
    margin-left: 4%;
  }
  .MuiTypography-h2 {
    line-height: 1.25vw;
    font-size: 1.4vw;
    color: #e5e5e5;
    font-weight: 700;
  }

  .rec.rec-arrow {
    background-color: rgba(109, 109, 110, 0.1);
    height: 90%;
    border-radius: 0;
  }
  .rec.rec-arrow:hover {
    background-color: rgba(109, 109, 110, 0.2);
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  }
  .rec-dot {
    position: absolute;
    background: none;
    box-shadow: none;
  }
`;

export const CarouselItemContent = styled.div`
  margin-bottom: 5vh;
`

export const ItemMovie = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  margin: 15px;
  font-size: 4em;

  :hover {
    transition: transform 300ms ease;
    transform: scale(1.3);
  }
`;
