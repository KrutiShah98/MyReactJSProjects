import { arrayUnion, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';

export default function ViewPost() {
    const [post, setPost] = useState([]);
    const[postusers, setPostUsers] = useState();
    const[newComment, setNewComment] = useState();

    useEffect(() => {
            fetchPostFun();
            fetchUsers();
       
    }, [])

    const fetchUsers = async () => {
        const QuerySnapshot=await getDocs(collection)
        const users = {};
        //key : value
        //784asddsfvd:ANjali
        QuerySnapshot.forEach((doc) => {
            const record = doc.data();
            console.log("--->doc id:", doc.id);
            users[doc.id] = record.name;
        })
        console.log("users : ", users);
        setPostUsers(users);
    }

    const fetchPostFun = async () => {
        const QuerySnapshot = await getDocs(collection(db, "Post"))
        const fetchPost = []

        QuerySnapshot.forEach((doc) => {
            const record = doc.data()
            console.log("record", record);
            fetchPost.push({
                'id': doc.id,
                'title': record.title,
                'description': record.description,
                'image': record.image,
                'userid': record.userid,
                'likes': record.likes || [],
                'createdAt': timeAgo(record.timestamp)
            })
        })
        setPost(fetchPost)
    }
    const timeAgo = (timestamp) => {
        const now = Date.now();
        const seconds = Math.floor((now - timestamp) / 1000);

        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return `${interval} years ago`;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return `${interval} months ago`;
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return `${interval} days ago`;
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return `${interval} hours ago`;
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return `${interval} minutes ago`;
        }
        return `${Math.floor(seconds)} seconds ago`;
    }

    const handledelete = async (docid) => {
        console.log("---> delete ", docid);
        await deleteDoc(doc(db, "Post", docid));
        setPost(post.filter(item => item.id !== docid))

        // navigate("/dashboard",{replace:true})
    }
    const handleLike = async (postid) => {
        const specific_post = await getDoc(doc(db, "Post", postid));

        const postDataLikeList = await specific_post.data().likes || [];

        console.log("====>postdata", postDataLikeList);

        const user = auth.currentUser;
        if (postDataLikeList.includes(user.uid)) return;

        console.log("-->adding 1 Like");

        await updateDoc(doc(db, "Post", postid), {
            "likes": [...postDataLikeList, user.uid]
        })

        const updatePost = await post.map((post) => post.id === postid ? { ...post, 'likes': [...post.likes, user.uid] } : post)

        setPost(updatePost);
    }
    const handleComment=async(postid)=>{
        const user=auth.currentUser;
        console.log("----->postid",postid);

        const newCommentObj={
            text : newComment,
            userid : user.uid,
            timestamp : Date.now()
        }

        await updateDoc(doc(db,"Post",postid),{
            "comments": arrayUnion(newCommentObj)
        })

        setNewComment("")
        const updateCommentPost=await post.map((post)=>post.id===postid?{...post,"comments":[...post,comments,newCommentObj]}:post)

        setPost(updateCommentPost)
         console.log("--->>NEWPOST:" , post);
    }
    return (
        <div>
            <h1>View All Post</h1>
            {post.map((singlePost,index) => {
                return <div key={index}>
                    <h4>{singlePost.title}{singlePost.createdAt}</h4>
                    <h3>{singlePost.userid}</h3>
                    <h4>posted by:{postusers[singlePost.userid]}</h4>
                    <p>{singlePost.description}</p>
                    <img src={singlePost.image} height={50} width={50} alt="" />
                    <button onClick={() => handledelete(singlePost.id)}>Delete</button>
                    <br /> <br />
                    <h3>Likes: {singlePost.likes?.length || 0}</h3>
                    <br /> <br />
                    <button onClick={() => handleLike(singlePost.id)}>like</button>

                    <br /><br />
                    <br /><br />

                    <h3>Comment Section</h3>

                    {singlePost.comments?.length>0
                    ?
                singlePost.comments.map((comment,index) =>{
                    return <div key={index}>
                        <p>Posted by: {postusers[comment.userid]} :- {comment.text} at : {timeAgo(comment.timestamp)}</p>
                    </div>
                })
                : <p>No Comments Found</p>
                }
                    <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder='Type comments' />

                    <button onClick={() => handleComment(singlePost.id)}>Add Comment</button>
                    <hr />
                    <hr />
                </div>
            })}
        </div>
    )
}
