export const fetchExhibits = async (searchValue) => {
  const response = await fetch(
    `https://api.vam.ac.uk/v2/objects/search?q='${searchValue}'`
  );
  const data = await response.json();
  console.log(data.records);
  return data.records;
};
export const fetchExhibitDetails = async (id) => {
  const response = await fetch(`https://api.vam.ac.uk/v2/museumobject/${id}`);
  const data = await response.json();
  console.log(data.record);
  console.log(data.record.titles[0].title);
  return data.record;
};
