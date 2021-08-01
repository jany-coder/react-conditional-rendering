import React, {useState} from 'react';
import './App.css';
import User from './components/User/User';


function App() {
  const [familiar, setFamiliar] = useState(false)
  return (
    <div className="App">
      <h1>Is Familiar: {familiar.toString()}</h1>
      <button onClick={()=>setFamiliar(!familiar)}>Toggle Friend</button>
      <User familiar= {familiar}></User>
    </div>
  );
}

export default App;
