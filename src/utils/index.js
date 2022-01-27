export const pagesPathnames = ["/", "/about", "/portfolio", "/contact"];

export const pagesNavigate = {
  pagesPathnames,
  getNextPagePathname(currentPathname) {
    return pagesPathnames[pagesPathnames.indexOf(currentPathname) + 1];
  }
};