import styled from "styled-components";

export const MainMovieContainer = styled.div`
  height: 100vh;
  background: linear-gradient(
    77deg,
    rgba(0, 0, 0, 0.6) 0,
    rgba(0, 0, 0, 0) 85%
  );

  .MuiContainer-maxWidthXl {
    height: 93vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;

    .MuiBox-root {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;

      font-weight: bold;
      font-size: 18px;

      .MuiTypography-root {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: #d7262d;
      }
      .MuiTypography-root {
        font-size: 18px;
      }
    }
  }

  .main-m-text {
    width: 50vw;
    border: 1px solid white;
  }
`;

export const BgWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;
