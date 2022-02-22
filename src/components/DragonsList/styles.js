import styled from "styled-components";

export const List = styled.section`
  display: grid;
  gap: 2rem;
  margin: 1.5rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
