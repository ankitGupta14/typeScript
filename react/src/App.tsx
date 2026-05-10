
import './App.css'
import {CarCollections} from './assets/components/CarCollections'
import { Counter } from './assets/components/Counter';
import {OrderFrom} from './assets/components/OrderFrom';
function App() {


  return (
    <>
      <div>
        <h1>hello </h1>
        <CarCollections name="BMW" model="X5" year={true}/>
        <CarCollections name="Mercedes" model="C200" year={false}/>

      </div>
      <div>
        <Counter />
      </div>
      <div>
        <OrderFrom onSubmit={(order) => console.log(order)} />
      </div>
    </>
  )
}

export default App
