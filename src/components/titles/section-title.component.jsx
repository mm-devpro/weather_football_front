import React from 'react';

import './title.styles.css'

const SectionTitle = ({title, afterSize="small"}) => {
  return (
    <div className={`section-title-container title-after-${afterSize}`}>
      <h3>{title}</h3>
    </div>
  );
};

export default SectionTitle;
