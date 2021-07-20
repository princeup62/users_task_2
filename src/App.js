import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Pagination from "@material-ui/lab/Pagination";
import Card from "./components/Card";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [ApiData, setApiData] = useState([]);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [page, setpage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`).then((response) => {
      setIsLoading(true);
      response.json().then((result) => {
        setIsLoading(false);
        setApiData(result.data);
        setTotalPageCount(result.total_pages);
        console.log(result);
        console.log(result.total_pages);
      });
    });
  }, [page]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="container-fluid text-center mx-auto mt-5 d-flex flex-column main-outer-wrapper ">
          <div className="row mx-auto">
            {ApiData.map((item) => (
              <Card item={item} key={item} />
            ))}
          </div>

          <div className="mx-auto">
            <Pagination
              count={totalPageCount}
              color="primary"
              size="large"
              onChange={(event, value) => setpage(value)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
