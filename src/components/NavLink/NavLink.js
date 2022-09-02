import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = Styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  color: var(--blue);
`;

function NavLink({ to, text }) {
  return (
    <StyledLink to={to}>
      <span>{text}</span>
    </StyledLink>
  );
}

export default NavLink;
