import React,{useReducer} from 'react';
import ShopContext from './ShopContext';
import ShopReducer from './ShopReducer';
const ShopState=(props)=>{
    const initialState=[]
    const [state, dispatch] = useReducer(ShopReducer, initialState)

    const addPlates=plate=>{
      const obj={plate:plate,type:"add"}
        dispatch(obj)
    }
    const removePlates=()=>{

    }
    const resetPlates=()=>{

    }

    const getAllPlate=()=>{
        return state;
    }

    return(
      <ShopContext.Provider value={{
          shop:state,
          addPlates,
          removePlates,
          resetPlates,
          getAllPlate
      }}>
        {props.children}
      </ShopContext.Provider>
    );
}
export default ShopState;