
import './App.css'
import {CarCollections} from './assets/components/CarCollections'
function App() {


  return (
    <>
      <div>
        <h1>hello </h1>
        <CarCollections name="BMW" model="X5" year={true}/>
        <CarCollections name="Mercedes" model="C200" year={false}/>
      </div>
    </>
  )
}

export default App
