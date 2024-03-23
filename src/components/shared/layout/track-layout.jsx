import PropTypes from 'prop-types';
import React from 'react';

const TrackLayout = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <main className="flex-grow">{children}</main>
  </div>
);

TrackLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TrackLayout;
