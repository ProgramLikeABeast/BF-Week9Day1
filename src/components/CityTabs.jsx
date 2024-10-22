import React, { useState } from 'react';

const CityTabs = () => {
  const [activeTab, setActiveTab] = useState('London');

  const cities = {
    London: 'London is the capital city of England.',
    Paris: 'Paris is the capital of France.',
    Tokyo: 'Tokyo is the capital of Japan.',
  };

  return (
    <div>
      <div>
        {Object.keys(cities).map((city) => (
          <button key={city} onClick={() => setActiveTab(city)}>
            {city}
          </button>
        ))}
      </div>
      <div>
        <h2>{activeTab}</h2>
        <p>{cities[activeTab]}</p>
      </div>
    </div>
  );
};

export default CityTabs;
