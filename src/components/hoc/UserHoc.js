import React from 'react'

const UserHoc = (WrappedComponent1,WrappedComponent2, arg1) => {
  return (props) =>(
      <div>
          {console.log(props)}
          {arg1}
           <WrappedComponent1 {...props}/>
           <WrappedComponent2 {...props}/>
      </div>
  )
}

export default UserHoc;
