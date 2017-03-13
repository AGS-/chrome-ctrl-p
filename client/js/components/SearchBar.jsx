import React, { PropTypes } from 'react';

export default function SearchBar({ handleOnChange }) {
  return (
    <input onChange={handleOnChange} type="text" />
  );
}

SearchBar.propTypes = {
  handleOnChange: PropTypes.func,
};
