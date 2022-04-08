import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Character from './Character';

function Characters() {
  const [page, setPage] = useState(1)

  const fetchCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    return response.json();
  };

  const { data, status } = useQuery(['characters', page], fetchCharacters)

  if (status === 'loading') {
    return <div>Loading..</div>
  }

  if (status === 'error') {
    return <div>Error</div>
  }

  console.log(data?.results)

  return (
    <div className='characters'>
      {data.results.map((character) => (  
        // <div key={character.id}>{character.name}</div>
        <Character character={character} />
      ))}
    </div>
  )
}

export default Characters