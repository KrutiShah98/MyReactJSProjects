import { collection, deleteDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function Guest() {
    const [allUsers, setAllusers] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetchAllusers();
    }, [])

    const fetchAllusers = async () => {
        const querySnapshots = await getDocs(collection(db, "Student"))
        console.log("---------->QuerySnapshot", querySnapshots);


        const users = [];

        querySnapshots.forEach((doc) => {
            users.push({ uid: doc.id, ...doc.data() })

        })

        setAllusers(users);
        console.log("...>users", users);
    }
    const deleteUser = async (userid) => {
        console.log("user delete", userid);
        const selectedUser = getDoc(doc(db, "Student", userid))
        await deleteDoc(doc(db, "Student", userid))//it will remove from firestore

        selectedUser.deleteUser;
        // remove from array\

        const newArray = allUsers.filter(user => user.uid !== userid)
        setAllusers(newArray);
        console.log(newArray);
    }

    return (
        <div>
            <h1>All Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sr no</th>
                        <th>Image</th>
                        <th>name</th>
                        <th>Email</th>
                        <th colSpan={2}>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers
                            ?

                            allUsers.map((user, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.Profilepic ?
                                        <img src={user.Profilepic} height={50} width={50} alt="" /> :
                                        <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718496000&semt=ais_user" alt="" />
                                    }
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>

                                    <td><button onClick={() => navigate(`/edit`)}>edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>

                            })
                            : "NO USERS fOUND"


                    }
                </tbody>
            </table>
        </div>
    )
}
