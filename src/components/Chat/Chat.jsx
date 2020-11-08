/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import qs from 'query-string'
import './Chat.css'

let socket;
const Chat = ()=>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'http://localhost:5000'
    useEffect(() => {
        const data = qs.parse(location.search);
        socket = io(ENDPOINT);
        console.log(socket);
    }, [])
    return (
        <div>Chat Works!</div>
    )
}

export default Chat;