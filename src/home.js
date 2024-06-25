// @flow

import React from "react";
import { POKEMONS } from "./pokemon";
import { useNavigate } from "react-router-dom";

function Home(): React.Node {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Choose your starting pokemon</h1>
      {Object.keys(POKEMONS).map((item) => (
        <div>
          <img src={POKEMONS[item].staticSprite} />
          <button
            onClick={() => {
              navigate("/about/" + item);
            }}
          >
            {POKEMONS[item].name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
