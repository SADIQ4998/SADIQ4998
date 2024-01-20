import React from 'react';
import BookProvider from './pages/BookProvider';
import BookDetails from './pages/BookDetails';

function App() {
  return (
    <BookProvider>
      <BookDetails />
    </BookProvider>
  );
}

export default App;