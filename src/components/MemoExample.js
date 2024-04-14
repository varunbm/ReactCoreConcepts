import React from 'react'

function MemoExample() {
    console.log("Memo component")
  return (
    <div>
        Memo component example
    </div>
  )
}

export default React.memo(MemoExample)
