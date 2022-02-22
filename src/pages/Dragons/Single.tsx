import { IDragon } from "models/IDragon";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dragonsApi } from "services/DragonsApi";
import { Container, Flex, Main, Overline } from "styles/global";

export const Dragon: React.FC = () => {
  const params = useParams();
  const [dragon, setDragon] = useState<IDragon>(undefined!);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dragonsApi
      .get(params.id!)
      .then(({ data }) => setDragon(data))
      .finally(() => setLoading(false));
  }, [params.id]);

  return (
    <Main>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Flex gap="0.5rem">
            <div>
              <Overline>Criado em</Overline>
              <h4>{new Date(dragon.createdAt).toLocaleDateString()}</h4>
            </div>

            <div>
              <Overline>Dragon</Overline>
              <h2>{dragon.name}</h2>
            </div>

            <div>
              <Overline>Type</Overline>
              <h3>{dragon.type}</h3>
            </div>
          </Flex>
        )}
      </Container>
    </Main>
  );
};
