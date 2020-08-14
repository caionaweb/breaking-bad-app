import React, { useRef, useEffect } from "react";
import CharacterItem from "components/CharacterItem";
import { BBService } from "services/";
import { withRouter } from "react-router-dom";
import { compose } from "utils";
import List from "components/List";
import { withData, withGeneralLayout } from "hoc";
import { getConsistenceName } from "utils";

const Characters = ({ data: characters, match: { params } }) => {
  const activeChar = useRef(null);

  useEffect(() => {
    activeChar.current && activeChar.current.scrollIntoView({ block: "center", behavior: "smooth" });
  });

  const checkIsSelected = (name) => {
    return Object.is(getConsistenceName(params.charName), name);
  };

  return (
    <List>
      {characters.map(({ id, ...data }) => {
        const isSelected = checkIsSelected(data.name);
        return <CharacterItem ref={isSelected ? activeChar : null} key={id} isActive={isSelected} {...data} />;
      })}
    </List>
  );
};

export default compose(withRouter, withData(BBService.getAllCharacters), withGeneralLayout())(Characters);
