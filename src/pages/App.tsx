import { useAuth } from "hooks/useAuth";
import AppRoutes from "components/Routes";
import { Container } from "styles/global";

function App() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  return <AppRoutes />;
}

export default App;
