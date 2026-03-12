import React, { useState } from 'react'

const App = () => {

  const [name, setname] = useState('')

  const submithandler=()=>{
    console.log("Form Submitted")
  }

  return (
    <div>
      <form onSubmit={()=>
          {
            submithandler()
          }
        }>
        
        <input type="text" 
        placeholder='Enter Name' 
        value={name} 
        onChange={(e)=>setname(e.target.value)} />

        <button>Submit</button>

      </form>
    </div>
  )
}

export default App