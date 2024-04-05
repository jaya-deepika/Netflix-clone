import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './NetfixNav.css'
import { signOut } from 'firebase/auth';
import {firebaseAuth} from '../pages/firebase/config'
import { setSearchQuery } from '../StoreApp/ReduxIndex';
import { useDispatch } from 'react-redux';


function NetfixNav({ enableScrolling }) {
  
   const [isInputVisible, setInputVisible] = useState(false);
   const toggleInputVisibility = () => setInputVisible(!isInputVisible);
   const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
   const toggleMobileMenu = () => setMobileMenuVisible(!isMobileMenuVisible);
   const searchContainerRef = useRef(null);
   const [scrolling, setScrolling] = useState(false);
   const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchValue(query);
    dispatch(setSearchQuery(query));
    // Additional logic for handling the search query...
  };

  // //for scrolling 
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 10) {
  //       setScrolling(true);
  //     } else {
  //       setScrolling(false);
  //     }
     
  //   };

  //   // Add event listener when component mounts
  //   window.addEventListener('scroll', handleScroll);

  //   // Remove event listener on cleanup
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     clearTimeout(window.scrollTimeout);
  //   };
  // }, []);

  // Scroll handling effect
  useEffect(() => {
    const handleScroll = () => {
      if (enableScrolling && window.scrollY >= 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enableScrolling]);


   useEffect(() => {
    function handleClickOutside(event) {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
            setInputVisible(false); 
        }
    }

  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [searchContainerRef]);


const useremail = localStorage.getItem('userEmail');

const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);
      localStorage.removeItem('userEmail');
      
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };
  
  
  return (
    // <div className={`NetflixNav ${scrolling ? 'scrolling' : 'not-scrolling'}`}>
    <div className={`NetflixNav ${!enableScrolling || scrolling ? 'scrolling' : ''}`}>
        <div className="Netflix-component">
            <div className={`fabars-nav ${isMobileMenuVisible ? 'mobile-menu-visible' : ''}`}>
            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <i className="fas fa-bars"></i> 
      </div>
      {isMobileMenuVisible && (
        <div className="mobile-menu">
         
          <Link to=''><div className='profile-bar'><img className='img-changes' src="https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="no pic" />
          <div>
          <h5>{useremail}</h5>
          <p>switch profiles</p>
          </div></div>
          </Link>
          <Link to='' className='linknav-bar'>Account</Link>
          <Link to='' className='linknav-bar'>Help Center</Link>
          <Link to='/' onClick={handleSignOut} className='linknav-bar'>Sign out of Netflix</Link>
          <Link to='/Netflix' className='linknav-bar'>Home</Link>
          <Link to='/MyList' className='linknav-bar'>My List</Link>
          <Link to='' className='linknav-bar'>Thrillers</Link>
          <Link to='' className='linknav-bar'>Hindi Movies & tv</Link>
          <Link to='' className='linknav-bar'>Children & Family</Link>
          <Link to='' className='linknav-bar'>International Movies & Tv</Link>
          <Link to='' className='linknav-bar'>Malayalam-Language Movies </Link>
          <Link to='' className='linknav-bar'>Reality,variety & Talk Shows</Link>
          <Link to='' className='linknav-bar'>Action</Link>
          <Link to='' className='linknav-bar'>Anime</Link>
          <Link to='' className='linknav-bar'>Comedies</Link>
          <Link to='' className='linknav-bar'>Fantasy</Link>
          <Link to='' className='linknav-bar'>Sci-Fi</Link>
          <Link to='' className='linknav-bar'>Tamil-Language Movies</Link>
          <Link to='' className='linknav-bar'>Sci-Fi</Link>
          <Link to='' className='linknav-bar'>Horror</Link>
          <Link to='' className='linknav-bar'>Marathi-Language Movies</Link>
          <Link to='' className='linknav-bar'>Stand-Up Comedy</Link>
          <Link to='' className='linknav-bar'>Documenteries</Link>
          <Link to='' className='linknav-bar'>Bollywood</Link>
          <Link to='' className='linknav-bar'>Hollywood Movies</Link>
          <Link to='' className='linknav-bar'>Music & Musicals</Link>
          <Link to='' className='linknav-bar'>Romance</Link>
          <Link to='' className='linknav-bar'>Made in India</Link>
          <Link to='' className='linknav-bar'>English Films</Link>
          <Link to='' className='linknav-bar'>Dramas</Link>
        </div>
      )}

            </div>
            <Link to='/browse'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 30">
              <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,0 L99.5313525,0 L102.593495,7.87421502 L105.874965,0 L110.999156,0 L105.06233,14.2806261 Z M90.4686475,0 L85.8749649,0 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,0 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,0 L73.9366389,0 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,0 L66.3436123,0 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,0 L50.2183897,0 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,0 L32.7809542,0 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,0 L4.4690224,0 L10.562377,17.0315868 L10.562377,0 L15.2497891,0 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
            </svg>
            </Link>
            <ul className='linksbrowse'>
                <li><Link to='/Netflix'>Home </Link></li>
                <li><Link to='/TvShows'>Tv Shows</Link></li>
                <li><Link to='/movies'>Movies</Link></li>
                <li><Link to='/MyList'>My List</Link></li>
            </ul>
            <ul className="browse-dropdown" >
                <li className="browse" >Browse
                    <div className="Browse-content">
                        <Link  to="/Netflix" className='Browse-link'>Home</Link>
                        <Link  to="/TvShows" className='Browse-link'>Tvshows</Link>
                        <Link  to="/movies" className='Browse-link'>Movies</Link>
                        <Link  to="/MyList" className='Browse-link'>MyList</Link>
                    </div>
                </li>
                <li className='browse2'><Link to=''>Children</Link></li>
            </ul>
        </div>
        <div className="Netflix-component2">
            <ul>
             <li id='search-icon' ref={searchContainerRef}>  {isInputVisible && (
                <div className={`search-input-container ${isInputVisible ? 'expanded' : ''}`}>
                    <input type="text" placeholder='Titles, people, genres' autoFocus  value={searchValue} onChange={handleSearch} />
                    <i className="fa-solid fa-magnifying-glass search-icon" onClick={toggleInputVisibility}></i>
                </div>
            )}
            {!isInputVisible && (
                <i className="fa-solid fa-magnifying-glass" onClick={toggleInputVisibility}></i>
            )}</li>
            <li className='children-Netflix-component2'><Link to=''>children</Link></li>
            <li id='bell-icon'><Link to=''><i className="fa-regular fa-bell"></i></Link></li>
            <li id='img-icon' className='dropdown'><Link to=''><img className='img-changes' src="https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="no pic" /></Link>
            <div className="dropdown-content">
             <h4 className='mailname'>{useremail}</h4>     
            <Link  to="/ " onClick={handleSignOut} className='signout'>Sign Out</Link>
            </div>
            </li>
            <li id='search2'><input type="text" placeholder='search' className='searchbar' /></li>
            <li id='img2'><Link to='/' onClick={handleSignOut}><img className='img-changes' src="https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="no pic" /></Link></li>
            <li id='mail2'><h5>{useremail}</h5></li>
            </ul>
        </div>
      
    </div>
  )
}

export default NetfixNav;
