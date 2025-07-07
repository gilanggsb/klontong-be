function extractIdFromUrl(url) {
  const match = url.match(/\/api\/products\/(\d+)/);
  return match ? match[1] : null;
}

export {extractIdFromUrl}