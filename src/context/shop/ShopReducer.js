const ShopReducer=(state,obj)=>{
  
    switch(obj.type){
        case "add":
            state.push(obj.plate);
            return state;
        case "getAll":
            return obj.plates;
        default:
            console.log("state is defualt ",state)
    }
 
    
}
export default ShopReducer;