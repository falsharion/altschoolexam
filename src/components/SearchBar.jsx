import { useState } from "react"
import axios from "axios"
import Results from "./Results"

const SearchBar = () => {
const[searchInput, setSearchInput] = useState ('')
const [repos, setRepos] = useState([])
const handleChange = (e) => {
 setSearchInput(e.target.value)
}
const hanleClick = async () => {
    console.log(searchInput)
    try {    
        const result = await axios (`https://api.github.com/users/${searchInput}/repos`)
    setRepos(result)

    }catch(err){
        console.log(err)
    }

}

    return (
    <>
    <div style={{ padding: '20px'}}>
        <input type="text" placeholder="search" value= {searchInput} onChange={handleChange}/>
        <button onClick={hanleClick}>search</button>
    </div>
    <Results repos={repos} />
</>
    )
}
 export default SearchBar