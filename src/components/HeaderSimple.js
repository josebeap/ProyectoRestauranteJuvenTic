import React from 'react';
import { AiFillShop } from 'react-icons/ai';
import '../index.css';
import Navi from './includes/nav';
const styles={
    header:{
        backgroundColor:'rgb(0,0,0)',
        display:'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        padding:10,
        position:'sticky',
        top:0,
        zIndex:3
    },
    title:{
        fontSize:'1em',
        color:'rgb(255,200,0)'
    }
}
const HeaderSimple=(props)=>{



    return(
      <header style={styles.header} className='header-simple'>
          <h1 style={styles.title}>Wordl Food</h1>
                <Navi/>
          <div className="right" id="shop" onClick={()=> document.getElementById("uwu").classList.toggle("moveModal")}>
                <div className="count"></div>
                <AiFillShop color="rgb(255,200,0)" style={{fontSize:'2em'}}/>
            </div>
      </header>
    );
}
export default HeaderSimple;