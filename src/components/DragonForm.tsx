import { useState, FormEvent, useCallback, memo } from "react";
import { IDragon } from "models/IDragon";
import Input from "components/Input/Input";
import { Button, Buttons, OutlineButton } from "styles/button";

interface IProps {
  dragon: IDragon;
  setDragon: (dragon: IDragon) => void;
  onCancel: () => void;
  add: (dragon: IDragon) => Promise<void>;
  update: (dragon: IDragon) => Promise<void>;
}

const DragonForm = ({ dragon, setDragon, onCancel, add, update }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setDragon({ ...dragon, [name]: value });
  };

  const handleUpdate = useCallback(async () => {
    setIsLoading(true);
    try {
      if (!!dragon.id) {
        await update(dragon);
      } else {
        await add(dragon);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      onCancel();
    }
  }, [dragon, update, add, onCancel]);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      await handleUpdate();
    },
    [handleUpdate]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        type="text"
        name="name"
        value={dragon.name}
        onChange={onChange}
      />

      <Input
        label="Tipo"
        type="text"
        name="type"
        value={dragon.type}
        onChange={onChange}
      />

      <Buttons>
        <OutlineButton type="button" onClick={onCancel} disabled={isLoading}>
          Cancelar
        </OutlineButton>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Salvando..." : "Salvar"}
        </Button>
      </Buttons>
    </form>
  );
};

export default memo(DragonForm);
