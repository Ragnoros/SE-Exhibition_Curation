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
export const fetchScienceExhibits = async (page = 1, size = 10, query = "") => {
  try {
    const searchParam = query ? `&q=${encodeURIComponent(query)}` : "";
    const response = await fetch(
      `https://collection.sciencemuseumgroup.org.uk/search/museum/Science%20Museum?page[number]=${page}&page[size]=${size}${searchParam}`,
      {
        headers: { Accept: "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      items: data.data,
      total: data.meta?.total_pages || 0,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { items: [], total: 0 };
  }
};
