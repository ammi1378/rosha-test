import { ICityFilter } from "../../common/ICityFilter";


export interface IServiceFilters {
  filters: {
    cityFilter?: ICityFilter;
  };
  query: string;
}
export type IServiceFilter = ICityFilter;

