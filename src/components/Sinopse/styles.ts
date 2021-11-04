import styled from "styled-components";

export const Container = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  z-index: +5;
`;

export const BannerInfor = styled.p`
  margin-top: 15px;
  color: #fff;
  font-weight: 400;
  line-height: 1.3em;
  width: 65vh;
  font-size: 1.4vw;
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
`;

export const ImageContent = styled.div`
  position: relative;
  width: 660px;
  height: 300px;
`;

export const ButtonContent = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
