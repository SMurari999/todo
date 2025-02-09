import React, { useState, useEffect } from "react";

const Loadingtodo = (WrappedComponent, fetchData) => {
  return function WithLoadingComponent(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchData().then((response) => {
        setData(response);
        setLoading(false);
      });
    }, []);

    return loading ? <p>Loading tasks...</p> : <WrappedComponent data={data} setData={setData} {...props} />;
  };
};

export default Loadingtodo;
