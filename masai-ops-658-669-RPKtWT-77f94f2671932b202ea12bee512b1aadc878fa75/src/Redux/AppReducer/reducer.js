import * as types from "./actionType";

const initialState = {
userData: {},
isLoading: false,
isAuth: false,
meetupsData: [],
errorText:null
};

const reducer = (state = initialState,action) => {

  const {type,payload} = action;

  switch (type) {
    case types.METTUPS_REQUEST:
      return {
        ...state,
        isLoading:true,

      }

    case types.METTUPS_SUCCESS:
      console.log(payload)
      return{
        ...state,
        isLoading:false,
        meetupsData:payload
      }

    case types.METTUPS_FAILURE:
      return {
        ...state,
        isLoading:false,
        errorText:payload
      }

      case types.USER_REQUEST:{
        return {
          ...state,
       
        }
      }

      case types.USER_SUCCESS:
        return {
          ...state,
         
          userData:payload
        }


        case types.USER_FAILURE:
          return {
            ...state,
           
            errorText:payload
          }

        case types.LOGIN_SUCCESS:
          return {
            ...state,
            isAuth:true
          }

        case types.LOGIN_FAILURE:
            return {
              ...state,
              isAuth:false
            }


        case types.REGISTER_REQUEST:
          return {
            ...state
          }

        case types.REGISTER_SUCCESS:
          return {
            ...state,
            userData:payload
          }

          case types.REGISTER_FAILURE:
            return {
              ...state
            }
      
      
  
    default:
      return state;
  }
 
};

export { reducer };