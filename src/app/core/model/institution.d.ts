export interface InstitutionResponse {
  data: Institution[];
}

export interface InstitutionCard {
  id: string;
  name: string;
  profileImage: string;
  categories: Categories[];
}

export interface Categories {
  categoryAlias: string;
  color: string;
  createdAt: string;
  id: number;
  name: string;
}

export interface Institution {
  id: number;
  email: string;
  name: string;
  isActive: boolean;
  cep: string;
  numberAddress: number;
  city: string;
  state: string;
  neighborhood: string;
  images: string[];
  address: string;
  phoneNumber: string;
  addressAlias: string;
  complement: string;
  createdAt: Date;
  profileImage: null;
  donationImage: null;
  about: About;
  aboutProjects: AboutProject[];
  categories: Categories[];
}

export interface About {
  id: number;
  text: string;
  receiverId: number;
}

export interface AboutProject {
  id: number;
  text: string;
  image: string;
  title: string;
  receiverId: number;
}

export interface Donor {
  id: number;
  email: string;
  name: string;
  password: string;
  isActive: boolean;
  cep: string;
  numberAddress: number;
  city: string;
  state: string;
  neighborhood: string;
  address: string;
  phoneNumber: string;
  addressAlias: string;
  legalPurpose: string;
  legalDateCreate: string; // poderia usar Date, dependendo de como é utilizado
  legalNature: string;
  complement?: string; // opcional, caso não esteja sempre presente
  cnpj: string;
  createdAt: string; // poderia usar Date, dependendo de como é utilizado
  aboutId?: number | null; // opcional, pois pode ser null ou não estar presente
}
