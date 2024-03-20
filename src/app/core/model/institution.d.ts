export interface InstitutionResponse {
  data: Institution[];
}

export interface Institution {
  id: string;
  name: string;
  image: string;
  categories: Categories[];
}

export interface Categories {
  name: string;
  category: string;
}
