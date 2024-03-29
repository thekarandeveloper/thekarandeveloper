import React,{useState} from 'react';

import ModalContext  from "./modalContext";

const ModalContextProvider = ({children})=>{
    const [user,setuser] =useState(null)
    return(
        <ModalContext.Provider value={{user,setuser}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider