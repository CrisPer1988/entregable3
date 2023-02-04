import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/residentInfo.css";

const ResidentInfo = ({ url }) => {
  const [character, setCharacter] = useState();

  /* console.log(character); */
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setCharacter(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="resident">
      <header className="resident__header">
        <img src={character?.image} alt="" />
        <div className="residen__container-status">
          <span className={`resident__circle ${character?.status}`}></span>
          <span className="resident__status">{character?.status}</span>
        </div>
      </header>
      <section className="resident__info">
        <h3>{character?.name}</h3>
        <ul>
          <li>
            <span>Specie: </span>
            {character?.species}
          </li>
          <li>
            <span>Origen: </span>
            {character?.origin.name}
          </li>
          <li>
            <span>Episodes where appears: </span>
            {character?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentInfo;
