import { Route, Routes } from "react-router-dom";
import {
  Flex,
  Main,
  PageHeader,
  PageHeaderContainer,
  PageTitle,
} from "styles/global";
import { Dragon } from "./Single";
import { Dragons } from "./Archive";
import { OutlineButton } from "styles/button";
import { useAuth } from "hooks/useAuth";

export const DragonsIndex = () => {
  const { signout, user } = useAuth();

  return (
    <Main>
      <PageHeader>
        <PageHeaderContainer>
          <PageTitle>Dragons</PageTitle>
          <Flex gap="1rem" direction="row" alignItems="center">
            {user!.email}
            <OutlineButton onClick={signout}>Logout</OutlineButton>
          </Flex>
        </PageHeaderContainer>
      </PageHeader>

      <Routes>
        <Route path=":id" element={<Dragon />} />
        <Route path="" element={<Dragons />} />
      </Routes>
    </Main>
  );
};
