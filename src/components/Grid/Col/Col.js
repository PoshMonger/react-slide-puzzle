import React from 'react'

const Col = (props) => {
  return (
    <div  flex={props.flex} style={{...props.style, display:"flex", flexDirection:"column", width:`calc(30% - 20px)`}}> {props.children}</div>
  )
}

export default Col