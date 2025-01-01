import './App.css'
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount")
  }, [])
  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update")
  })

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  useEffect(()=>{
    // console.log(`count: ${count} / input: ${input}`)
  }, [count, input])
// 의존성 배열
// deps(dependency array)

  const onClickBoutton = (value) => {
    setCount(value + count);
    // console.log(count);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
      <input value={input} onChange={(e) => {
          setInput(e.target.value)
        }}/>
      </section>
      <section>
      <Viewer count={count}/>
      {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
      <Controller onClickBoutton={onClickBoutton}/>
      </section>
    </div>
  );

  }

export default App;