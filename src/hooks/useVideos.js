import {useState,useEffect} from 'react'
import axios from '../api/youtube'

function useVideos(defaultSearchTerm) {
    const [videos,setVideos]=useState([])//this is the output of the custom hook
    useEffect(()=>{
        search(defaultSearchTerm)//this is the input of the custom hook
     },[defaultSearchTerm])
     const search=async (searchText) => { //this is the output for the custom hooks
        const response =await axios.get('/search',{
         params:{
             q:searchText
           }
        })
        setVideos(response.data.items)
         }
    return [videos,search]
}

export default useVideos
