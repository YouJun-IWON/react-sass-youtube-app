/* eslint-disable react/prop-types */
import { ImSearch } from 'react-icons/im';
import { MdKeyboardVoice } from 'react-icons/md';
import useWindowSize from '../../../helper/useWindowSize';
import { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';

const SearchBar = ({ onChange, onSubmit }) => {
  const { width } = useWindowSize();

  const { searchQuery, setShowSpecialSearchBar } = useContext(SearchContext);

  return (
    <div className={`SearchBar ${width <= 640 ? 'smallSearch' : ''}`}>
      {width > 640 ? (
        <form onSubmit={onSubmit}>
          <input
            value={searchQuery.input}
            onChange={onChange}
            type='text'
            name='search'
            placeholder='Search'
            autoComplete='false'
          />
          <button type='submit'>
            <ImSearch size={20} />
          </button>
        </form>
      ) : (
        <button
          className='icon-container searchIcon'
          onClick={() => setShowSpecialSearchBar(true)}
        >
          <ImSearch size={20}></ImSearch>
        </button>
      )}

      <button className='icon-container voiceIcon'>
        <MdKeyboardVoice size={25} />
      </button>
    </div>
  );
};

export default SearchBar;
