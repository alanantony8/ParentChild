import React, { useState } from 'react';
import Child from './Child';
import HOC from './HOC';

const App = (props) => {


  const FieldData = [{
    type: 'email',
    name: 'email',
    id: 'email1',
    placeholder: 'Enter the Mail ID'
  },
  {
    type: 'password',
    name: 'password',
    id: 'password1',
    placeholder: 'Enter the Password'
  },
  {
    type: 'number',
    name: 'mobile',
    id: 'mobile',
    placeholder: 'Enter the Mobile Number'
  }];

  // const Hoc = HOC(Child,
  //   FieldData
  // );

  return (
    <div>
      <HOC Child={Child} FieldData={FieldData}/>
      
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