


const Child = ({value, type, name, id,setName, label}) => {   
 
    return(
        <>
          <input type={type} name={name} id={id} onChange={e => setName(e.target.value)}  value={value}/>
        </>
    );
}
export default Child;


// const Child = ({value, type, name, id,setName, label}) => {   
 
//   return(
//       <>
//         <p>{label}</p>
//         <input type={type} name={name} id={id} onChange={e => setName(e.target.value)}  value={value}/>
//       </>
//   );
// }
// export default Child;