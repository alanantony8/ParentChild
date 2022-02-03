import React, { useState } from 'react';
import Child from './Child';

const App = (props) => {
  const [Input, setInput] = useState({text1: "" , text2 : ""});


  return (
    <div className='parent'>

      <div className='display'><span><Child Input = {Input} setInput={setInput} /></span><br /></div>
      <form>
        <h3>parent component</h3>
        <input type="text" name="output1" value={Input.text1} id="output1" /> &nbsp;    &nbsp;
        <input type="text" name="output2" value={Input.text2} id="output2" />
      </form>
    </div>
  );
}

export default App;    