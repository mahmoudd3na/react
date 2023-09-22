import { useState } from "react";
export function ScoreKeeper({ numPlayers, target }) {
    const [players, setPlayers] = useState(new Array(numPlayers).fill(0));
    const result = [];
    for (let i = 0; i < players.length; i++) {
        result.push(
            <li key={i}>
                <h3>{`Player${i + 1}: ${players[i]}`}</h3>
                <button onClick={()=>incrementPlayer(i)}>+1</button>
                {players[i] === target ? <h2>Winner</h2> : null}
            </li>
        )
    }
    const incrementPlayer =(i)=>{
        setPlayers(previousPlayers =>{
          const newPlayers = [...previousPlayers]; 
          newPlayers[i]++; 
          return newPlayers; 
        })
    }
     return (
        <ul>
            {result}
        </ul>
    )
}