export function handleBookmark(id) {
  getBookmarks(id);
}

const getBookmarks = (id) => {
  if (localStorage.getItem('bookmarks') === null) {
    const newArray = [];
    newArray.push(id);
    localStorage.setItem('bookmarks', JSON.stringify(newArray));
  } else {
    const bookM = JSON.parse(localStorage.getItem('bookmarks'));
    if (bookM.includes(id)) {
      localStorage.setItem('bookmarks', JSON.stringify(bookM.filter((s) => s !== id)));
    } else {
      localStorage.setItem('bookmarks', JSON.stringify(bookM.concat(id)));
    }
  }
};

export function isBookmarked(id) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  if (bookmarks && bookmarks.includes(id)) {
    return true;
  } else {
    return false;
  }
}
