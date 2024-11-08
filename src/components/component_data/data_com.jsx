import React from 'react'

export const DataCom = ({img,title}) => {
  return (
    <div>
        <img src={img} alt="img" />
        <h3>{title}</h3>
    </div>
  )
}

