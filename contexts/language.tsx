import React,{createContext,useState} from 'react';
let initValue!:(string | React.Dispatch<React.SetStateAction<string>>)[] ;
export const LangContext = createContext(initValue)

export const LanguageProvider = (props:any) => {
  const [lang,setLang] = useState('en');
  
  return (
    <LangContext.Provider value={[lang,setLang]}>
      {props.children}
    </LangContext.Provider>
  )
}

