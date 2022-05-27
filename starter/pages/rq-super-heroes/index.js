import React from "react";

import { isError, useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroes = () => {
  const onSuccess = () => {
    console.log("Perform side effect after data fetching");
  };

  const onError = () => {
    console.log("Perform side effect after encountering error");
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
      // cacheTime: 5000,

      // staleTime: 0,

      // refetchOnMount: true,
      // refetchOnWindowFocus

      // refetchInterval: 2000,
      // refetchIntervalInBackground: true,

      // enable이 false일 때 data를 가져오지 않음
      enabled: false,
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
      {/* 버튼을 눌렀을 때 refetch를 통해 데이터를 가져옴 */}
      <button onClick={refetch}>Fetch Heroes</button>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroes;
