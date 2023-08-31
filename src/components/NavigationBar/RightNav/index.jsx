import { MdApps, MdNotifications, MdVideoCall } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const RightNav = () => {
  return (
    <div className='buttons'>
      <button className='icon-container'>
        <MdVideoCall
          size={25}
          data-tooltip-content='Create'
          data-tooltip-id='navbar'
        />
      </button>

      <button className='icon-container'>
        <MdApps size={24} />
      </button>

      <button className='icon-container'>
        <MdNotifications size={25} />
      </button>

      <Tooltip
        id='navbar'
        backgroundColor='gray'
        effect='solid'
        delayHide={150}
        arrowColor='transparent'
      />
    </div>
  );
};

export default RightNav;
