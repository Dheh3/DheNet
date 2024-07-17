import './App.css'
import Character from './character/Character'
import Map from './Map/Map'
import Dice from './Dice/Dice'

function App() {

  return (
    <>
      <div className='container'>
        <Character />
        <Map />

      </div>
      <Dice />
    </>
  )
}

export default App
