import React from 'react';

const CenteredLayout = ({ children }) => {
  const layoutStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    width: '900px',
  };

  const contentStyle = {
    textAlign: 'center',
  };

  return (
    <div style={layoutStyle}>
      <div style={contentStyle}>{children}</div>
    </div>
  );
};

export default CenteredLayout;
