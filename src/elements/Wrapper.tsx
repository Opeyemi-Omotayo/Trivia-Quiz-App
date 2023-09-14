import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] font-mono flex items-center justify-center bg-gray-50">
      {children}
    </div>
  )
}

export default Wrapper
