import React from 'react'

export const Maxsulot = ({title,img,price,text}) => {
  return (
    <div>
      <img src={img} alt="img" />
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{text}</p>
    </div>
  )
}

