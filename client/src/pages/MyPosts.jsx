import React, { useEffect, useState } from 'react'

const MyPosts = () => {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Add Post</button>
      <input type="text"/>
      <input type="image"/>
    </div>
  )
}

export default MyPosts