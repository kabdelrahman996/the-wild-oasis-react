import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  background-color: var(--color-white);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
