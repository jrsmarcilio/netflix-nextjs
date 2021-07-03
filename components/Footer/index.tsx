import Link from "next/link";
import styled from "styled-components"

import { AiOutlineGithub, FaLinkedin, BiGitRepoForked } from '../Icons'

const Container = styled.div`
  width: 100%;
  height: 150px;

  background: ${props => props.theme.colors.secundary};
  position: absolute;

  left: 0;
  bottom: -160px;

  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: center;


  a {
    text-decoration: none;
  }

  svg {
    margin: 50px;
    font-size: 32px;
    color: white;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Link href="https://github.com/jrsmarcilio">
        <a><AiOutlineGithub /></a>
      </Link>
      <Link href="https://linkedin.com/in/jrsmarcilio">
        <a><FaLinkedin /></a>
      </Link>
      <Link href="https://github.com/jrsmarcilio/netflix-nextjs.git">
        <a><BiGitRepoForked /></a>
      </Link>
    </Container>
  )
}

export default Footer
