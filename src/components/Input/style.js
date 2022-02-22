import styled from "styled-components";

export const Field = styled.label`
  position: relative;
  display: block;
  width: 100%;
`;

export const FieldLabel = styled.span`
  position: absolute;
  top: 0.375rem;
  left: 0.75rem;
  display: block;
  color: #0006;
  font-size: 0.75rem;
  font-weight: 700;
`;

export const FieldInput = styled.input`
  appearance: none;
  border: 1px solid #0002;
  margin: 0;
  padding: 1.5rem 0.75rem 0.5rem;
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 0.5rem;
  transition: 0.2s;

  &:focus {
    outline: none;
    border-color: #0004;
  }
`;
