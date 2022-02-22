import DragonCard from "components/DragonCard/DragonCard";
import DragonForm from "components/DragonForm";
import Modal from "components/Modal/Modal";
import { useDragons } from "hooks/useDragons";
import { IDragon } from "models/IDragon";
import { memo, useCallback, useState } from "react";
import { Button } from "styles/button";
import { List } from "./styles";

const DragonsList = () => {
  const {
    items: dragons,
    loading: loadingDragons,
    remove,
    add,
    update,
  } = useDragons();

  const [dragon, setDragon] = useState<IDragon>({} as IDragon);
  const [modal, setModal] = useState(false);

  const showModal = (bool = true) => {
    setModal(bool);
  };

  const onRemove = useCallback(
    async (dragon) => {
      if (!window.confirm(`O dragão ${dragon.name} será removido.`)) return;
      try {
        await remove(dragon.id);
      } catch (error) {
        console.log(error);
      }
    },
    [remove]
  );

  if (loadingDragons) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Button
        onClick={() => {
          showModal();
          setDragon({ name: "", type: "" } as IDragon);
        }}
      >
        Cadastrar
      </Button>

      <List>
        {dragons?.map((dragon) => (
          <DragonCard
            dragon={dragon}
            key={dragon.id}
            to={`/dragons/${dragon.id}`}
            onEdit={(dragon) => {
              showModal();
              setDragon(dragon);
            }}
            onRemove={onRemove}
          />
        ))}
      </List>

      {modal && (
        <Modal title={!!dragon.id ? "Editar dragão" : "Cadastrar dragão"}>
          <DragonForm
            dragon={dragon}
            setDragon={setDragon}
            add={add}
            update={update}
            onCancel={() => showModal(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default memo(DragonsList);
