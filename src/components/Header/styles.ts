import styled from "styled-components";

export const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 70px;

  padding-left: 40px;
  padding-right: 40px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  /* background: #141414; */
  background: -webkit-linear-gradient(
    to bottom,
    RGBA(20, 20, 20, 0.85),
    transparent
  );
  background: linear-gradient(to bottom, RGBA(20, 20, 20, 0.85), transparent);

  svg {
    width: 90px;
    margin-right: 20px;
  }
`;

export const SecondaryNavigation = styled.div`
  width: 15vw;
  height: auto;
  z-index: +1;

  display: flex;
  align-items: center;

  a {
    margin-left: 5px;
    padding: 5px;
    display: block;
    font-size: 14px;
    color: #fff;

    :hover {
      cursor: pointer;
      color: #bfc1c1;
    }
  }

  svg {
    margin-left: 5px;
    padding: 5;
    font-size: 18px;
    display: block;
    color: #fff;

    :hover {
      cursor: pointer;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  z-index: +1;

  a {
    margin-left: 15px;
    padding: 5px;
    display: block;
    font-size: 14px;
    color: #fff;

    :hover {
      cursor: pointer;
      color: #bfc1c1;
    }
  }
`;

export const MainContent = styled.div`
  margin-top: 95px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;

  position: absolute;
  background: RGBA(20, 20, 20, 0.05);
  background: linear-gradient(to top, RGBA(20, 20, 20, 0.45), transparent);

  width: 100%;
  height: 100%;
`;
