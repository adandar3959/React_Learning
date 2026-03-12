// import React, { useState } from 'react'

// const App = () => {

//   const [count, setcount] = useState(0)

//   function increament(){
//     setcount(count+1)
//   }

//   function decreament(){
//     setcount(count-1)
//   }

//   return (
//     <div>
//       <h1>{count} </h1>
//       <button onClick={increament}>Increament</button>
//       <button onClick={decreament}>Decreament</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {

  const [person, setperson] = useState({ name: "Adan", age: 30 })

  function updatePerson() {
    const newperson = {...person}

    newperson.name = "Negan"
    setperson(newperson)
  }

  return (
    <div>
      <h1>My name is {person.name} and age is {person.age}</h1>
      <button onClick={updatePerson}>Update</button>
    </div>
  )
}

export default App