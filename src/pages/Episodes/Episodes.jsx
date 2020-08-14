import React from "react";
import EpisodeItem from "components/EpisodeItem";
import { BBService } from "services";
import List from "components/List";
import { withData, withGeneralLayout, withEpisodePagination } from "hoc";
import { compose } from "utils";

const Episodes = ({ data: episodes }) => {
  return (
    <List>
      {episodes.map(({ id, ...data }) => (
        <EpisodeItem key={id} {...data} />
      ))}
    </List>
  );
};

export default compose(withData(BBService.getAllEpisodes), withGeneralLayout(), withEpisodePagination)(Episodes);
