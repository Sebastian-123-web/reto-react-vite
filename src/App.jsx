import Card from './components/Card';

import './App.css';
import svgTop from './reto/images/bg-pattern-top.svg';
import svgBottom from './reto/images/bg-pattern-bottom.svg';

function App() {
  return (
    <div className="App">
      {/* <img src={svgTop} alt="" className='svg-top' />
      <img src={svgBottom} alt="" className='svg-bottom' /> */}
      <Card />
    </div>
  )
}

export default App
