import { useState } from 'react';

import FilterBar from './components/FilterBar';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <Navbar />
      <FilterBar page={page} setPhotos={setPhotos} />
      <Gallery photos={photos} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default App;
