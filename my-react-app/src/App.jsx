
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'


function App() {
  function handleclick() {
    alert('button clicked')
  }

  const handleclick2 = () => {
    alert('button clciked 2')
  }


  return (
    <>
    

      <h1>Vite + React</h1>
      <button onClick={handleclick} >click me</button>
      <button onClick={handleclick2} >click me2</button>
      <button onClick={() => {
        alert('click 3')
      }} >click me 3
      </button>

      <Counter></Counter>
      <Team></Team>
      <User></User>
      <Friends></Friends>
     

    </>
  )
}

export default App
