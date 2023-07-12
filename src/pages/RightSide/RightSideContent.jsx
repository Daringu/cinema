
import styles from './RightSideContent.module.css'

import TopContent from "../../components/TopContent/TopContent.jsx";
import {useParams} from "react-router-dom";
import {memo, useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import {FetchAPI} from "../../services/FetchAPI.js";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import {TypeContext} from "../../contextProviders/TypeProvider.jsx";
import {FavoriteContext} from "../../contextProviders/FavoriteProvider.jsx";



const RightSideContent =memo(function RightSideContent()  {
    const params=useParams()
    const [titles,setTitels]=useState([])
    const [type,setType,page,setPage]=useContext(TypeContext)
    const [favorite,setFav]=useContext(FavoriteContext)
    const [totalPages,setTotalPages]=useState(2)
    const [active,setActive]=useState(0)
    const [backGround,setBackground]=useState(false)
    const [isLoading,setLoading]=useState(false)
    const lastElement=useRef(null)
    const observer=useRef()


    const map=useMemo(()=>{
        return {
            'trending':FetchAPI.fetchTrending,
            'upcoming':FetchAPI.fetchUpcoming,
            'home':FetchAPI.fetchTrending,
            'favorite':FetchAPI.fetchUpcoming,
            'community':FetchAPI.fetchUpcoming,
            'social':FetchAPI.fetchTrending,
            'settings':FetchAPI.fetchTrending,
            'logout':FetchAPI.fetchUpcoming
        }

    },[])
    const onCardClick=useCallback((i)=>{
        return ()=>{
            setActive(i)
            setBackground(titles[i].backdrop_path)
        }
    },[titles])
    useEffect(()=>{
        setLoading(true)
        const fetchTit=async ()=>{
            try {
                const titlesFetched=await  map[params.type](type,page)
                setTitels([...titles,...titlesFetched.data.results])
                setTotalPages(titlesFetched.data.total_pages)
            }catch (e){
                console.log(e)
            }finally {
                setLoading(false)
            }
        }
        fetchTit()
    },[page])

    useEffect(()=>{
        setLoading(true)
        const fetchTit=async ()=>{
            try {
                const titlesFetched=await  map[params.type](type,page)
                setTitels([...titlesFetched.data.results])
                setPage(1)
                setTotalPages(titlesFetched.data.total_pages)
            }catch (e){
                console.log(e)
            }finally {
                setLoading(false)
            }
        }
        fetchTit()
    },[type,params])

    useEffect(()=>{
        if (isLoading)return;
        if (observer.current)observer.current.disconnect()
        const callback=function (entries) {
            if (entries[0].isIntersecting&&page<totalPages){
                setPage(page+1)
            }
        }
        observer.current=new IntersectionObserver(callback)
        observer.current.observe(lastElement.current)
    },[isLoading])
    return (
        <>
          <TopContent backGround={backGround}/>
            <div className={styles.cont}>
                {titles.map((e,i)=> {
                   return <MovieCard isActive={!!favorite.includes(e.id)} hasTextBar={true} isVertical={true}
                               onCardClickHandle={onCardClick(i)} movie={e} key={e.id*Math.random()}/>
                })}
                {isLoading&&<h1 style={{position:"absolute",color:'purple'}}>Loading....</h1>}
                <div ref={lastElement} style={{width:'0',height:'0'}}></div>
            </div>
        </>

    );
})

export default RightSideContent;