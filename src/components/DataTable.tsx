import React, { useState, useEffect} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../inti-firebase';
import { User } from '../model';
import './styles.css';

const DataTable = () => {
     const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers()
    },[])

    useEffect(() => {
    },[users])

    const getUsers = () => {
        const userCollectionRef = collection(db, 'Users')
        getDocs(userCollectionRef)
            .then(response => {
                const info = response.docs.map(doc => ({
                    username: doc.data().data.html_url,
                    name: doc.data().data.name,
                    publicRepos: doc.data().data.public_repos,
                    publicGists: doc.data().data.public_gists,
                    followers: doc.data().data.followers,
                    following: doc.data().data.following,
                    createdAt: doc.data().data.created_at,
                }))
                setUsers(info);
            })
            .catch(error => console.log(error.message))
    }

    return (
        <table id='usersInfo'>
            <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Public Repos</th>
                <th>Public Gists</th>
                <th>Followers</th>
                <th>Following</th>
                <th>Created At</th>
            </tr>
            {users.map((k) => (
                <tr>
                    <td>{k.username}</td>
                    <td>{k.name}</td>
                    <td>{k.publicRepos}</td>
                    <td>{k.publicGists}</td>
                    <td>{k.followers}</td>
                    <td>{k.following}</td>
                    <td>{k.createdAt.slice(5,7) + '/' + k.createdAt.slice(8,10) + '/' +k.createdAt.slice(0,4)}</td>
                </tr>
            ))} 
        </table>
    )
}

export default DataTable;