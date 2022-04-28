import React,{createContext,useReducer,useState} from 'react';

interface initialValue {
    loginData:{},
    dispatch:string | React.Dispatch<React.SetStateAction<string>>[],
    isLogged:Boolean,
    setIsLogged:string | React.Dispatch<React.SetStateAction<string>>[],
}

interface actionType{
    type:string,
    payload:{
        data:{}
    }
}
let initValue:initialValue | any;
export const LoginContext = createContext(initValue);

function loginReducer(user:{},action:actionType){
    switch(action.type){
        case 'ADD_USER':
            return newUser(action.payload.data)
        default : return user;
    }
}
function newUser(data:{}){
    return data;
}

export const LoginProvider = (props:any,{initialContacts}:{initialContacts:{}}) => {
    const [loginData,dispatch] = useReducer(loginReducer,{email:'',password:""});
    const [isLogged,setIsLogged] = useState<boolean>(false);
    return (
        <LoginContext.Provider value={[loginData,dispatch,isLogged,setIsLogged]}>
            {props.children}
        </LoginContext.Provider>
  )
}
