import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css'
const Join = ()=>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return(
        <div className="join-main-container">
            <h2>Join</h2>
            <input placeholder="Name" type="text" onChange={(event)=> setName(event.target.value)} />
            <input placeholder="Room" type="text" onChange={(event)=> setRoom(event.target.value)} />
            <Link to={`/chat?name=${name}&room=${room}`} >
            <button>Join</button>
            </Link>
        </div>
    )
}

export default Join