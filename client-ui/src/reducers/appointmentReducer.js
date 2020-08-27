
const appointmentInitialState=[]
const appointmentReducer=(state=appointmentInitialState,action)=>{
switch(action.type){
    case'SET_APPOINTMENT':{
        return state.concat(action.payload)
  }
  case 'EDIT_APPOINTMENT':{
    return state.map(ele=>{
      if(ele._id==action.payload.id){
          return Object.assign({},ele,action.payload.data)
          
      }
      else{
          return Object.assign({},ele)
      }
  })
  }
  

  default:{
    return state
}
}
}
export default appointmentReducer