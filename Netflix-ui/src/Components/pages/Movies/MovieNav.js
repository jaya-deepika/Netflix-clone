
import React, { useEffect, useRef, useState } from 'react';
import { SiWindows } from "react-icons/si";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { getGenres } from '../../StoreApp/ReduxIndex';
import { Link } from 'react-router-dom';
import './Movies.css';
import { MdArrowDropDown } from "react-icons/md";
import MovieRandomPage from './MovieRandomPage';
import MovieGenerSlider from '../MovieSlider/MovieGenerSlider';


function MovieNav({moviedata}) {
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);
    const genres = useSelector((state) => state.netflix.genres);

    const [showDropdownmovie, setShowDropdownmovie] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedGenreId, setSelectedGenreId] = useState(null);
    const [selectedGenreName, setSelectedGenreName] = useState('');

const handleGenreClick = (genreId,genreName) => {
    setSelectedGenreId(genreId);
    setSelectedGenreName(genreName);
    setShowDropdownmovie(false);
};
    const toggleDropdown = () => {
        setShowDropdownmovie(!showDropdownmovie);
    };

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);
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
    const handleMoviesClick = () => {
        setSelectedGenreId(null);
    };

    return (
        <div>
        <div className={`MovieNAvv ${isScrolled ? 'scrolled' : ''}`}>
            <div className='moviehead'>
                
                {selectedGenreId  ?(

                <div className='moviehead'><h1 onClick={handleMoviesClick} className='selectedidmovie'>Movies  <i className="fa-solid fa-angle-right"></i></h1>
                <p className='genernameinselectedid'>{selectedGenreName}</p></div>
                ) :(
                <div className='moviehead'><h1>Movies</h1>
                <div className="dropdown-containerMovienav" ref={dropdownRef}>
                    <button onClick={toggleDropdown} className='buttongen'>Generes
                    <MdArrowDropDown className='dropmovieicon'/>
                    </button>
                    
                    {showDropdownmovie && (
                        <div className='dropdownmovienav'>
                            <ul>
                                {genres.map((gen) => (
                                    <li key={gen.id} >
                                        <Link to=""  className='genername' onClick={() => handleGenreClick(gen.id,gen.name)}>{gen.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div>
                        
                    </div>
                </div>
                </div>)}
            </div>
            <div>

                <button className='movieicondata'><HiBars3CenterLeft  className='hibar'/></button>
                <button className='movieicondata'><SiWindows className='SiWin'/></button>
            </div>
        </div>
        <div>
        {selectedGenreId ? (
                    <MovieGenerSlider genreId={selectedGenreId} moviedata={moviedata} />
                    
                ) : (
                    <MovieRandomPage movie={moviedata} />
                )}
                


        </div>
        
        </div>
    );
}

export default MovieNav;

