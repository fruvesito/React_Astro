import React from 'react';


const characters2 = await fetch('https://finalspaceapi.com/api/v0/character?limit=5').then((res) => res.json());

const Characters = () => {
  return (
    <ul>
      {characters2.map(character => {
        return (
          <li key={character.id}>
            <h3>{ character.name }</h3>
            <img width={150} src={character.img_url} alt={`Image of ${character.name}`} />
          </li>
        )
      })}
    </ul>
  )
}

export default Characters;