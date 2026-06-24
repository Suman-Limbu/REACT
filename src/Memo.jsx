import React from 'react'

const Memo = React.memo(({name}) => {
  console.log("memo rendered")
  return (
    <div>
        {name}

    </div>
  )
})

export default Memo;