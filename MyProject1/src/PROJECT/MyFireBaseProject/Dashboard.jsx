import React, { useEffect, useState } from 'react';
import { auth, db, storage } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';



export default function Dashboard() {
    const [userDetails, setUserDetails] = useState(null);
    const [profileFile, setProfileFile] = useState(null);
    const [uploadingStatus, setUploadingStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchCurrentUserDetails(user);
            }
        });
    }, []);

    const fetchCurrentUserDetails = async (user) => {
        if (user) {

            const userData = await getDoc(doc(db, "Student", user.uid));
            console.log(`Welcome to the dashboard, ${userData.data().name}`);
            setUserDetails(userData.data());

        }
    };

    const handleLogout = async () => {

        await signOut(auth);
        navigate("/login", { replace: true });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploadingStatus(true);

        const user = auth.currentUser;
        if (user) {

            const storageRef = ref(storage, `profilepicture/${user.uid}`);
            await uploadBytes(storageRef, profileFile);
            const downloadUrl = await getDownloadURL(storageRef);
            console.log("DownloadUrl:", downloadUrl);

            await updateDoc(doc(db, "Student", user.uid), {
                Profilepic: downloadUrl
            });

            const updatedUserData = await getDoc(doc(db, "Student", user.uid));
            setUserDetails(updatedUserData.data());

        }
        setUploadingStatus(false);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            {userDetails ? (
                <>
                    <h1>
                        Welcome {userDetails.name} Email: {userDetails.email}
                    </h1>
                    {userDetails.Profilepic ? (
                        <img src={userDetails.Profilepic} alt="Profile" width={50} height={50} />
                    ) : (
                        <p>No profile picture available</p>
                    )}
                </>
            ) : (
                <h1>Loading..........</h1>
            )}
            <form onSubmit={handleSubmit}>
                <label htmlFor="profileUpload">Upload your image</label>
                <input
                    type="file"
                    id="profileUpload"
                    onChange={(e) => setProfileFile(e.target.files[0])}
                />
                <input type="submit" value="Upload" disabled={uploadingStatus} />
            </form>
            <button onClick={handleLogout}>Logout</button>

            <h1 onClick={() => navigate("/newpost")}>Add New Post</h1>

            <h1 onClick={() => navigate("/mypost")}>View My Post</h1>

            <h1 onClick={() => navigate("/viewpost")}>View All Post</h1>
            <h1 onClick={() => navigate("/alluser")}> All users</h1>

        </div>
    );
}
