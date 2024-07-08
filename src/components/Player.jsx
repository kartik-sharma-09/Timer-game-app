import { useState, useRef} from "react";

export default function Player() {
  const playerName = useRef()
const [enteredPlayerName,setEnteredPlayerName] = useState(null)

function handelClick(){
  setEnteredPlayerName(playerName.current.value) 
  playerName.current.value = ''
}

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'Unknow entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
