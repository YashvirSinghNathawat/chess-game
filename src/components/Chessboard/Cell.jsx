import React from 'react'

function Cell({num,row,col,color,image}){
    return <div key={num} style={{
      width: '78px',
      height: '78px',
      backgroundColor: color,
      borderRadius: '2px',
      display: 'grid',
      placeContent: 'center'
    }}>
      <img src={image} alt="" />
    </div>
  }

export default Cell