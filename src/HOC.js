import React from 'react';
import Child from './Child';

const HOC = ({Child,FieldData}) => {
    // console.log(FieldData);
    // console.log(Child);
    return(
        <>
        {FieldData.map((def)=>(<Child def={def}/>))}
        </>
    );
}

export default HOC;