// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import BookContext from './bookContext';

const BookDetails = () => {
  const { bookCover } = useContext(BookContext);

  return (
    <div>
      <h2>{bookCover.title}</h2>
      <img src={bookCover.image} alt={bookCover.title} />
      <p>{bookCover.description}</p>
    </div>
  );
};

export default BookDetails;