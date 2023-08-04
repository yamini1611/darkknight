import React, { useState } from 'react';
import '../styles/Google.css'
function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.toLowerCase() === 'darkknight') {
      window.location.href = '/Homepage';
    } else {
      window.location.href ="https://www.google.com/search?q= " +searchQuery ;
    }
  };

  return (
    <div id='batbg'>
 <div id="search-container ">
    <img id="search-logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo"></img>
  <br></br>
  <form id="search-form"  onSubmit={handleSearch}>
  <input
         id="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Google"
        />
      <button type="submit" className='btn btn-dark' id="search-button"><i class="fas fa-search"></i></button>
    </form>
  </div>
    </div>
   
  
       

        
  );
}



export default SearchPage;
