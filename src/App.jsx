import './App.css'
import Button from './components/Button'
import Screen from './components/Screen'
import ButtonClear from './components/ButtonClear'
import { useState } from 'react'

function App() {

  const [input, setinput] = useState("")

  const addInput = (val) => setinput(input + val)

  const calculateResult = () => {
    input.length === 0 ? alert("Ingrese un numero") : setinput(eval(input))
  }

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Screen input={input} />
        <div className="fila">
          <Button addInput={addInput}>1</Button>
          <Button addInput={addInput}>2</Button>
          <Button addInput={addInput}>3</Button>
          <Button addInput={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button addInput={addInput}>4</Button>
          <Button addInput={addInput}>5</Button>
          <Button addInput={addInput}>6</Button>
          <Button addInput={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button addInput={addInput}>7</Button>
          <Button addInput={addInput}>8</Button>
          <Button addInput={addInput}>9</Button>
          <Button addInput={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button addInput={calculateResult}>=</Button>
          <Button addInput={addInput}>0</Button>
          <Button addInput={addInput}>.</Button>
          <Button addInput={addInput}>/</Button>
        </div>
        <div className="fila">
          <ButtonClear clearInput={() => setinput("")}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  )
}

export default App
