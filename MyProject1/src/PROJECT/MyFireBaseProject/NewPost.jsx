import React, { useState } from 'react'
import { auth, db, storage } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

export default function NewPost() {
    const [title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [imagelink, setImagelink] = useState();

    const handlleSubmit = async () => {
        const user = auth.currentUser;
        const storageRef = await ref(storage, `post/${user.uid}/${Date.now()}`)
        await uploadBytes(storageRef, imagelink);
        const downloadUrl = await getDownloadURL(storageRef)

        await setDoc(doc(db, "Post", `${Date.now()}`), {
            'title': title,
            'description': Description,
            'image': downloadUrl,
            'userid': user.uid
        })
    }



    return (
        <div>
            <h1>Add New Post</h1>
            <input type="text" placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} />
            <br /><br />
            <textarea placeholder='Enter description' onChange={(e) => setDescription(e.target.value)}></textarea>
            <br /><br />
            <input type="file" onChange={(e) => setImagelink(e.target.value)} />
            <br /><br />
            <button onClick={handlleSubmit}>Add Post</button>

        </div>
    )
}
