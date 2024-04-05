
import React, { useEffect, useRef, useState } from 'react';
import { SiWindows } from "react-icons/si";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import '../Movies/Movies.css'
import { MdArrowDropDown } from "react-icons/md";
import TvRandompage from './TvRandompage';
import {  useSelector } from 'react-redux';
import TvGenerSlider from '../TVSlider/TvGenerSlider';


function TVNav({datatv}) {
    
    const dropdownRef = useRef(null);
    const tvgenres = useSelector((state) => state.netflix.genrestv);
    console.log(tvgenres)

    const [showDropdownmovie, setShowDropdownmovie] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedGenreId, setSelectedGenreId] = useState(null);
    const [selectedGenreName, setSelectedGenreName] = useState('');

    const handleGenreClick = (genreId,genreName) => {
        setSelectedGenreId(genreId);
        setSelectedGenreName(genreName);
        setShowDropdownmovie(false);
    };
    const handleMoviesClick = () => {
        setSelectedGenreId(null);
    };

    const toggleDropdown = () => {
        setShowDropdownmovie(!showDropdownmovie);
    };

   
    //function to handle closed outside click
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdownmovie(false);
        }
    };

    //For navabr scrolling
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
  return (
    <div>
    <div className={`MovieNAvv ${isScrolled ? 'scrolled' : ''}`}>
        <div className='moviehead'>

            {selectedGenreId  ?(

            <div className='moviehead'><h1 onClick={handleMoviesClick} className='selectedidmovie'>Tvshows <i className="fa-solid fa-angle-right"></i></h1>
            <p className='genernameinselectedid'>{selectedGenreName}</p></div>
            ) :(
            <div className='moviehead'><h1>TvShows</h1>
            <div className="dropdown-containerMovienav" ref={dropdownRef}>
                <button onClick={toggleDropdown} className='buttongen'>Generes
                <MdArrowDropDown className='dropmovieicon'/>
                </button>
                {showDropdownmovie && (
                    <div className='dropdownmovienav'>
                        <ul>
                            {tvgenres.map((gen) => (
                                <li key={gen.id}>
                                    <Link to=""  className='genername' onClick={() => handleGenreClick(gen.id,gen.name)}>{gen.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            </div>)}
        </div>
        <div>

            <button className='movieicondata'><HiBars3CenterLeft  className='hibar'/></button>
            <button className='movieicondata'><SiWindows className='SiWin'/></button>
        </div>
    </div>
    {/* <div> <TvRandompage datatvshow={datatv}/>   </div> */}
    <div>
        {selectedGenreId ? (
                    <TvGenerSlider genreId={selectedGenreId} moviedata={datatv} />
                    
                ) : (
                   <div style={{backgroundColor:'black'}}> <TvRandompage datatvshow={datatv} /></div>
                )}
                


    </div>



    </div>
  )
}

export default TVNav
