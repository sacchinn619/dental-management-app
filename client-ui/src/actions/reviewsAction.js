import axios from '../config/axios'
export const setReviews=(data)=>{
return {type:'SET_REVIEWS',payload: data}
}
export const startReviews=(formData)=>{
  return (dispatch)=>{
  axios.post('/api/reviews',formData)
  .then((response)=>{
      const data=response.data
      dispatch(setReviews(data))
  })
  .catch((err)=>{
      console.log(err)
  })
}
}
export const startGetReviews=()=>{
  return(dispatch)=>{
    axios.get('/api/reviews')
    .then((response)=>{
      const data=response.data
      dispatch(setReviews(data))
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
