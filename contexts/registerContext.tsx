import React,{createContext,useReducer} from 'react';

let initValue!:(string | React.Dispatch<React.SetStateAction<string>>)[] | any;
export const RegisterContext = createContext(initValue);
interface actionType{
    type:string,
    payload:{
        data:{}
    }
}

function registerReducer(user:{},action:actionType){
    switch(action.type){
        case 'ADD_USER':
            return newUser(action.payload.data)
        default : return user;
    }
}
function newUser(data:any){
    return data;
}

export const RegisterProvider = (props:any,{initialContacts}:{initialContacts:{}}) => {
    const [registerData,dispatch] = useReducer(registerReducer,{email:'',password:""})
    return (
        <RegisterContext.Provider value={[registerData,dispatch]}>
            {props.children}
        </RegisterContext.Provider>

   
  )
}
