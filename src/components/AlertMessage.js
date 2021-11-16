import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai'
const AlertMessage=({prod})=>{

    const [right, setRight] = React.useState(150)
    setTimeout(()=>{
        setRight(0)
    },300)

    return(
      <div style={{width:'300px',borderRadius:'4px',backgroundColor:'rgb(0,0,0)',position:'fixed',zIndex:20,top:100,left:`${right}vw`,padding:10}}>
          <h3 style={{fontSize:'18px',color:'white',marginBottom:10}}>Se añadio el producto al carrito</h3>
          <p style={{fontSize:'16px',color:'white',marginBottom:10}}>{prod} <AiOutlineCheck style={{fontSize:'1em'}} color='rgb(255,200,0)'/></p>
      </div>
    );
}
export default AlertMessage;