import React from 'react';
import Icon from "./components/icon";
import Question from './components/question';
import Prize from './components/prize';
import Timer from './components/timer';

function App() {
  return (
    <div className="app">
      <div className='left-column'>
        <Icon />
        <Timer />
        <Question/>
      </div>
      <Prize/>
    </div>
  );
}

export default App;
