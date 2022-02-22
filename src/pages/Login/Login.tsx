import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import Input from "components/Input/Input";
import { Button, Buttons } from "styles/button";
import { Container, Flex, Main, PageHeader, PageTitle } from "styles/global";
import { useState } from "react";
import { LoginSection, LoginContainer } from "./style";

export const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const pageFrom = (location.state as any).from?.pathname || "/";
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      email: { value: email },
      password: { value: password },
    } = event.currentTarget;

    try {
      setIsLoading(true);
      await signin({ email, password });
      navigate(pageFrom, { replace: true });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <main>
      <LoginSection>
        <LoginContainer maxWidth="360px">
          <PageHeader>
            <PageTitle>Login</PageTitle>
          </PageHeader>

          <form onSubmit={handleSubmit}>
            <Flex gap="1rem">
              <Input type="email" name="email" id="email" label="E-mail" />

              <Input
                type="password"
                name="password"
                id="password"
                label="Senha"
              />

              <Buttons>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </Buttons>
            </Flex>
          </form>
        </LoginContainer>
      </LoginSection>
    </main>
  );
};
