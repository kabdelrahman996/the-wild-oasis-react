import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import AboutMe from "./AboutMe";

const StyledSidebar = styled.aside`
  grid-row: 1 / -1;
  width: 26rem;
  background-color: var(--color-white);
  padding: 2rem;
  border-right: 1px solid var(--color-gray-100);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <AboutMe />
    </StyledSidebar>
  );
}

export default Sidebar;
