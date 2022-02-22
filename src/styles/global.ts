import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font: 16px/1.5 "Montserrat", sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.875rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const Main = styled.main`
  padding: 2rem 0;
`;

export const Container = styled.div<{
  maxWidth?: string;
}>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "720px"};
  margin: 0 auto;
  padding: 0 1rem;
`;

export const PageHeader = styled.header`
  margin-bottom: 1.5rem;
`;

export const PageHeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-size: 1.5rem;
`;

export const Overline = styled.h4`
  color: #0006;
  font-size: 0.75rem;
  text-transform: uppercase;
`;

export const Card = styled.article`
  .card__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.25rem 1.5rem;
  }
`;

export const Flex = styled.div<{
  direction?: string;
  gap?: string;
  alignItems?: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  gap: ${({ gap }) => gap || "0"};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
`;
