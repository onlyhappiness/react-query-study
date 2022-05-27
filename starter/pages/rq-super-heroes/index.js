import React from "react";
import { useRouter } from "next/router";
import { useSuperHeroesData } from "../../hooks/useSuperHeroesData";

const RQSuperHeroes = () => {
  const router = useRouter();

  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  // console.log({
  //   isLoading,
  //   isFetching,
  // });

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
        return (
          <div
            key={hero.id}
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              router.push({
                pathname: `/rq-super-heroes/${hero?.id}`,
              });
            }}
          >
            {hero.name}
          </div>
        );
      })}
      {/* {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
};

export default RQSuperHeroes;
