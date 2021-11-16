import React, { useState } from 'react';
import Card from '../components/Card';
import HeaderSimple from '../components/HeaderSimple';
import ModalShop from '../components/ModalShop';
import platillos from '../data/platillos.json';
import './styles/menuDos.css';

const Menu=(props)=>{
    const [page,setPage]=useState(1);
    const dist=[];
    const dist2=[];
 


    platillos.forEach(p=>{
        if(p.id<17){
          dist.push(p)
        }
        else if(p.id<40){
          dist2.push(p)
        }
    })


    return(
      <>
        <HeaderSimple/>
        <div className='menu-content'>
          <div style={{margin:'20px auto',width:'90%',padding:'20px 0px',border:'0.2px solid rgba(0,0,0,0.2)',borderTop:'none',borderBottom:'none',display:'flex',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap'}}>
           
            {page===1?
            dist.map((e,i)=>(
              <Card key={i} id={e.id} title={e.name} price={e.price} desc={e.desc}/>
                  ))
                  :
                  dist2.map((e,i)=>(
                    <div>
                      a
                    <Card key={i} id={e.id} title={e.name} price={e.price} desc={e.desc}/>
                    </div>
                        ))  
                }
          
          </div>
        </div>
        <ModalShop id={'uwu'}/>
        <div style={{display:'flex',width:'40%',justifyContent:'space-evenly',margin:'20px auto'}}>
        <button style={{background:page===1?"rgb(255,100,50)":"rgb(255,200,50)",color:'black',cursor:'pointer',borderRadius:'3px',border:'none',padding:'10px'}}  onClick={()=>setPage(1)}>Back</button>
        <button style={{background:page===2?"rgb(255,100,50)":"rgb(255,200,50)",color:'black',cursor:'pointer',borderRadius:'3px',border:'none',padding:'10px'}} onClick={()=>setPage(2)}>Next</button>
        </div>
      </>
    );
}
export default Menu;