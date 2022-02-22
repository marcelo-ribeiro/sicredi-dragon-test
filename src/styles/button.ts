import styled from "styled-components";

export const Button = styled.button`
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background-color: hsl(10deg, 50%, 50%);
  border: 1px solid hsl(10deg, 50%, 50%);
  color: #fff;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  a {
    text-decoration: none;
    color: #fff;
  }

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: transparent;
  color: hsl(10deg, 50%, 50%);
`;

export const IconButton = styled(OutlineButton)`
  width: 2.5rem;
  padding: 0;

  .icon {
    fill: currentColor;
    width: 1.75em;
    height: 1.75em;
  }
`;

export const Buttons = styled.div<{
  justifyContent?: string;
  gap?: string;
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  gap: ${(props) => props.gap || "1rem"};
  margin-top: 1.25rem;
`;
