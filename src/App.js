import { useState } from 'react';

import FilterBar from './components/FilterBar';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import Loader from './components/Loader';

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <FilterBar
        page={page}
        setPhotos={setPhotos}
        setPage={setPage}
        setLoading={setLoading}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Gallery photos={photos} page={page} />
          {page === 1 && photos.length === 0 ? null : (
            <Pagination page={page} setPage={setPage} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
