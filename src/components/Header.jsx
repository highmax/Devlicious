import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import Search from "./Search";

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav__logo {
    display: flex;
    justify-content: start;
    align-items: center;

    svg {
      font-size: 2rem;
    }
  }
`;

function Header() {
  return (
    <header>
      <Nav>
        <div className="nav__logo">
          <GiKnifeFork />
          <Logo to={"/"}>Devlicious</Logo>
        </div>
        <Search />
      </Nav>
    </header>
  );
}

export default memo(Header);
