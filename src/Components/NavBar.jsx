import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import boards from '../pages/boards.json'


function NavBar () {
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handelSearch = () => {
    setSearch(!search)
  }

  
  console.log(searchValue);
  

  return (
    <nav className='navBar'>
      <div className='navBar-container '>
        {
         search ? <div className='search-container'>
                    <button className="search-button" onClick={handelSearch}>
                     <i className="fas fa-search"></i>
                    </button>  <input type='text' placeholder='search' onChange={(e) => setSearchValue(e.target.value)}/>
                  </div>
                : <button className="search-button" onClick={handelSearch}>
                   <i className="fas fa-search"></i>
                  </button>
        }





        <NavLink to="/">Home</NavLink>
        <NavLink to="/Shoping">Shoping</NavLink>
        <NavLink to="/Orders">Orders</NavLink>

      </div>
    </nav>
  )
}

export default NavBar