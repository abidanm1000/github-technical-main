import React, {useState} from 'react'
import '../styles/Card.css';
import Searchbar from './Searchbar';
import User from './User';

export default function Card() {
  const [user, setUser] = useState('octocat');
  console.log(user)
  return (
    <div className='Card'>
      <Searchbar setUser={setUser} user={user}/>
      <User user={user}/>
    </div>
  )
}
