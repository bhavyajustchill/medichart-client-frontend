import React, { useState } from 'react';

const Checkbox = ({ label, isChecked, onChange }) => {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
  );
};

export default Checkbox;