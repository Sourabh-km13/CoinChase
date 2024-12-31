import React, { useContext } from 'react'
import { currencyContext } from '../context/currency'
import { useNavigate } from 'react-router-dom'
import GithubButton from './GithubButton'


export default function Navbar() {
  const{setcurrency}=useContext(currencyContext)
  const navigate=useNavigate()
  function handleClick() {
    navigate('/')
  }

  return (<div className="navbar bg-base-100">
    <div className="navbar-start">
        <p className='px-2'>currency</p>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          
          <li><a onClick={()=>setcurrency('inr')}>INR</a></li>
          <li><a onClick={()=>setcurrency('usd')}>USD</a></li>
          
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a onClick={handleClick} className="btn btn-ghost text-xl">Crypto Chase</a>
    </div>
    <div className="navbar-end">
     <GithubButton/>
    </div>
  </div>
  )
}
