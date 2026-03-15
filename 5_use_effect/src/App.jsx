import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, seta] = useState(0)
  const [b, setb] = useState(100)

  function achange(){
    seta(a+1)
  }
  function bchange(){
    setb(b+1)
  }

  useEffect(() => {
    console.log('Use effect A')
  }, [a])

  useEffect(() => {
    console.log('Use effect B')
  }, [b])

  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>

      <button onClick={achange}>Change a</button>
      <button onClick={bchange}>Change b</button>
    </div>
  )
}

export default App