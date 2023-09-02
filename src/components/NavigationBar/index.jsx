import LeftNav from './LeftNav';
import RightNav from './RightNav';
import SearchBar from './SearchBar';

import { ImSearch } from 'react-icons/im';
import { MdKeyboardVoice } from 'react-icons/md';

import { BiArrowBack } from 'react-icons/bi';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import useWindowSize from '../../helper/useWindowSize';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

const NavigationBar = () => {
  const { width } = useWindowSize();
  const {
    showSpecialSearchBar,
    setShowSpecialSearchBar,
    setSearchQuery,
    searchQuery,
  } = useContext(SearchContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchQuery({
      ...searchQuery,
      input: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery.input !== '') {
      const response = await axios.get(
        `/search?part=snippet&maxResults=10&q=${searchQuery.input}`
      );
      setSearchQuery({
        ...searchQuery,
        videos: response.data.items,
      });

      navigate(`/results/${searchQuery.input}`);
    }
  };

  const specialSearchBarRender = (
    <div className='special_searchbar'>
      <button onClick={() => setShowSpecialSearchBar(false)}>
        <BiArrowBack />
      </button>
      <form onSubmit={handleSubmit}>
        <input
          value={searchQuery.input}
          onChange={handleChange}
          type='text'
          name='search'
          placeholder='Search'
        />
        <button type='submit'>
          <ImSearch size={20} />
        </button>
      </form>
      <button className='icon-container voiceIcon'>
        <MdKeyboardVoice size={25} />
      </button>
    </div>
  );

  return (
    <nav className='Navbar'>
      {width <= 640 && showSpecialSearchBar ? (
        specialSearchBarRender
      ) : (
        <>
          <LeftNav />
          <SearchBar onChange={handleChange} onSubmit={handleSubmit} />
          <RightNav />
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
