import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default styled(Button)`
  && {
    display: flex;
    align-items: center;
    padding: 10px 26px;
    margin-right: 20px;

    svg {
      margin-right: 10px;
      font-size: 18px;
    }

    :hover {
      background-color: rgba(255, 255, 255, 0.7);
    }
  }
`;
