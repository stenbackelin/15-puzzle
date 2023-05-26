function Tile() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    numbers.sort(() => 0.5 - Math.random());

    return (
        numbers.map(number =>
            <div 
            key={number.toString()}
            id={number.toString()}
            className="tile"
            >
                {number}
            </div>    
        )
    );
}
  
export default Tile;  