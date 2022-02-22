import styled from "styled-components";

export const StyledModal = styled.section`
  display: grid;
  place-items: center;
  position: fixed;
  inset: 0;
  padding: 1rem 1.25rem;
  background-color: #0008;

  .modal__content {
    position: relative;
    min-width: 480px;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 12px;
  }

  .modal__title {
    margin-bottom: 1rem;
  }

  form {
    display: grid;
    gap: 1rem;
  }
`;
