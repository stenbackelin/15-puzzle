function Tile() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort(() => 0.5 - Math.random()); // Creating array and sorting it randomly
    const number = numbers.map((x,i) => ({value : x, index : i})); // Mapping array to set value and index

    //const orderedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    //const solved = JSON.stringify(orderedNumbers) === JSON.stringify(numbers)
    //console.log(solved)

    return (
        number.map((x,i) =>
            <div 
            key={i}
            id={i}
            className={`tile ${x.value === 15 ? 'disabled' : ''}`} // Value = 15 ? give it class disabled
            >
                {x.value === 15 ? '' : x.value /* Value = 15 ? don't show */}
            </div>    
        )
    );
}
  
export default Tile;  