import React from 'react'
import UserHoc from './hoc/UserHoc';

const User1 = (props)  => {
    console.log(props);
    return (
    <div>
      User 1
    </div>
  )
}

const User2 = (props)  => {
    console.log(props);
    return (
    <div>
      User 2
    </div>
  )
}

export default UserHoc(User1,User2,'Hello');