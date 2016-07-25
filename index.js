function forEach(iterable, callback) {
  // if thing is an array
  if (Array.isArray(iterable)) {
    for (let i = 0; i < iterable.length; i++) {
      const element = iterable[i];
      callback(element, i, iterable);
    }
  } else if (typeof iterable === 'object') {
    for (const key in iterable) {
      const value = iterable[key];
      callback(value, key, iterable);
    }
  }
}

// for (const keyOrIndex in iterable) {
//   callback(iterable[keyOrIndex], keyOrIndex, iterable)
// }
