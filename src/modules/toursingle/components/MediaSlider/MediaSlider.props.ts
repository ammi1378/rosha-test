export interface MediaSliderProps {
  className?: string;
  media?: IProductMedal[];
}

export interface IProductMedal {
  url?: string | undefined;
  alt?: string | undefined;
  id?: number | undefined;
}
