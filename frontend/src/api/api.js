export const fetchExhibits = async () => {
  const response = await fetch(
    "https://api.vam.ac.uk/v2/objects/search?q='china'"
  );
  const data = await response.json();
  return data.records;
};
