import React from 'react';


const Child = ({setInput,Input}) => {   
  
  const handleClick=(e)=>{
    console.log(e.target.value);   
    // setInput(prevInput=>prevInput= e.target.value);
    
    setInput({text1: e.target.value})
    
}

const handleClick2=(e)=>{
  console.log(e.target.name, e.target.value);  
  setInput({...Input,[e.target.name]:e.target.value})  
}


    return(
        <>
        <div>
          <h3>child component</h3>
            <form>
                <input type = "text" name = "text1" id = "input" onChange = {handleClick2} /> &nbsp;    &nbsp;
                <input type = "text" name = "text2" id = "input1" onChange = {handleClick2} />
                
            </form>
        </div>


        </>
    );
}

export default Child;