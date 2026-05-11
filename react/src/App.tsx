
import './App.css'
import {CarCollections} from './assets/components/CarCollections'
import { Card } from './assets/components/Card';
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

      <div>
        <Card 
        title="BMW X5"
         description="A luxury SUV from BMW" 
         image="/bmw-x5.jpg" 
         footer={<button>Buy Now</button>} // passing a ReactNode as footer
         />
      </div>
    </>
  )
}

export default App
