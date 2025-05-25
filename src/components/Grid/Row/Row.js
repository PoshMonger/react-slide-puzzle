import React from 'react'

const Row = (props) => {
  return (
    <div style={{...props.style, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%'}} {...props}
      >
        {props.children}
    </div>
  )
}

export default Row