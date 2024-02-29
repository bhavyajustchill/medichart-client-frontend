import React from 'react';

const Sidebar = ({ onSelectItem }) => {
  return (
    <div className="bg-gray-200 p-4  w-52" style={{height:"530px"}}>
      <div>My Account</div> 
      <button className='btn' onClick={() => onSelectItem('Medi Card')}>Medi Card</button>
      <button className='btn' onClick={() => onSelectItem('Edit Profile')}>Edit Profile</button>
      <button className='btn' onClick={() => onSelectItem('Set Password')}>Set Password</button>
    </div>
  );
};

export default Sidebar;
