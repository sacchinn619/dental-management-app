 const reviewsInitialState=[]
 const reviewsReducer=(state=reviewsInitialState,action)=>{
 switch(action.type){
     case 'SET_REVIEWS':{
         return state.concat(action.payload)
     }
     default:{
         return state
     }
 }
 }
  
 export default reviewsReducer
