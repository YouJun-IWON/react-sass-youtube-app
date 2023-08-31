import LeftNav from './LeftNav';
import RightNav from './RightNav';
import SearchBar from './SearchBar';

const NavigationBar = () => {
  return (
    <nav className='Navbar'>
      <LeftNav />
      <SearchBar />
      <RightNav />
    </nav>
  );
};

export default NavigationBar;
