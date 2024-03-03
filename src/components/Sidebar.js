import React from 'react';

const Sidebar = ({ onSelectItem }) => {
  return (
    <div className="bg-white shadow-2xl p-4  w-52" style={{height:"530px"}}>
      <div>My Account</div> 
      <button className='btn border-none' onClick={() => onSelectItem('Medi Card')}>Medi Card</button>
      <button className='btn border-none' onClick={() => onSelectItem('Edit Profile')}>Edit Profile</button>
      <button className='btn border-none' onClick={() => onSelectItem('Set Password')}>Set Password</button>
    </div>
  );
};

export default Sidebar;
