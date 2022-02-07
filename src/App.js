import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Child from './Child';

const App = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      {/* <div className='display'><span><Child  setName={setName} /></span><br /></div> */}
      <TextField
        name='password'
        label={'Enter your password'}
        type={'password'}
        value="Alan"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      
      <TextField
        name='email'
        label={'Enter your email'}
        type={'text'}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      
    </div>
  );
};











  // const [Input, setInput] = useState({text1: "" , text2 : ""});
//   return (
//     <div className='parent'>

//       <div className='display'><span><Child Input = {Input} setInput={setInput} /></span><br /></div>
//       <form>
//         <h3>parent component</h3>
//         <input type="text" name="output1" value={Input.text1} id="output1" /> &nbsp;    &nbsp;
//         <input type="text" name="output2" value={Input.text2} id="output2" />
//         <TextField
//         value= {Input}
//         label="Enter your name"
//         onChange={(e) => {
//           setInput(e.target.value);
//         }}
//       />
//       </form>
//     </div>
//   );
// }



export default App;    