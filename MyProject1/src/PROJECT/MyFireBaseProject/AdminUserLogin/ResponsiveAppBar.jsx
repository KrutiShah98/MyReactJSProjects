import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './AllStyle.css';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, storage, db } from '../../../firebaseConfig';
import { collection, deleteDoc, doc, getDoc, updateDoc, getDocs, setDoc, arrayUnion } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Card, CardActions, CardContent, CardMedia, CircularProgress, Paper, TextField, Divider } from '@mui/material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [profileFile, setProfileFile] = useState(null);
    const [uploadingStatus, setUploadingStatus] = useState(false);
    const [profileLogin, setProfileLogin] = useState(false);
    const [addPost, setAddPost] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [post, setPost] = useState([]);
    const [postUsers, setPostUsers] = useState(null);
    const [mypost, setMypost] = useState(false);
    const [viewallPost, setViewAllpost] = useState(false);
    const [newComment, setNewComment] = useState();


    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurrentUserDetails = async (user) => {
            if (user) {
                const userData = await getDoc(doc(db, "Student", user.uid));
                console.log(`Welcome to the dashboard, ${userData.data().name}`);
                setUserDetails(userData.data());
            }
        };

        onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchCurrentUserDetails(user);
            }
        });
    }, []);

    useEffect(() => {
        if (mypost) {
            fetchUsers();
            fetchPostFun();
        }
    }, [mypost]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploadingStatus(true);
        const user = auth.currentUser;
        if (user) {
            const storageRef = ref(storage, `profilepicture/${user.uid}`);
            await uploadBytes(storageRef, profileFile);
            const downloadUrl = await getDownloadURL(storageRef);
            console.log("DownloadUrl", downloadUrl);

            await updateDoc(doc(db, "Student", user.uid), {
                Profilepic: downloadUrl
            });

            const updatedUserData = await getDoc(doc(db, "Student", user.uid));
            setUserDetails(updatedUserData.data());
        }
        setUploadingStatus(false);
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login", { replace: true });
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleAddPost = () => {
        setAddPost(!addPost);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        setProfileLogin(!profileLogin);
    };

    const handleMyPost = () => {
        setMypost(!mypost);
    };

    const handleallPost = () => {
        setViewAllpost(!viewallPost);
    };

    const handlePost = async (e) => {
        e.preventDefault();
        const user = auth.currentUser;
        console.log(user);
        const storageRef = await ref(storage, `Post/${user.uid}/${Date.now()}`);
        await uploadBytes(storageRef, image);
        const downloadUrl = await getDownloadURL(storageRef);


        await setDoc(doc(db, "Post", `${Date.now()}`), {
            title: title,
            description: content,
            image: downloadUrl,
            userid: user.uid
        });
        navigate("/viewpost")
        fetchPostFun();
    };

    const fetchUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "Users"));
        const users = {};
        querySnapshot.forEach((doc) => {
            const record = doc.data();
            // console.log("======> Record ",record);
            // console.log("---> doc id : ",doc.id);

            users[doc.id] = record.name;

        });
        console.log("users : ", users);

        setPostUsers(users);
    };

    const fetchPostFun = async () => {
        const current_user = auth.currentUser;
        const querySnapshot = await getDocs(collection(db, "Post"));
        const fetchPost = [];

        querySnapshot.forEach((doc) => {
            const record = doc.data();
            console.log(record);
            if (record?.userid === current_user.uid) {
                fetchPost.push({
                    // id: doc.id,
                    // title: record.title,
                    // description: record.description,
                    // image: record.image,
                    // userid: record.userid
                    id: doc.id,
                    title: record.title,
                    description: record.description,
                    image: record.image,
                    userid: record.userid,
                    likes: record.likes || [],
                    comments: record.comments || [],
                    createdAt: timeAgo(record.timestamp),
                });
            }
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
    }
    const handleDelete = async (docid) => {
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
    const handleComment = async (postid) => {
        const user = auth.currentUser;
        console.log("----->postid", postid);

        const newCommentObj = {
            text: newComment,
            userid: user.uid,
            timestamp: Date.now()
        }

        await updateDoc(doc(db, "Post", postid), {
            "comments": arrayUnion(newCommentObj)
        })

        setNewComment("")
        const updateCommentPost = await post.map((post) => post.id === postid ? { ...post, "comments": [...post, comments, newCommentObj] } : post)

        setPost(updateCommentPost)
        console.log("--->>NEWPOST:", post);
    }

    return (

        // =================APPBAR==============
        <div className='main'>
            <AppBar position="static" style={{ backgroundColor: "#DB9AA0", color: "black" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#E9D9D9',
                                textDecoration: 'none',
                            }}
                        >
                            WELCOME
                        </Typography>
                        <MenuItem onClick={handleAddPost}>
                            <Typography textAlign="center" className='menus'>Add Post</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleMyPost}>
                            <Typography textAlign="center">View My Post</Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography textAlign="center" onClick={handleallPost}>View All Post</Typography>
                        </MenuItem>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="" src={userDetails?.Profilepic || "src/PROJECT/MyFireBaseProject/Images/Profilepic.jpg"} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* ==============PROFILEPAGE=============== */}
            {profileLogin ? (
                <Paper elevation={6} sx={{ p: 5, width: '100%', maxWidth: 400, textAlign: 'center', margin: '20px auto' }}>
                    {userDetails ? (
                        <>
                            <Typography variant="h4">Welcome {userDetails.name}</Typography>
                            {userDetails.Profilepic ? (
                                <Avatar
                                    src={userDetails.Profilepic}
                                    alt="profile"
                                    sx={{ width: 56, height: 56, mt: 2, mb: 2, margin: '0 auto' }}
                                />
                            ) : (
                                <Typography variant="body1" color="textSecondary">
                                    No profile available
                                </Typography>
                            )}
                        </>
                    ) : (
                        <Typography variant="h4">Loading</Typography>
                    )}

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Box sx={{ mb: 2 }}>
                            <Button variant="contained" component="label"
                                sx={{ mb: 2, backgroundColor: '#DB9AA0' }}
                            >
                                Upload your Profile
                                <input
                                    type="file"
                                    hidden
                                    onChange={(e) => setProfileFile(e.target.files[0])}
                                />
                            </Button>
                        </Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={uploadingStatus}
                            sx={{ mb: 2, backgroundColor: '#DB9AA0' }}

                        >
                            Upload
                        </Button>
                    </Box>
                </Paper>
            ) : (
                <h1></h1>
            )}


            {/* ==================ADDPOST=================== */}


            {addPost ?
                <div>
                    <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 600, textAlign: 'center' }}>
                            <Typography variant="h5" component="h1" gutterBottom>
                                Add New Post
                            </Typography>
                            <Box component="form" sx={{ mt: 2 }}>
                                <TextField
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    label="Content"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    multiline
                                    rows={4}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    sx={{ mb: 2 }}
                                />
                                <Button
                                    variant="contained"
                                    component="label"
                                    sx={{ mb: 2, backgroundColor: '#DB9AA0' }}
                                >
                                    Upload Image
                                    <input
                                        type="file"
                                        hidden
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />
                                </Button> <br />
                                {image && <Typography variant="body2">{image.name}</Typography>}
                                <Button onClick={(e) => handlePost(e)}
                                    type="button"
                                    variant="contained"
                                    color="primary"
                                    sx={{ mb: 2, backgroundColor: '#DB9AA0' }}

                                    halfWidth
                                >
                                    Add Post
                                </Button>
                            </Box>

                        </Paper>
                    </Box>
                </div>
                :
                <h2></h2>
            }


            {/* ===================MYPOST================     */}


            {mypost ? (
                <Paper className='mypost'>
                    {post.map((singlePost, index) => (
                        <Card key={index} variant="outlined" sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6">{singlePost.title}</Typography>
                                <Typography variant="subtitle1">posted by: {postUsers[singlePost.userid]}</Typography>
                                <Typography variant="body2">{singlePost.description}</Typography>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={singlePost.image}
                                    alt="Post"
                                />
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleDelete(singlePost.id)}>Delete</Button>
                            </CardActions>
                        </Card>
                    ))}
                </Paper>
            ) : (
                <Typography variant="h1"></Typography>
            )}

            {/* ===================ViewALlPOST================     */}



            {
                viewallPost ? (

                    post.map((singlePost, index) => {
                        return (
                            <Card key={index} sx={{ marginBottom: 10, textAlign: 'center', width: '50%', margin: '0 auto' }}>
                                <CardContent>
                                    {/* //username */}
                                    <Typography variant="subtitle1">{postUsers[singlePost.uid]}</Typography>
                                    {/* Title  */}
                                    <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <Typography variant="h5">Title: {singlePost.title}</Typography>
                                    <Button variant="" color="" onClick={() => handleDelete(singlePost.id)}><img src='src\PROJECT\MyFireBaseProject\Images\delete (1).png' height={40} width={40}/></Button>
                                    </div>
                                    {/* img  */}
                                    <Box component="img" src={singlePost.image} height={400} width={700} alt="" />

                                    <Typography variant="h6">{singlePost.uid}</Typography>
                                    <Typography variant="body">Description: {singlePost.description}</Typography>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="" onClick={() => handleLike(singlePost.id)}><img src='src\PROJECT\MyFireBaseProject\Images\thumbs-up.png' height={40} width={40}/></Button>
                                        <Button variant="" onClick={() => handleComment(singlePost.id)}><img src='src\PROJECT\MyFireBaseProject\Images\message.png'height={40} width={40}/></Button>

                                    </CardActions>
                                    <TextField
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        placeholder='Type comments'
                                        variant="outlined"
                                        fullWidth
                                        sx={{ marginY: 1 }}
                                    />
                                    <Typography variant="h6">Likes: {singlePost.likes?.length || 0}</Typography>
                                    {/* <Divider sx={{ marginY: 2 }} /> */}
                                    <Typography variant="h5">Comments</Typography>
                                    {singlePost.comments?.length > 0 ? (
                                        singlePost.comments.map((comment, index) => {
                                            return (
                                                <Box key={index} sx={{ marginBottom: 1 }}>
                                                    <Typography variant="body2">
                                                        Posted by: {postUsers[comment.userid]} :- {comment.text} at : {timeAgo(comment.timestamp)}
                                                    </Typography>
                                                </Box>
                                            );
                                        })
                                    ) : (
                                        <Typography variant="body2">No Comments Found</Typography>
                                    )}
                                  
                                </CardContent>
                            </Card>
                            //     <div key={index}  style={{ width: "50%", margin: "0 auto" }}>
                            //     <Box class="Main-container" sx={{ color: "white" }}>
                            //       <Box class="wrapper">
                            //         <Box class="banner-image">
                            //           <Box sx={{ display: "flex", alignItems: "center" }}>
                            //             <img
                            //               src="ice.jpg"
                            //               alt=""
                            //               style={{
                            //                 width: "50px",
                            //                 height: "50px",
                            //                 borderRadius: "50%",
                            //               }}
                            //             />
                            //             <Typography
                            //               sx={{ color: "white", fontWeight: "900" }}
                            //             >
                            //               {postUsers[singlePost.userid]}
                            //             </Typography>
                            //           </Box>
                            //           <img
                            //             src={singlePost.image}
                            //             style={{
                            //               height: "300px",
                            //               width: "100%",
                            //               borderRadius: "10px",
                            //             }}
                            //           />{" "}
                            //         </Box>
                            //         <h1 className="Title"> {singlePost.title}</h1>
                            //         <p className="description">{singlePost.description}</p>
                            //         <p className="description">
                            //           Likes {singlePost.likes?.length || 0}
                            //         </p>
                            //         <p className="description">
                            //           {singlePost.comments?.length > 0 ? (
                            //             singlePost.comments.map((comment, index) => {
                            //               return (
                            //                 <div key={index}>
                            //                   <p>
                            //                     Commented by : {postUsers[comment.userid]}{" "}
                            //                     :- {comment.text}
                            //                     <span style={{ fontSize: "10px" }}>
                            //                       {" "}
                            //                       at : {timeAgo(comment.timestamp)}
                            //                     </span>
                            //                   </p>
                            //                 </div>
                            //               );
                            //             })
                            //           ) : (
                            //             <p>No Comments Found</p>
                            //           )}
                            //         </p>
                            //       </Box>
                            //       <Box class="button-wrapper">
                            //         {/* <button
                            //           class="btn outline"
                            //           onClick={() => handleLike(singlePost.id)}
                            //         >
                            //           Like
                            //         </button> */}
                            //         {/* <input
                            //           type="text"
                            //           placeholder="Enter Comments"
                            //           value={newComment}
                            //           onChange={(e) => setNewComment(e.target.value)}
                            //         />
                            //         <button
                            //           className="btn outline"
                            //           onClick={() => handleComment(singlePost.id)}
                            //         >
                            //           Add Comment
                            //         </button> */}
                            //       </Box>
                            //     </Box>
                            //     <hr
                            //       style={{
                            //         // marginTop: "5px",
                            //         border: "1px solid grey",
                            //         borderRadius: "20px",
                            //       }}
                            //     />
                            //   </div>

                        );
                    })
                ) : (
                    <Typography variant="h1"></Typography>
                )
            }


        </div>
    );
}
export default ResponsiveAppBar;
