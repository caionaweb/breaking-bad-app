import React, { useState } from "react";
import stl from "./withEpisodePagination.module.scss";
import classNames from "classnames";

const DEFAULT_CURRENT_PAGE = "1";

const withEpisodePagination = (ContentComponent) => (props) => {
  const [currentPage, selectPage] = useState(DEFAULT_CURRENT_PAGE);

  const seasons = props.data.reduce((seasons, episodeItem) => {
    const seasonId = episodeItem.season.trim();
    seasons[seasonId] = !seasons[seasonId] ? [episodeItem] : [...seasons[seasonId], episodeItem];
    return seasons;
  }, {});

  const changePage = (pageId) => () => selectPage(pageId);

  const pages = Object.keys(seasons).map((seasonId) => {
    const isActive = currentPage === seasonId;
    const styles = classNames(stl.pagination__item, { [stl.pagination__item_active]: isActive });
    return (
      <li className={styles} key={seasonId} onClick={changePage(seasonId)}>
        {seasonId}
      </li>
    );
  });
  return (
    <>
      <ContentComponent {...props} data={seasons[currentPage] || []} />
      <ul className={stl.pagination}>{pages}</ul>
    </>
  );
};

export default withEpisodePagination;
