import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import imgUrl from '../../../assets/logo.png';
import { useContext } from 'react';
import { SidebarContext } from '../../../context/SidebarContext';

const LeftNav = () => {
  const { handleToggleSidebar } = useContext(SidebarContext);

  return (
    <div className='menu-logo'>
      <button
        className='icon-container burgerMenu'
        onClick={handleToggleSidebar}
      >
        <IoMenu size={25} />
      </button>

      <div className='logo-container'>
        <Link to='/'>
          <img src={imgUrl} alt='youtube logo' />
        </Link>
      </div>
    </div>
  );
};

export default LeftNav;
