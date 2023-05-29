import { useState } from "react";
import Button from "./Button";

function Tile() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(shuffle); // Creating array and calling on function shuffle
    const number = numbers.map((x,i) => ({value : x, index : i})); // Mapping array to set value and index
    if(number.every(n => n.value === n.index +1)) {alert('Grattis, du vann!')}; // If number value is same as index alert win

    // function returns shuffled array
    function shuffle() {
        return (
            0.5 - Math.random()
        )
    }

    const emptyTile = number.find(n => n.value === 15).index; // Finding empty tile and getting index

    function swapTile(event, i) {
        if(i === emptyTile -1 || i === emptyTile +1 || i === emptyTile -5 || i === emptyTile +5) {
            console.log('vid sidan av')
        } else (
            console.log('inte vid sida')
        )
    }

    const [state, setState] = useState();
    const reset = () => setState(shuffle()); // reset sets a new state with the function shuffle

    return (
        <>
        <div className="board">
            {number.map((x,i) =>
                <div 
                key={i}
                className={`tile ${x.value === 15 ? 'disabled' : ''}`} // Value = 15 ? give it class disabled
                onClick={event => swapTile(event, i)}
                >
                    {x.value === 15 ? '' : x.value /* Value = 15 ? don't show */}
                </div>    
            )}
        </div>
        <Button reset={reset} />
        </>
    );
}
  
export default Tile;  