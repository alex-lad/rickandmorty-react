export interface IResponse {
  info: IPagination;
  results: IHero[];
}

export interface IPagination {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

export interface IHero {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: ILocation;
  location?: ILocation;
  image?: string;
  episode?: string[];
}

interface ILocation {
  name?: string;
  url?: string;
}
