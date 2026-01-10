import styled from "styled-components";
import Heading from "./Heading";

// margin-top: "auto",
//         background-color: "#e0e7ff",
//         padding: "8px",
//         borderRadius: "5px",
//         textAlign: "center",
//         display: "flex",
//         flexDirection: "column",
//         gap: "8px",`;

const StyledContainer = styled.div`
  margin-top: auto;
  background-color: var(--color-grey-200);
  padding: 8px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const P = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  color: var(--color-grey-900);
`;

const LinkedButton = styled.a`
  color: var(--color-brand-50);
  background-color: var(--color-brand-600);
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

function AboutMe() {
  const link =
    "https://drive.google.com/file/d/1XijpGxKiB-b8J7E9TJ_WawZ9blHZzRZv/view";
  return (
    <StyledContainer>
      <P>Created By</P>
      <LinkedButton href={link} target="_blank">
        Abdelrahman Khaled
      </LinkedButton>
    </StyledContainer>
  );
}

export default AboutMe;
