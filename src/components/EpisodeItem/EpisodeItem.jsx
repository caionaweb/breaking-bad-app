import React from "react";
import stl from "./EpisodeItem.module.scss";
import { item as list__item } from "../List/List.module.scss";
import classNames from "classnames";
import { SEASON_POSTERS } from "utils";
import { Link } from "react-router-dom";

const TITLE_LENGTH_LIMIT = 16;

const EpisodesItem = (props) => {
  const { title, season, episode, date, characters } = props;
  const cardStyles = classNames(`${stl.card}`, `${list__item}`);
  const imagePath = `url(${SEASON_POSTERS[season - 1]})`;

  const castList = characters.map((person, id, list) => {
    return (
      <Link key={id} className={stl.link} to={`/characters/${person.replace(" ", "+")}`}>
        {person}
        {id === list.length - 1 ? "." : ","}
      </Link>
    );
  });

  const getTitle = () => {
    return (
      <h3 className={stl.details__title} title={title}>
        {title.length > TITLE_LENGTH_LIMIT ? `${title.slice(0, TITLE_LENGTH_LIMIT)}...` : title}
      </h3>
    );
  };

  const getContent = () => {
    return (
      <div className={stl.details__content}>
        <p>
          S-{season} &bull; E-{episode}
        </p>
        <p>{date}</p>
        <p className={stl.details__content_padding}>Cast:</p>
        <p className={stl.details__content_size}>{castList}</p>
      </div>
    );
  };

  return (
    <div className={cardStyles}>
      <div className={stl.card__image} style={{ backgroundImage: `${imagePath}` }}></div>
      <div className={stl.details}>
        {getTitle()}
        {getContent()}
      </div>
    </div>
  );
};

export default EpisodesItem;
