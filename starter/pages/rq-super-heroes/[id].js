import { useRouter } from "next/router";
import { useSuperHeroData } from "../../hooks/useSuperHeroData";

const RQSuperHeroId = () => {
  const router = useRouter();

  const heroId = router.query.id;
  console.log(router);

  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};

export default RQSuperHeroId;
