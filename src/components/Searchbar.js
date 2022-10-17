import React, {useEffect, useRef} from 'react'
import '../styles/Searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";


export default function Searchbar({user, setUser}) {

  const searchInput = useRef();
  
  const getLogin = () => {
     setUser(searchInput.current.value);
  }

  // Github API call with Axios Get method
  useEffect(()=> {
    const getUser = async () => {
      try {
        await axios.get(`https://api.github.com/users/${user}`)
        .then(response => setUser(response.data))
      } catch(err) {
        console.log(err)
      }
    }

    getUser();
  }, [user])

  return (
    <div className='Searchbar'>
      <input ref={searchInput} type="search" id="search" placeholder='Search Github Username' autoComplete='off'></input>
      <button onClick={getLogin}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>
  )
}
