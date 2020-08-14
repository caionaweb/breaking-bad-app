import React from "react";
import stl from "./CharacterItem.module.scss";
import { item as list__item } from "../List/List.module.scss";
import classNames from "classnames";

const CharacterItem = React.forwardRef(({ name, img, isActive, category: _, ...data }, ref) => {
  const cardStyles = classNames(`${stl.card}`, `${list__item}`, { [`${stl.active}`]: isActive });

  const details = Object.keys(data).map((detailKey, id) => {
    const detailFact = data[detailKey];
    return (
      <p className={stl.details__fact} key={id}>
        {Array.isArray(detailFact)
          ? detailFact.map((item, itemId) => (
              <span className={stl.fact__item} key={itemId}>
                {item},
              </span>
            ))
          : detailFact}
        <span className={stl.details__label}>{detailKey}</span>
      </p>
    );
  });

  return (
    <div ref={ref} className={cardStyles}>
      <div className={stl.card__image} style={{ backgroundImage: `url(${img})` }}></div>
      <div className={stl.details}>
        <h3 className={stl.details__title}>{name}</h3>
        <div className={stl.details__content}>{details}</div>
      </div>
    </div>
  );
});

export default CharacterItem;
