import React from 'react'
import '../styles/User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'


export default function User({user}) {
  return (
    <div className='User'>
        <div className='details top'>
            <div className='details-child'>
                <FontAwesomeIcon icon={faUser} />
                <b>Bio</b>
                <div id='bio-description'>{user.bio || 'not available'}</div>
            </div>
            <div id='profile' className='details-child'>
                <a href={user.html_url} target="_blank"><img id='profile-image' src={user.avatar_url}/></a>
                <p><b>@{user.login || 'ACCOUNT NOT FOUND'}</b></p>
            </div>
            <div className='details-child'>
                <FontAwesomeIcon icon={faLocationDot} />
                <b>Location</b>
                {user.location || 'not available'}
            </div>
        </div>
        <div className='details bottom'>
            <div className='details-child'><FontAwesomeIcon icon={faFolder} /><b>Repos</b>{user.public_repos || 'not available'}</div>
            <div className='details-child'><FontAwesomeIcon icon={faUsers} /><b>Followers</b>{user.followers || 'not available'}</div>
            <div className='details-child'><FontAwesomeIcon icon={faUsers} /><b>Following</b>{user.following || 'not available'}</div>
        </div>
    </div>
  )
}
