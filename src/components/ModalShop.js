import React, { useContext,useEffect, useState} from 'react';
import { AiFillShop } from 'react-icons/ai';
import ShopContext from '../context/shop/ShopContext';

const ModalShop=(props)=>{
    const {shop} = useContext(ShopContext); 
    //const [count, setCount] = useState(0);
    const [newShop, setNewShop] = useState(shop);
    const [total,setTotal]=useState(0);

    useEffect(()=>{
        const updateShop=()=>{
            setNewShop(newShop)
               if (typeof (newShop) != 'string') {
                  newShop.map((e)=>setTotal(total+e.price))
                }

        }
        window.addEventListener('click',updateShop)
        console.log("uwu")
    },[ newShop, total])



    return(
      <div className="shop-modal" id="uwu">
          <div className="shop-header">
              <h3>WorldFood</h3>
              <AiFillShop color='rgb(255,200,0)' style={{fontSize:'3em'}} />
          </div>
          <div className="shop-body">
            <div className="shop-body-sup">
            <h4>Tu pedido - Tus productos</h4>
            </div>
            <table className="table">
        <thead className="head">

        <tr>
            <th className="id-table-id">Codigo</th>
            <th className="title-table-title">Platillo</th>
            <th>Valor</th>
        </tr>
        </thead>
        <tbody>
        {typeof(newShop)==='string'? null :
            newShop.map((e,i)=>{
                return(
                
                <tr key={i}>
                <td className="id-table">{e.id}</td>
                <td className="title-table">{e.title}</td>
                <td>{e.price}</td>
            </tr>
        )})
        
        }

        </tbody>
    </table>
            <div className="shop-end">
                <button >Comprar</button>
                <h3>{total}</h3>
            </div>
          </div>
      </div>
    );
}
export default ModalShop;