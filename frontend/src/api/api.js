export const fetchExhibits = async (searchValue) => {
  const response = await fetch(
    `https://api.vam.ac.uk/v2/objects/search?q='${searchValue}'`
  );
  const data = await response.json();
  return data.records;
};
