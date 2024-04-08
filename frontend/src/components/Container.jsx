import React from 'react'

const Container = ({ children }) => {
  return (
    <div className=' p-2 max-w-5xl min-w-[300px] mx-auto py-1 px-4 '>
      {children}
    </div>
  )
}

export default Container