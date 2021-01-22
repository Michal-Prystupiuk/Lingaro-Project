import React from 'react';
import { PropTypes } from 'prop-types';

const SearchIcon = ({
  width = '1em',
  height = '1em',
  color = 'grey',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    fill={color}
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
  </svg>
);

SearchIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default SearchIcon;
