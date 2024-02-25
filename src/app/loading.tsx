import React from 'react'

const Loading = () => {
  return (
    <div className='text-center text-purple-700 text-xl'>
        <span className="relative h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-300"></span>
        </span>
        <h3 className="animate-pulse inline">carregando repositórios...</h3>
    </div>
  )
}

export default Loading