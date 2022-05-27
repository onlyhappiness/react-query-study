import React from "react";

import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroes = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
  };

  // TODO: 이렇게 쓰는 거를
  // const {isLoading, data} = useQuery("super-heroes", () => {
  //   return axios.get("http://localhost:4000/superheroes");
  // })
  // FIXME: 이렇게 변경
  // 위에 fetchSuperHeroes 만듦
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      onSuccess,
      onError,
    }
  );

  console.log({ isLoading, isFetching });

  const Loading = () => {
    if (isLoading || isFetching) {
      return <h2>Loading...</h2>;
    }
  };

  // 만약 에러가 났을 경우
  const Error = () => {
    if (isError) {
      return <h2>{error.message}</h2>;
    }
  };

  return (
    <>
      <h2>RQSuperHeroes</h2>
      <Loading />
      <Error />

      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroes;
