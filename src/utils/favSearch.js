const favSearch = (search) => {
  const currentFavs = JSON.parse(localStorage.getItem('Favorites'));

  if (currentFavs === null) {
    localStorage.setItem('Favorites', JSON.stringify([search]));
  } else {
    currentFavs.push(search);
    localStorage.setItem('Favorites', JSON.stringify(currentFavs));
  }
};

export default favSearch;
