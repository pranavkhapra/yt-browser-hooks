import React,{useState,useEffect} from 'react'
import axios from './api/youtube'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'
function App() {
    const [videos,setVideos]=useState([])
    const [selectedVideo,setSelectedVideo]=useState(null)
    useEffect(()=>{
       onSearchSubmit('avengers endgame') 
    },[])
        const onSearchSubmit=async (searchText) => {
       const response =await axios.get('/search',{
        params:{
            q:searchText
          }
        
       })
       setVideos(response.data.items)
       setSelectedVideo(response.data.items[0])
        }

    return (
        <div>
              <div className='ui container'>
        <SearchBar onFormSubmit={onSearchSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
        <VideoDetail video={selectedVideo}/>
        </div>
        <div className='five wide column'>
        <VideoList
        videos={videos} onVideoSelect={selectedVideo}/>
        </div>
        </div>
        </div>
      </div>
        
        </div>
    )
}

export default App
