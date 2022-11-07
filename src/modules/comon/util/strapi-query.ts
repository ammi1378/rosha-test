import qs from "qs";

export const strapiSortQ = (itmes: { field: string; asc: boolean }[]) => {
  return qs.stringify({
    sort: itmes.map((item) => `${item.field}:${item.asc ? "asc" : "desc"}`),
  });
};

export const strapiFilterQ = (itmes: IStrapiFilterItem[]) => {
  const filters: { [key: string]: { [key: string]: string } } = {};
  console.log('-----------------------------');
  console.log(itmes);

  itmes.forEach((item) => {
    const filter: { [key: string]: string } = {};
    filter[item.operation] = item.value;
    filters[item.field] = filter;
  });

  return qs.stringify(
    {
      filters,
    },
    {
      encodeValuesOnly: true,
    }
  );
};

export interface IStrapiFilterItem {
  field: string;
  operation: string;
  value: string;
}
