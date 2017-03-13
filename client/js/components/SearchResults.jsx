import React, { PropTypes } from 'react';

export default function SearchResults({ results }) {
  const searchResultList = results.map((result, i) => (
    <SearchResult key={i} title={result.title} />
  ));

  return (
    <ul>
      {searchResultList}
    </ul>
  );
}

SearchResults.propTypes = {
  results: PropTypes.array,
};

function SearchResult({ title }) {
  return (
    <li>{title}</li>
  );
}

SearchResult.propTypes = {
  title: PropTypes.string,
};
