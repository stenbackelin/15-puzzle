function Tile({number}) {
    const emptyTile = number.find(n => n.value === 15).index; // finding empty tile and getting index

    function swapTile(event, i, x) {
        if(i === emptyTile -1 || i === emptyTile +1 || i === emptyTile -5 || i === emptyTile +5) {
            console.log('Innehåller:', x.value, 'Index:', i);
            console.log('vid sidan av')
        } else (
            console.log('inte vid sida')
        )
    }
    
    return (
        number.map((x,i) =>
            <div 
            key={i}
            className={`tile ${x.value === 15 ? 'disabled' : ''}`} // value = 15 ? give it class disabled
            onClick={event => swapTile(event, i,x)}
            >
                {x.value === 15 ? '' : x.value /* value = 15 ? don't show */}
            </div>    
        )
    );
}
  
export default Tile;  