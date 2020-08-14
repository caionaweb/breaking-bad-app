import React from "react";
import stl from "./withLoadMore.module.scss";

const DATA_DOSE_COUNT = 5;

const withLoadMore = (ContentComponent) => (props) => {
  const [dataDose, loadMore] = React.useState(DATA_DOSE_COUNT);
  const loadMoreHandler = () => loadMore(dataDose + DATA_DOSE_COUNT);

  return (
    <>
      <ContentComponent {...props} data={props.data.slice(0, dataDose)} />
      <div className={stl.loadmore}>
        <button className={stl.loadmore__btn} type="button" onClick={loadMoreHandler}>
          Load more (+5)
        </button>
      </div>
    </>
  );
};
export default withLoadMore;
