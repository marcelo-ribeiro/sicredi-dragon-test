import { IDragon } from "models/IDragon";
import { memo } from "react";
import { Link } from "react-router-dom";
import { Buttons, IconButton, OutlineButton } from "styles/button";
import { Flex, Overline } from "styles/global";
import { CardDragon } from "./styles";

interface IProps {
  dragon: IDragon;
  to: string;
  onEdit: (dragon: IDragon) => void;
  onRemove: (dragon: IDragon) => void;
}

const DragonCard = ({ dragon, to, onEdit, onRemove }: IProps) => {
  return (
    <CardDragon>
      <div className="card__content">
        <Link to={to}>
          <Flex gap="0.5rem">
            <div>
              <Overline>Dragon</Overline>
              <h2>{dragon.name}</h2>
            </div>
            <div>
              <Overline>Type</Overline>
              <h3>{dragon.type}</h3>
            </div>
          </Flex>
        </Link>

        <Buttons gap="0.75rem">
          <OutlineButton onClick={() => onEdit(dragon)}>Editar</OutlineButton>
          <IconButton onClick={() => onRemove(dragon)}>
            <svg
              className="icon icon-delete"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </IconButton>
        </Buttons>
      </div>
    </CardDragon>
  );
};

export default memo(DragonCard);
