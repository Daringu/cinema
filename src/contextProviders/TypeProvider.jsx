import React, {createContext, memo, useEffect, useState} from 'react';

export const TypeContext=createContext()
const TypeProvider =memo(function TypeProvider ({children})  {
    const [page,setPage]=useState(1)
    const [type,setType]=useState('movie')
    useEffect(()=>setPage(1),[type])
    return (
        <TypeContext.Provider value={[type, setType,page,setPage]}>{children}</TypeContext.Provider>
    );
})

export default TypeProvider;