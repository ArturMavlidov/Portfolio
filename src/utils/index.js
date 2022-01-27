export const mapPagesToPath = {
  Home: "/",
  About: "/about",
  Portfolio: '/portfolio',
  Contact: '/contact'
};

export const getNextPage = (currentPage) => {
  let nextPage;
  const mapObject = Object.keys(mapPagesToPath);

  mapObject.forEach((page, idx) => {
    if (page === currentPage) {
      nextPage = mapObject[idx + 1];
    }
  })

  return mapPagesToPath[nextPage];
}