import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [isClicked, setIsClicked] = useState(true);
  const { name, hp } = pokemon;
  const { front, back } = pokemon.sprites;

  function handleImageClick() {
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img
            onClick={handleImageClick}
            src={isClicked ? front : back}
            alt={name}
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
