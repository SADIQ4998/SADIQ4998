import React, { useState } from 'react';
import BookContext from './bookContext';

const BookProvider = (props) => {
  const [bookCover, setBookCover] = useState({
    title: 'WOLF SO GRIM AND MANGY',
    image: 'path/to/book-cover-image.jpg',
    description: 'Eye-catching book cover artwork for WOLF SO GRIM AND MANGY.',
  });

  return (
    <BookContext.Provider value={{ bookCover, setBookCover }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;