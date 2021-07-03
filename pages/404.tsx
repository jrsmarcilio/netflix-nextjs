import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 20%;

  svg {
    width: 500px;
  }
  @media(max-width: 450px) {
    margin-top: 20%;

    svg {
      width: 200px;
    }
  }

`;

const ErrorMessage = styled.div`
 display: flex;
 flex-direction: column;
 width: 40%;

 @media(max-width: 450px) {
   margin-top: 20px;
    width: 80%;
    font-size: 10px;
  }
`;

const ErrorCode = styled.div`
  width: 20vw;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;

  position: absolute;
  bottom: 0;

  border: 5px solid ${props => props.theme.colors.primary};


 @media(max-width: 450px) {
    width: 50%;
    height: 40px;

    font-size: 10px;
  }
`;

import NetflixLogo from '../assets/Netflix.svg'

const Custom404 = () => {
  return (
    <Container>
      <NetflixLogo />
      <ErrorMessage>
        <h1>Oops, Página não encontrada...</h1>

        <h3>Streaming Error</h3>

        <h2>Simulação de erro. Não se preocupe, isso foi provocado propositalmente.</h2>
      </ErrorMessage>

      <ErrorCode>
        Error Code: 81 99591-9313
      </ErrorCode>
    </Container>
  )
}

export default Custom404;
