export const fetchExhibits = async (searchValue, page = 1, pageSize = 10) => {
  const response = await fetch(
    `https://api.vam.ac.uk/v2/objects/search?q=${encodeURIComponent(
      searchValue
    )}&page=${page}&page_size=${pageSize}`
  );
  const data = await response.json();
  console.log(data.records);
  return {
    exhibits: data.records,
    totalRecords: data.info.record_count, // Total available records
  };
};
export const fetchExhibitDetails = async (id) => {
  const response = await fetch(`https://api.vam.ac.uk/v2/museumobject/${id}`);
  const data = await response.json();
  console.log(data.record);
  console.log(data.record.titles[0].title);
  return data.record;
};
