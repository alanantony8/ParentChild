import React from 'react';
const Child = ({def}) => {   

    return(
      <>
      <input type={def.type} name={def.name} id={def.id} placeholder={def.placeholder} /><br/><br/>
      </>
    );
}
export default Child;

// const Child = ({value, type, name, id,setName, label}) => {   
 
//     return(
      
//         <>
//           <input type={type} name={name} id={id} onChange={e => setName(e.target.value)}  value={value}/>
//         </>
//     );
// }
// export default Child;

