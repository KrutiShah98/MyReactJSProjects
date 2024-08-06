import { onAuthStateChanged } from 'firebase/auth';
import { serverTimestamp } from 'firebase/database';
import { Timestamp, addDoc, collection, doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { auth, db } from '../../firebaseConfig';

export default function ChatScreen() {
    const { uid } = useParams();

    const [currentUsername, setCurrentUsername] = useState();
    const [cid, setCid] = useState();
    const [chatperson, setChatperson] = useState();
    const [chatpersonid, setChatpersonid] = useState();

    const [newMessageinput, setNewMessageInput] = useState();

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchCurrentUser(user);
            }
        })
    }, []);

    const fetchCurrentUser = async (user) => {
        const cuid = await getDoc(doc(db, "Student",user.uid))
        setCid(user.uid);
        setCurrentUsername(cuid.data().name);

        const chatpersonData = await getDoc(doc(db, "Student", uid))
        setChatpersonid(uid);
        setChatperson(chatpersonData.data().name);
    }

    const HandlesendMessage = async () => {
        if (!newMessageinput.trim()) return;

        const newMessage = {
            senderId: cid,
            receiverId: chatpersonid,
            content: newMessageinput,
            timestamp: serverTimestamp()
        }

        await addDoc(collection(db, "Chats"), newMessage);

        setNewMessageInput("");
    }

    return (
        <div>
            <h3>Welcome{currentUsername}</h3>
            <h1>Lets start chat with:{chatperson}</h1>

            <input type="text"
                value={newMessageinput}
                onChange={(e) => setNewMessageInput(e.target.value)}
                placeholder='Type your message here' />
            <button onClick={HandlesendMessage}>Send</button>

        </div>
    )
}
