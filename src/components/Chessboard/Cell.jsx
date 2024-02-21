import React from 'react'
import './Cell.css'

let activePiece = null;
function grabPiece(e){
  const element = e.target;
  if(element.classList.contains("piece")){
    console.log(element);
    const x = e.clientX - 39;     //Offset
    const y = e.clientY - 39;

    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activePiece = element;
  }
}

function movePiece(e){
  if(activePiece){
    const x = e.clientX - 39;     //Offset
    const y = e.clientY - 39;

    activePiece.style.position = "absolute";
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;
  }
}
function dropPiece(e){
  if(activePiece){
    activePiece = null;
  }
}
function Cell({num,row,col,color,image}){
    return <div className='cell'
      onMouseDown={e => grabPiece(e)} 
      style={{
        backgroundColor: `${color}`
      }}
      onMouseMove={e => movePiece(e)}
      onMouseUp = {e => dropPiece(e)}
      >
      {
      image?<div key={num} className='piece' style={{
        backgroundImage: `url(${image})`
      }}>
      </div>
      :<></>}
    </div>
    
  }

export default Cell