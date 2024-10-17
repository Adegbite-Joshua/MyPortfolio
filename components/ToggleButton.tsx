import React from 'react';

interface ToggleButtonProps {
  toggleSubNav: () => void;
  isSubNavVisible: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ toggleSubNav, isSubNavVisible }) => {
  return (
    <label className="toggle-container md:hidden my-auto ms-32">
      <input
        id="navbarToggle"
        type="checkbox"
        checked={isSubNavVisible}
        onChange={toggleSubNav}
      />
      <div className="checkmark">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </label>
  );
};

export default ToggleButton;
