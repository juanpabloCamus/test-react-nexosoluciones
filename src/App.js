import { useState } from 'react';
import FilterBar from './components/FilterBar';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';

function App() {
  const [photos, setPhotos] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <FilterBar setPhotos={setPhotos} />
      <Gallery photos={photos} />
    </div>
  );
}

export default App;
