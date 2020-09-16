import React,{useState} from 'react'

function SearchBar({onFormSubmit}) {
    const [searchText,setSearchText]=useState('')
    
    const onSubmit =(event)=>{
        event.preventDefault()
        onFormSubmit(searchText)
    }
    return (
        <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={onSubmit}>
           <div className='field'>
             <label>Video Search</label>
            <input
            type='text'
            value={searchText}
            onChange={(event)=>setSearchText(event.target.value)}
            />
             </div>
        </form>
     </div>
    )
}

export default SearchBar
