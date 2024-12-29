import './App.css'
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import { useState } from 'react';

function App() {

  const [count, useCount] = useState(0);

  const onClickBoutton = (value) => {
    useCount(value + count);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
      <Viewer count={count}/>
      </section>
      <section>
      <Controller onClickBoutton={onClickBoutton}/>
      </section>
    </div>
  );

  }

export default App;