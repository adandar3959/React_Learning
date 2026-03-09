// import React from 'react'

// const App = () => {
//   return (
//     <>
//       <div id='parent'>
//         <h1 id='child1'>Use of fragmentation</h1>
//         <h3 id='child2'>Negrooo</h3>
//       </div>
//       <div id='chacha'>
//         <h1>Chacha Fragmentation</h1>
//         <h1>djsckbkc</h1>
//       </div>
//     </>
//   )
// }

// export default App


import Student from "./student.jsx";

function App() {
  return (
    <div className="App">
      <h1>University Portal</h1>
      
      <Student name="Zain" age={22} isStudent={true} />
      <Student name="Ali" age={24} isStudent={false} />
      <Student name="Sara" age={21} isStudent={true} />
    </div>
  );
}

export default App;