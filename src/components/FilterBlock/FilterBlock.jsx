import React from 'react'

const FilterBlock = ({selectedFilters, setSelectedFilters}) => {
   const handleArrayFilterChange = (key, value) => {
    setSelectedFilters(prev => {
      const currentList = prev[key];
      const newList = currentList.includes(value)
        ? currentList.filter(item => item !== value) // Remove if already present
        : [...currentList, value];                   // Add if missing
      
      return { ...prev, [key]: newList };
    });
  };

  // Helper function for simple strings (type or style)
  const handleStringFilterChange = (key, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [key]: prev[key] === value ? "" : value // Toggle selection off if clicked again
    }));
  };
  return (
    <aside className="filter-block">
      {/* Example Category Item */}
      <div className="filter-section">
        <h3>Categories</h3>
        <button onClick={() => handleStringFilterChange('type', 't-shirt')}>T-Shirts</button>
      </div>

      {/* Example Color Selector */}
      <div className="filter-section">
        <h3>Colors</h3>
        <button 
          style={{ backgroundColor: '#4f4631', width: "25px", height: "25px"}}
          className={selectedFilters.colors.includes('#4f4631') ? 'active' : ''}
          onClick={() => handleArrayFilterChange('colors', '#4f4631')}
        />
      </div>

      {/* Example Size Selector */}
      <div className="filter-section">
        <h3>Sizes</h3>
        <button 
          className={selectedFilters.sizes.includes('large') ? 'active' : ''}
          onClick={() => handleArrayFilterChange('sizes', 'large')}
        >
          Large
        </button>
      </div>
    </aside>
  )
}

export default FilterBlock