function Tile() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const listItems = numbers.map(number => <div className="tile">{number}</div>);

    return (
        <>
        {listItems}
        </>
    );
}
  
export default Tile;  