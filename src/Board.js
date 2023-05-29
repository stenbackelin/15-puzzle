import Tile from './Tile.js';
import Message from './Message.js';
import Button from './Button.js';
import { useState } from "react";

function Board() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(shuffle); // creating array and calling on function shuffle
    const number = numbers.map((x,i) => ({value : x, index : i})); // mapping array to set value and index
    const [state, setState] = useState();
    const reset = () => setState(shuffle()); // reset sets a new state with the function shuffle

    // function returns shuffled array
    function shuffle() {
        return (
            0.5 - Math.random()
        )
    }

    return (
        <>
        <Message number={number} />
        <div className="board">
            <Tile number={number} />
        </div>
        <Button reset={reset} />
        </>
    );
}
  
export default Board;  