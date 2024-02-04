import React from 'react'
import Cell from './Cell';

const rows = [8,7,6,5,4,3,2,1];
const cols = [1,2,3,4,5,6,7,8];
const pieces = [];

for(let i=1;i<=8;i++){
  pieces.push({row:7,col:i,image:"images/pawn_b.png"});
  pieces.push({row:2,col:i,image:"images/pawn_w.png"});
  if(i==1 || i==8){
    pieces.push({row:8,col:i,image:"images/rook_b.png"});
    pieces.push({row:1,col:i,image:"images/rook_w.png"});
  }
  if(i==2 || i==7){
    pieces.push({row:8,col:i,image:"images/horse_b.png"});
    pieces.push({row:1,col:i,image:"images/horse_w.png"});
  }
  if(i==3 || i==6){
    pieces.push({row:8,col:i,image:"images/bishop_b.png"});
    pieces.push({row:1,col:i,image:"images/bishop_w.png"});
  }
  if(i==4){
    pieces.push({row:8,col:i,image:"images/queen_b.png"});
    pieces.push({row:1,col:i,image:"images/queen_w.png"});
  }
  if(i==5){
    pieces.push({row:8,col:i,image:"images/king_b.png"});
    pieces.push({row:1,col:i,image:"images/king_w.png"});
  }
}

//Place pawns


function ChessBoard(){
  return (
    <div style={{
      height: "661px",
      width: "661px",
      padding: '10px',
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      gridTemplateColumns: 'repeat(8,80px)',
      gridTemplateRows: 'repeat(8,80px)',
      backgroundColor: 'black',
      borderRadius: '5px',
    }}>
      {
        rows.map(row => (
        cols.map(col=>{
          const matchingPiece = pieces.find(piece => piece.row === row && piece.col === col);
          return ((row+col)%2==0?
          <Cell num={row+col} row = {row} col={col} color={"#769656"} image={matchingPiece?matchingPiece.image:undefined}/>:
          <Cell num={row+col} row = {row} col={col} color={"#eeeed2"} image={matchingPiece?matchingPiece.image:undefined}/>
          )  
        })
      ))}
      
    </div>
  )
}

export default ChessBoard