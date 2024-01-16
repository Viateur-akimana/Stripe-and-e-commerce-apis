import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get exclusive offers on your email</h1>
        <p>Subscribe to the newsLetter and stay updated</p>
        <div>
            <input type="email" placeholder='Enter your email' />
            <button>Subscribe </button>
        </div>
    </div>
  )
}

export default NewsLetter