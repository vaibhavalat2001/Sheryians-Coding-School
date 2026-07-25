import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className='w-50 p-5 border bg-white rounded flex flex-col justify-center gap-2'>
        <div>
            <img className='w-50 h-50 rounded' src={user.img} alt="" />
        </div>
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
        <button className='bg-red-500 rounded cursor-pointer active:scale-90'>Delete</button>
    </div>
  )
}

export default UserCard
