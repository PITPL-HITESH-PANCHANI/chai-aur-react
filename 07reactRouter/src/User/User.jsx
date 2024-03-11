import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  // const params = useParams();
  const {userid} = useParams();
  return (
    // <div>User:{params.userid}</div>
    <div className='bg-gray-600 text-white text-3xl p-4'>User:{userid}</div>
  )
}

export default User