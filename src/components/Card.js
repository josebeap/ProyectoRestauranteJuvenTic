import React, {useContext, useState} from 'react';
import image from '../assets/images/pescado.jpg';
import {AiFillInfoCircle} from 'react-icons/ai'
import ShopContext from '../context/shop/ShopContext';
import AlertMessage from './AlertMessage';
const Card=({id,title,price,desc})=>{

    const {addPlates} = useContext(ShopContext);
    const [prod, setprod] = useState(null);
    const [show, setShow] = useState(false)

    const addPlatesHome=(plate)=>{
        const sh=document.getElementById('shop');
        sh.style.transform='rotate(30deg)'
        addPlates(plate);
        setprod(plate.title)
        setShow(true);
        
        setTimeout(()=>{
          sh.style.transform='rotate(0deg)'
        },300)

        setTimeout(()=>{
          setShow(false)
        },3000)
        
    }
    const showDesc=i=>{
        document.getElementById(i).classList.toggle('descriptionActive');
        
    }

    return(
      <div className="card" >
          <div className="card-img">
                <img src={image} alt={title}/>
          </div>
          <div className='card-body'>
            <h3>{title}</h3>
            <button onClick={()=>{
              addPlatesHome({id,title,price})
              }}
              name="btn-shop">${price}</button>
            <AiFillInfoCircle className='svg' fontSize='1.2em' onClick={(e)=>showDesc('card'+id)}/>
          </div>
          <div className='description' id={'card'+id}>
            <div className="modal">
            <div className="card-img">
                <img src={image} alt={title}/>
          </div>
            <h3>Descripcion del plato</h3>
              <p>{desc}</p>
              <button onClick={(e)=>showDesc('card'+id)} >Cancel</button>
            </div>
          </div>
          {
            show?<AlertMessage prod={prod} />:null
          }
          
      </div>
    );
}
export default Card;