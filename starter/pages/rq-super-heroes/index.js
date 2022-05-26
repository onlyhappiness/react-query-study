import React from "react";

import { isError, useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroes = () => {
  // TODO: 이렇게 쓰는 거를
  // const {isLoading, data} = useQuery("super-heroes", () => {
  //   return axios.get("http://localhost:4000/superheroes");
  // })
  // FIXME: 이렇게 변경
  // 위에 fetchSuperHeroes 만듦
  const { isLoading, data, error } = useQuery("super-heroes", fetchSuperHeroes);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroes;
