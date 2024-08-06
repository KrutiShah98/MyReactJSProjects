import {
    arrayUnion,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
  } from "firebase/firestore";
  import React, { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { auth, db } from "../Firebase";
  import { Box, Typography } from "@mui/material";
  
  export default function ViewAllPost() {
    const [post, setPost] = useState([]);
    const [postUsers, setPostUsers] = useState(null);
  
    const [newComment, setNewComment] = useState("");
  
    const navigate = useNavigate();
    useEffect(() => {
      fetchUsers();
      fetchPostFun();
    }, []);
  
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "Users"));
      const users = {};
      // key : value
      // 784asd : Anjali
      querySnapshot.forEach((doc) => {
        const record = doc.data();
        console.log("======> Record ", record);
        // users[doc.id] = record.name;
        console.log("---> doc id : ", doc.id);
        users[doc.id] = record.name;
      });
      console.log("users : ", users);
      setPostUsers(users);
    };
  
    const fetchPostFun = async () => {
      const querySnapshot = await getDocs(collection(db, "Post"));
      const fetchPost = [];
  
      querySnapshot.forEach((doc) => {
        const record = doc.data();
        //console.log("record ",record);
        fetchPost.push({
          id: doc.id,
          title: record.title,
          description: record.description,
          image: record.image,
          userid: record.userid,
          likes: record.likes || [],
          comments: record.comments || [],
          createdAt: timeAgo(record.timestamp),
        });
      });
      setPost(fetchPost);
    };
  
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
    };
  
    const handleDelete = async (docid) => {
      console.log("---> delete ", docid);
      await deleteDoc(doc(db, "Post", docid));
      setPost(post.filter((item) => item.id !== docid));
  
      // navigate("/dashboard",{replace:true})
    };
  
    const handleLike = async (postid) => {
      const specific_post = await getDoc(doc(db, "Post", postid));
  
      const postDataLikeList = (await specific_post.data().likes) || [];
  
      console.log("---> postdata ", postDataLikeList);
  
      const user = auth.currentUser;
  
      if (postDataLikeList.includes(user.uid)) return;
  
      console.log("----> adding 1 like");
  
      await updateDoc(doc(db, "Post", postid), {
        likes: [...postDataLikeList, user.uid],
      });
  
      const updatePost = await post.map((post) =>
        post.id === postid ? { ...post, likes: [...post.likes, user.uid] } : post
      );
  
      setPost(updatePost);
    };
    const handleComment = async (postid) => {
      const user = auth.currentUser;
      console.log("---> postid ", postid);
      const newCommentObj = {
        text: newComment,
        userid: user.uid,
        timestamp: Date.now(),
      };
      await updateDoc(doc(db, "Post", postid), {
        comments: arrayUnion(newCommentObj),
      });
      setNewComment("");
      const updateCommentPost = await post.map((post) =>
        post.id === postid
          ? { ...post, comments: [...post.comments, newCommentObj] }
          : post
      );
  
      setPost(updateCommentPost);
  
      console.log("---->>> NEWPOST : ", post);
    };
    return (
      <div style={{ position: "relative" }}>
        {post.map((singlePost, index) => {
          return (
            <div class="post-area" key={index}>
              <div class="post-main">
                <div class="post-header">
                  <div class="post-left-header">
                    <div class="post-image">
                      <img
                        src="https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                        alt=""
                      />
                    </div>
                    <p class="post-username">{postUsers[singlePost.userid]}</p>
                    <i class="fa-solid fa-certificate"></i>
                    <span class="one-day"> . 1h </span>
                  </div>
                  <i class="fa-solid fa-grip-lines"></i>
                </div>
                <div class="post-main-image">
                  <img
                    src={singlePost.image}
                    alt=""
                    // style={{  }}
                  />
                </div>
                <div class="post-fotter">
                  <div class="post-fotter-left">
                    <i
                      class="fa-regular fa-heart"
                      onClick={() => handleLike(singlePost.id)}
                    ></i>
  
                    <button
                      type="button"
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                      }}
                      // class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      <i class="fa-regular fa-message"></i>
                    </button>
  
                    <div
                      class="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5
                              class="modal-title"
                              id="staticBackdropLabel"
                              style={{ color: "black" }}
                            >
                              Comments
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <input
                              type="text"
                              placeholder="Enter Comment"
                              style={{ width: "100%" }}
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                            />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              onClick={() => handleComment(singlePost.id)}
                            >
                              send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <i class="fa-regular fa-paper-plane"></i>
                  </div>
                  <i class="fa-regular fa-bookmark"></i>
                </div>
                <div class="post-description">
                  <p class="post-title">Likes {singlePost.likes?.length || 0}</p>
                  <p class="post-title">
                    <span>{singlePost.title} </span>
                    <br />
                    {singlePost.description}
                    {/* <br /> more */}
                  </p>
                  {/* <p class="comments"> view all comments</p> */}
                  {singlePost.comments?.length > 0 ? (
                    singlePost.comments.map((comment, index) => {
                      return (
                        <div key={index}>
                          <p class="post-title">
                            {postUsers[comment.userid]} :- {comment.text} AT :{" "}
                            {timeAgo(comment.timestamp)}
                          </p>
                        </div>
                      );
                    })
                  ) : (
                    <p className="post-title">No Comments Found</p>
                  )}
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
  
  //   <div style={{ color: "white" }} key={index}>
  //     <h4 style={{ color: "white" }}>
  //       {/* {singlePost.title} {singlePost.createdAt} */}
  //     </h4>
  //     {/* <h3>{singlePost.userid}</h3> */}
  //     {/* <h4>posted by : {postUsers[singlePost.userid]}</h4> */}
  //     {/* <p>{singlePost.description}</p> */}
  //     <img src={singlePost.image} height={50} width={50} />
  //     {/* <button onClick={() => handleDelete(singlePost.id)}>Delete</button> */}
  //     <br></br>
  //     <h3>Likes : {singlePost.likes?.length || 0}</h3>
  //     <button onClick={() => handleLike(singlePost.id)}>Like</button>
  
  //     <br></br>
  //     <br></br>
  
  //     <h3>Comment Sections : </h3>
  
  //     {singlePost.comments?.length > 0 ? (
  //       singlePost.comments.map((comment, index) => {
  //         return (
  //           <div key={index}>
  //             <p>
  //               Posted by : {postUsers[comment.userid]} :- {comment.text}{" "}
  //               AT : {timeAgo(comment.timestamp)}
  //             </p>
  //           </div>
  //         );
  //       })
  //     ) : (
  //       <p>No Comments Found</p>
  //     )}
  
  //     <input
  //       type="text"
  //       value={newComment}
  //       onChange={(e) => setNewComment(e.target.value)}
  //       placeholder="Type your comments"
  //     />
  //     <button onClick={() => handleComment(singlePost.id)}>
  //       Add Comment
  //     </button>
  //     <hr></hr>
  //     <hr></hr>
  //   </div>
  
  {
    /* <div> */
  }
  {
    /* {post.map((singlePost, index) => {
          return (
            <div key={index}>
              <Box class="Main-container" sx={{ color: "white" }}>
                <Box class="wrapper">
                  <Box class="banner-image">
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="ice.jpg"
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                      <Typography sx={{ color: "white", fontWeight: "900" }}>
                        {postUsers[singlePost.userid]}
                      </Typography>
                    </Box>
                    <img
                      src={singlePost.image}
                      style={{
                        height: "300px",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    />{" "}
                  </Box>
                  <h1 className="Title"> {singlePost.title}</h1>
                  <p className="description">{singlePost.description}</p>
                  <p className="description">
                    Likes {singlePost.likes?.length || 0}
                  </p>
                  <p className="description">
                    {singlePost.comments?.length > 0 ? (
                      singlePost.comments.map((comment, index) => {
                        return (
                          <div key={index}>
                            <p>
                              Commented by : {postUsers[comment.userid]} :-{" "}
                              {comment.text}
                              <span style={{ fontSize: "10px" }}>
                                {" "}
                                at : {timeAgo(comment.timestamp)}
                              </span>
                            </p>
                          </div>
                        );
                      })
                    ) : (
                      <p>No Comments Found</p>
                    )}
                  </p>
                </Box>
                <Box class="button-wrapper">
                  <button
                    class="btn outline"
                    onClick={() => handleLike(singlePost.id)}
                  >
                    Like
                  </button>
                  <input
                    type="text"
                    placeholder="Enter Comments"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button
                    className="btn outline"
                    onClick={() => handleComment(singlePost.id)}
                  >
                    Add Comment
                  </button>
                </Box>
              </Box>
              {/* <hr /> */
  }
  {
    /* </div>
          // );
        // })} */
  }
  // </div>
  //); */}