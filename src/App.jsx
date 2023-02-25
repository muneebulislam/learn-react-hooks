import './App.css'
import { UseState } from './components/UseState';
import { UseEffect } from './components/UseEffect';
import UseMemo from './components/UseMemo';
function App() {

  return (
    <div className="App">
      <h1>Hello world</h1>
      <UseState />
      <UseEffect />
      <UseMemo />
      
    </div>
  )
}

export default App
