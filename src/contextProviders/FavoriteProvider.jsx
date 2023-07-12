import React, {createContext, useEffect, useState,memo} from 'react';
import {FetchAPI} from "../services/FetchAPI.js";

export const FavoriteContext=createContext()

const FavoriteProvider =memo(function FavoriteProvider({children}){
    const [favorite,setFavorite]=useState(FetchAPI.fetchFromLocaleStorage('favorite')?FetchAPI.fetchFromLocaleStorage('favorite'):[])
    const [fav,setFav]=useState({id:null})
    useEffect(()=>{
        if (!fav.id)return;
        FetchAPI.addToFavorite(fav.id)
        setFavorite(FetchAPI.fetchFromLocaleStorage('favorite'))
    },[fav])
    return (
        <FavoriteContext.Provider value={[favorite,setFav,setFavorite]}>
            {children}
        </FavoriteContext.Provider>
    );
})

export default FavoriteProvider;