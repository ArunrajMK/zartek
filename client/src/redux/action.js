
import axios from "axios"
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";





const getDataRequest = ()=>{
    return({
        type:GET_DATA_REQUEST
    })
}


const getDataSuccess = (data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}


const getDataFailure = ()=>{
    return({
        type:GET_DATA_FAILURE
    })
}




export const getData = ()=>(dispatch)=>{
    dispatch(getDataRequest())
return axios({
    method:"GET",
    url:"https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"
})
.then((res)=>{
    dispatch(getDataSuccess(res.data))
})

.catch((error)=>{
    dispatch(getDataFailure())
})

}


