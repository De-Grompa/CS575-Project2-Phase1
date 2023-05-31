export interface Movie {
  [key: string]: any;
  id: number;
  popularity: number;
  budget: number;
  revenue: number;
  title: string;
  cast: string[];
  homepage: string;
  director: string;
  shortSummary: string;
  genres: string[];
  productionCompanies: string[];
  releaseYear: number;
}