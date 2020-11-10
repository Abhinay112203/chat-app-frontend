/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import io from "socket.io-client";
import qs from 'query-string'
import './Chat.css'

let socket;
const Chat = ({location})=>{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000/'
    useEffect(() => {
        const {name,room} = qs.parse(location.search);
        setRoom(room);
        setName(name);
        socket = io(ENDPOINT);
        socket.emit('join',{room,name},(response)=>{
            console.log(response)
            if(!response.error){
                window.alert(response.message)
                console.log(response.message)
            } else {
                console.log(response.error)
            }
        })
    },[ENDPOINT,location.search]);
    return (
        <div>Chat Works!</div>
    )
}

export default Chat;