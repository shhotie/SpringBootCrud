import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
const [users,setUser]= useState([]);

const {id} = useParams();

useEffect(()=>{
    loadUsers();
},[]);
const loadUsers= async() => {
    const result = await axios.get("http://localhost:8080/users")
    setUser(result.data);
}

const deleteUser = async (id) =>{
  await axios.delete(`http://localhost:8080/user/${id}`)
  loadUsers()
}
  return (
    <div className='container'>
        <div className='py-4 '>
        <table className="table border shadow">
  <thead className="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr key={user.id}>
                <th scope="row">{index+1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                <Link className="btn btn-success mx-2" to={`/viewuser/${user.id}`}>VIEW</Link>
                <Link className="btn btn-outline-secondary mx-2" to={`/edituser/${user.id}`}>EDIT</Link>
                <button type="button" className="btn btn-danger mx-2"
                onClick={()=>deleteUser(user.id)}
                >DELETE</button>
                </td>
            </tr>
        ))
    }
  </tbody>
</table>

        </div>
      
    </div>
  )
}
