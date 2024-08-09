import React from 'react';

const BasicTabComp = ({tabItems, onTabClick}) => {

  return (
    <div className="tab basic">
      {tabItems.map((propsItems, index) => (
        <button
          className={propsItems.value ? 'select' : ''}
          key={index}
          onClick={() => onTabClick(index)}
        >
          {propsItems.item}
        </button>
      ))}
    </div>
  );
};

export default BasicTabComp;