import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default styled(Button)`
  && {
    display: flex;
    align-items: center;
    padding: 10px 36px;

    svg {
      margin-right: 10px;
      font-size: 18px;
    }

    color: white;
    background: rgba(109, 109, 110, 0.7);
    border: 1px solid transparent;

    :hover {
      border: 1px solid black;
      background: rgba(109, 109, 110, 0.3);
    }
  }
`;
