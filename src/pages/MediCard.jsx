
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const MediCard = () => {
  const [selectedItem, setSelectedItem] = useState('Medi Card');

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex">
      <Sidebar onSelectItem={handleSelectItem} />
      <MainContent selectedItem={selectedItem} />
    </div>
  );
};

export default MediCard;
