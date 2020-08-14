import React, { useState, useEffect } from "react";

const widthData = (dataService) => (ContentComponent) => (props) => {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onLoaded = (itemList) => {
    setLoading(false);
    setItemList(itemList);
  };
  const onError = (error) => {
    setLoading(false);
    setError(error);
  };

  useEffect(() => {
    dataService().then(onLoaded).catch(onError);
  }, []);

  return <ContentComponent isLoading={isLoading} error={error} data={itemList} {...props} />;
};

export default widthData;
