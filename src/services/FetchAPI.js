import axios from "axios";

class FetchAPI{
    static key='e3a9e5625fmsh11744a88da2bbe2p103ce7jsn37d94c74ffc7'
    static fetchFromLocaleStorage(key){
        return JSON.parse(localStorage.getItem(key))
    }
    static setToLocaleStorage(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    }
    static async fetchTrending(type,page){
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/trending/${type}/week`,
            params: {language: 'en-US',page:page},
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzFhZmIxOWEwOTg4YjA5YzEzMDgwODQ4NTQ0NmRjOCIsInN1YiI6IjY0YTRjZjU1MTU4Yzg1MDBlMjRhNTAyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.59822Ojk6gXO1bwV6I5itqzNma86Uen5oCy8xAVt9bQ'
            }
        };
        try {
            const titles=await axios(options)
            return titles
        }catch (e){
            console.log(e)
        }
    }
    static  async fetchUpcoming(type,page){
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/${type}/${type.toLowerCase()==='tv'?'on_the_air':'upcoming'}`,
            params: {page:page},
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzFhZmIxOWEwOTg4YjA5YzEzMDgwODQ4NTQ0NmRjOCIsInN1YiI6IjY0YTRjZjU1MTU4Yzg1MDBlMjRhNTAyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.59822Ojk6gXO1bwV6I5itqzNma86Uen5oCy8xAVt9bQ'
            }
        };
        try {
            const titles=await axios(options)
            return titles
        }catch (e){
            console.log(e)
        }
    }
    static async fetchTitles(type,page){
        const options = {
            method: 'GET',
            url: `https://api.themoviedb.org/${type}`,
            params: {page:page},
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzFhZmIxOWEwOTg4YjA5YzEzMDgwODQ4NTQ0NmRjOCIsInN1YiI6IjY0YTRjZjU1MTU4Yzg1MDBlMjRhNTAyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.59822Ojk6gXO1bwV6I5itqzNma86Uen5oCy8xAVt9bQ'
            }
        };
        try {
            const titles=await axios(options)
            return titles
        }catch (e){
            console.log(e)
        }
    }
    static async addToFavorite(id){
        const fav=FetchAPI.fetchFromLocaleStorage('favorite')?FetchAPI.fetchFromLocaleStorage('favorite'):JSON.stringify([])
        const favArr=[...JSON.parse(fav),id ]
        FetchAPI.setToLocaleStorage('favorite',JSON.stringify(favArr))
    }
    static  async removeFromFavorite(id){
        const fav= FetchAPI.fetchFromLocaleStorage('favorite')
        const favArr=JSON.parse(fav).filter(e=>e!==id)
        FetchAPI.setToLocaleStorage('favorite',JSON.stringify(favArr))
    }
}

export {FetchAPI}