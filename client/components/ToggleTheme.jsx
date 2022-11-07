import React from 'react';

const ToggleTheme = ({ theme, setTheme }) => (
  <div className="flex flex-initial flex-row justify-end">
    <div className="flex items-center mx-2">
      <input type="checkbox" className="checkbox" id="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <label htmlFor="checkbox" className="flexBetween w-8 h-4 nft-gradient rounded-2xl p-1 relative label">
        <i className="fas fa-sun" />
        <i className="fas fa-moon" />
        <div className="w-3 h-3 absolute bg-white rounded-full ball" />
      </label>
    </div>
  </div>
);

export default ToggleTheme;
