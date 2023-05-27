import Tile from './Tile.js';

function Board() {
    return (
        <>
        <div className="board">
            <Tile />
        </div>
        <button className='shuffle-btn'>Slumpa</button>
        </>
    );
}
  
export default Board;  